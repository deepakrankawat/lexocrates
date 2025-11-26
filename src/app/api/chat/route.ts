
import {NextRequest} from 'next/server';
import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {websiteData, type Page} from '@/lib/website-data';

// Define the input schema for the chat flow
const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })),
  prompt: z.string(),
});

const prompt = ai.definePrompt(
    {
      name: 'chatbot-prompt',
      input: {
        schema: z.object({
          prompt: z.string(),
          context: z.string(),
        }),
      },
      // IMPORTANT: The `context` Handlebars block is where we will inject the
      // relevant text from the user's website.
      prompt: `You are a helpful and friendly chatbot for a company called Lexocrates. Your goal is to answer user questions based on the provided information about the company's website.

Your responses should be:
- Derived ONLY from the context provided. Do not use any external knowledge.
- If the answer is not in the context, politely state that you don't have that information. Do not make up answers.
- Friendly, conversational, and concise.

CONTEXT:
{{{context}}}

USER QUESTION:
{{{prompt}}}

Answer the user's question based on the context above.
`,
    },
);

const chatFlow = ai.defineFlow(
    {
      name: 'chatFlow',
      inputSchema: ChatInputSchema,
      outputSchema: z.string(),
    },
    async ({history, prompt: userPrompt}) => {
      // 1. Find relevant pages from website data (simple keyword match)
      const keywords = userPrompt.toLowerCase().split(/\s+/);
      const matchedPages = websiteData.filter(page => {
        const pageContent = `${page.title.toLowerCase()} ${page.content.toLowerCase()}`;
        return keywords.some(keyword => pageContent.includes(keyword));
      });

      // 2. Combine matched data into a context string
      let context = "No relevant information found on the website.";
      if (matchedPages.length > 0) {
        context = matchedPages
            .map(page => `URL: ${page.url}\nTitle: ${page.title}\nContent: ${page.content}`)
            .join('\n\n---\n\n');
      }

      // 3. Send context + user message to AI model
      const {output} = await prompt({prompt: userPrompt, context});
      return output ?? "I'm sorry, I couldn't generate a response.";
    }
);

export async function POST(req: NextRequest) {
  const {history, prompt} = await req.json();

  const {stream} = await ai.run(chatFlow, {
    input: {history, prompt},
    stream: true,
  });

  return new Response(stream.pipeThrough(new TextEncoderStream()));
}
