
'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, X, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          history: messages,
          prompt: input,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Network response was not ok.');
      }
      
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      let fullResponse = "";
      setMessages((prev) => [...prev, { role: 'model', content: "" }]);

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        const chunk = decoder.decode(value, { stream: true });
        fullResponse += chunk;
        
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', content: fullResponse };
          return newMessages;
        });
      }

    } catch (error) {
      console.error('Error fetching chat response:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 md:right-8 z-50"
          >
            <Card className="w-[calc(100vw-32px)] sm:w-96 h-[60vh] flex flex-col shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Bot />
                  Lexocrates Assistant
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent className="flex-grow p-0">
                <ScrollArea className="h-full" ref={scrollAreaRef}>
                  <div className="p-4 space-y-4">
                    {messages.length === 0 && (
                       <div className="flex flex-col items-center justify-center h-full text-center text-foreground/60 p-8">
                         <MessageSquare className="h-12 w-12 mb-4" />
                         <p className="font-medium">Welcome to Lexocrates!</p>
                         <p className="text-sm">How can I help you today?</p>
                       </div>
                    )}
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={cn(
                          'flex items-start gap-3',
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.role === 'model' && (
                          <div className="bg-primary text-primary-foreground p-2 rounded-full">
                            <Bot className="h-5 w-5" />
                          </div>
                        )}
                        <div
                          className={cn(
                            'max-w-[80%] rounded-xl px-4 py-2 text-sm whitespace-pre-wrap',
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary'
                          )}
                        >
                          {message.content}
                        </div>
                         {message.role === 'user' && (
                          <div className="bg-accent text-accent-foreground p-2 rounded-full">
                            <User className="h-5 w-5" />
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                       <div className="flex items-start gap-3 justify-start">
                          <div className="bg-primary text-primary-foreground p-2 rounded-full">
                            <Bot className="h-5 w-5" />
                          </div>
                         <div className="bg-secondary rounded-xl px-4 py-2 flex items-center justify-center">
                            <Loader2 className="h-5 w-5 animate-spin text-primary" />
                         </div>
                       </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <form onSubmit={handleSubmit} className="flex w-full gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    disabled={isLoading}
                  />
                  <Button type="submit" disabled={isLoading}>
                    Send
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3, ease: 'easeOut' }}
        className="fixed bottom-6 right-4 sm:right-6 md:right-8 z-50"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
        </Button>
      </motion.div>
    </>
  );
}
