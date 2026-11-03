export type TeamMember = {
  name: string;
  title: string;
  slug: string;
  image: string;
  department: string;
  degree?: string;
  qualification?: string;
  tagline?: string;
  bio: string;
  noteHeading?: string;
  noteParagraphs?: string[];
  noteSignoffOrg?: string;
  expertise?: string[];
  email?: string;
  linkedin?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Yashvardhan Singh',
    title: 'Founder & CEO',
    slug: 'yashvardhan-singh',
    department: 'Executive Leadership',
    degree: 'LL.M., B.A. LL.B.',
    qualification: 'LL.M., B.A. LL.B. (Hons)',
    image:
      'https://images.unsplash.com/photo-1658250646172-227c363047af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tagline: 'Guiding Lexocrates with purpose and a commitment to lasting client relationships.',
    bio: "Yashvardhan Singh brings experience in public interest litigation to his leadership of Lexocrates, including work before the Supreme Court of India. His legal experience includes matters concerning unlawful toll collections and fair water distribution.\n\nAs Founder & CEO, he leads the company's strategy, culture and long-term growth.",
    noteHeading: 'A Message from Our Founder & CEO',
    noteParagraphs: [
      '“Trust is built when the work lives up to the promise.”',
      'I founded Lexocrates because I believe legal professionals deserve support they can rely on, particularly when deadlines are pressing and attention to detail matters most.',
      "Our approach begins with understanding each client's practice, priorities and expectations. We aim to work closely with their teams, respect their processes, communicate openly and approach every assignment with the care and responsibility it deserves.",
      'As CEO, my responsibility is to ensure that our people have the guidance, resources and confidence to do their best work. I believe in building a culture where questions are encouraged, challenges are addressed early and every individual understands the value of their contribution. Technology helps us work more efficiently, but professional judgment, confidentiality and attention to quality remain central to everything we do.',
      "My ambition is to build Lexocrates into a trusted and valued part of our clients' legal operations, while creating an environment where talented professionals can learn, grow and build meaningful careers. For me, our success will be measured not just by how much we grow, but by the trust we earn, the quality we maintain and the people we develop along the way.",
    ],
    noteSignoffOrg: 'Lexocrates Legal Services',
    email: 'Support@lexocrates.com',
    linkedin: 'https://www.linkedin.com/in/yashvardhan-singh-b849988/',
  },
  {
    name: 'Geetanjali',
    title: 'Chief Operating Officer',
    slug: 'geetanjali',
    department: 'Operations & Delivery',
    degree: 'MBA, B.Tech',
    qualification: 'MBA (Operations), B.Tech',
    image:
      'https://images.unsplash.com/photo-1580196979522-c4f177b34981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'Manages day-to-day operations and service delivery centers. Implements stringent quality controls, confidentiality safeguards, and workflow optimization across cross-border matters.',
    expertise: [
      'Manages 24/7 cross-border operations and matter intake',
      'Implements multi-tiered quality control and verification checks',
      'Oversees resource allocation and rapid legal pod onboarding',
      'Ensures ISO 27001 and GDPR data confidentiality protocols',
      'Drives operational process optimization and workflow velocity',
      'Leads cross-functional delivery teams for litigation and transactional matters',
    ],
    email: 'Support@lexocrates.com',
  },
  {
    name: 'Ambika Shekhawat',
    title: 'Senior Manager – Legal Services & Delivery',
    slug: 'ambika-shekhawat',
    department: 'Legal Services & Delivery',
    degree: 'LL.M., B.A. LL.B.',
    qualification:
      'LL.M. in Corporate & Commercial Laws, Queen Mary University of London | B.A. LL.B. (Hons.), Manipal University Jaipur',
    image: '/images/team/ambika-shekhawat-v5.jpg',
    tagline: 'Leading legal service delivery with precision, accountability and purpose.',
    bio: 'At Lexocrates, legal quality is not left to chance. As Senior Manager – Legal Services & Delivery, Ambika Shekhawat oversees legal service delivery, team development and the implementation of quality standards. Her focus is on ensuring that legal assignments are supported by sound legal reasoning, structured processes and clear accountability.',
    noteHeading: 'A Note from Our Senior Manager – Legal Services & Delivery',
    noteParagraphs: [
      '“Good legal work is not measured only by the final deliverable but also by the judgement, attention to detail and responsibility behind it.',
      'My experience across commercial contracts, business operations and litigation support has shaped my approach to legal work: understand the requirement, get the details right and take ownership of the outcome.',
      'At Lexocrates, my focus is on developing a team that brings sound legal judgement, attention to detail and a strong sense of ownership to every assignment. I believe that quality comes from setting clear expectations, maintaining consistent standards and taking responsibility for the work we deliver. Ultimately, our goal is to earn our clients’ trust through reliable, thoughtful legal support and become a team they can confidently depend on.”',
    ],
    email: 'Support@lexocrates.com',
    linkedin: 'https://www.linkedin.com/in/ambika-shekhawat/',
  },
  {
    name: 'Rayan Singh Virdi',
    title: 'Junior Legal Associate',
    slug: 'rayan-singh-virdi',
    department: 'Legal Services & Delivery',
    degree: 'LL.M., B.A. LL.B.',
    qualification:
      'LL.M. in Criminal Law, Dr. Bhimrao Ambedkar Law University, Jaipur | B.A. LL.B. (Hons.), Manipal University Jaipur',
    image: '/images/team/rayan-singh-virdi-v3.jpg',
    tagline: 'Delivering analytical precision and practical corporate legal solutions.',
    bio: 'Rayan Singh Virdi is a legal professional with a strong foundation in corporate and commercial law. He holds a B.A. LL.B. (Hons.) from Manipal University Jaipur and an LL.M. in Criminal Law from Dr. Bhimrao Ambedkar Law University, Jaipur. With experience in contract management, legal advisory, and research, he brings an analytical mindset, a solution-oriented approach, and a commitment to continuous learning and professional excellence.',
    expertise: [
      'Drafts, reviews, and negotiates commercial contracts and vendor agreements',
      'Conducts comprehensive legal research on corporate and regulatory compliance',
      'Assists law firms and legal departments with contract lifecycle management',
      'Provides practical legal advisory on transactional and statutory matters',
      'Prepares thorough due diligence reports and corporate legal documentation',
      'Applies solution-oriented legal methodologies to multi-jurisdictional assignments',
    ],
    email: 'Support@lexocrates.com',
    linkedin: 'https://www.linkedin.com/in/rayan-singh-virdi-3b1b74187/',
  },
  {
    name: 'Shreya',
    title: 'Junior Legal Associate',
    slug: 'shreya',
    department: 'Legal Services & Delivery',
    degree: 'B.A. LL.B. (Hons)',
    qualification: 'B.A. LL.B. (Hons.), National Law University, Delhi',
    image: '/images/team/shreya-v3.jpg',
    tagline: 'Delivering accurate, research-driven legal and contract support.',
    bio: 'Shreya is a B.A. LL.B. (Hons.) graduate from National Law University, Delhi, with a strong foundation in corporate and commercial law. Her experience spans legal research, contract review, litigation support, regulatory compliance and case analysis through internships with law firms, an in-house legal team and judicial chambers. She has worked on commercial agreements, due diligence, dispute-related research and legal drafting. At Lexocrates, she is focused on applying her legal skills to Canadian legal services and delivering accurate, research-driven support to clients.',
    expertise: [
      'Executes multi-jurisdictional legal research and case analysis for Canadian legal services',
      'Conducts contract review, redlining, and due diligence for commercial agreements',
      'Assists law firm partners with litigation support and dispute-related research',
      'Prepares structured regulatory compliance documentation and legal drafts',
      'Analyzes statutory frameworks, case law precedents, and corporate governance matters',
      'Delivers high-precision legal operations support aligned with institutional standards',
    ],
    email: 'Support@lexocrates.com',
    linkedin: 'https://www.linkedin.com/in/shreya-sahu-48052a235/',
  },
  {
    name: 'Vaanya Mathur',
    title: 'Junior Legal Associate',
    slug: 'vaanya-mathur',
    department: 'Legal Services & Delivery',
    degree: 'LL.M., B.Com. LL.B.',
    qualification:
      'LL.M. in Corporate & Financial Law & Policy, O.P. Jindal Global University | B.Com. LL.B. (Hons.), Nirma University, Ahmedabad',
    image: '/images/team/vaanya-mathur.jpg',
    tagline: 'Delivering precise cross-border legal research, contract drafting and regulatory support.',
    bio: 'Vaanya Mathur holds an LL.M. in Corporate and Financial Law & Policy from O.P. Jindal Global University and a B.Com. LL.B. (Hons.) from Nirma University, Ahmedabad. Her work spans cross-border legal research, contract management, drafting and case analysis across different jurisdictions. Her background in corporate and commercial law, regulatory compliance and foreign investment brings a broad legal and business perspective to her work. She focuses on sound research, precise drafting and practical legal support for businesses operating across borders.',
    expertise: [
      'Executes cross-border legal research, contract management, and multi-jurisdictional drafting',
      'Provides strategic corporate and commercial advisory, compliance, and governance support',
      'Conducts foreign investment legal reviews, FDI diligence, and cross-border structuring',
      'Performs in-depth statutory case analysis, precedent tracking, and regulatory analysis',
      'Drafts, reviews, and redlines commercial agreements and corporate documentation',
      'Delivers research-driven, practical legal support for international enterprise operations',
    ],
    email: 'Support@lexocrates.com',
    linkedin: 'https://www.linkedin.com/in/vaanya-mathur-8310b220b/',
  },
  {
    name: 'Sam Panwar',
    title: 'Head of Technology',
    slug: 'sam-panwar',
    department: 'Technology & AI',
    degree: 'B.Tech',
    qualification: 'B.Tech (Computer Science)',
    image:
      'https://images.unsplash.com/photo-1546572797-e8c933a75a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'Architects enterprise AI infrastructure, security frameworks, and workflow automation powering Lexocrates. Combines machine learning with strict SOC 2 compliance for law firm clients.',
    expertise: [
      'Leads enterprise AI engineering and legal tech integrations',
      'Oversees Lextimator™ scoping engine and matter estimation tools',
      'Architects SOC 2, HIPAA, and PIPEDA-aligned cloud infrastructure',
      'Coordinates with legal ops leads for seamless automation workflows',
      'Drives zero-data-retention security controls for client matter files',
      'Manages scalable software infrastructure and API integrity',
    ],
    email: 'Support@lexocrates.com',
    linkedin: 'https://www.linkedin.com/in/sam-panwar-7524b014/',
  },
  {
    name: 'Khushal Singh',
    title: 'Marketing and Sales Manager',
    slug: 'khushal-singh-shekhawat',
    department: 'Client Partnerships',
    degree: 'MBA',
    qualification: 'MBA (Marketing)',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'Drives commercial strategy, law firm partnerships, and strategic expansion across Canada, the US, and the UK. Connects managing partners with flexible, cost-advantaged legal capacity.',
    expertise: [
      'Expands law firm and corporate legal department partnerships',
      'Manages enterprise legal sales and business development pipelines',
      'Structures custom LexPack™ capacity packages for growing practices',
      'Coordinates international go-to-market and legal brand positioning',
      'Ensures client satisfaction, onboarding ease, and service alignment',
      'Conducts strategic legal operations assessments for prospective clients',
    ],
    email: 'Support@lexocrates.com',
    linkedin: 'https://www.linkedin.com/in/khushal-singh-shekhawat-b2476518b/',
  },
  {
    name: 'Deepak Rankawat',
    title: 'Software Engineer',
    slug: 'deepak-rankawat',
    department: 'Engineering',
    degree: 'MCA',
    qualification: 'MCA',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'Builds secure client portals, estimation engines, API architectures, and AI-enabled legal review pipelines. Focuses on high-performance web systems and bulletproof data security.',
    expertise: [
      'Architects core client web portal and interactive legal tools',
      'Builds and optimizes Lextimator™ AI estimation interfaces',
      'Integrates secure API infrastructure, encryption, and automated webhooks',
      'Maintains ultra-fast performance, accessibility, and clean architecture',
      'Implements end-to-end data encryption and client confidentiality standards',
      'Collaborates cross-functionally with legal ops and AI engineering teams',
    ],
    email: 'Support@lexocrates.com',
    linkedin: 'https://www.linkedin.com/in/deepak-rankawat-658b0a259/',
  },
];
