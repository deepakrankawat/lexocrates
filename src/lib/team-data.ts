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
  expertise?: string[];
  email?: string;
  linkedin?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Yashvardhan Singh',
    title: 'Chief Executive Officer',
    slug: 'yashvardhan-singh',
    department: 'Executive Leadership',
    degree: 'LL.M., B.A. LL.B.',
    qualification: 'LL.M., B.A. LL.B. (Hons)',
    image:
      'https://images.unsplash.com/photo-1658250646172-227c363047af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'Visionary legal operations executive spearheading AI-powered Legal Process Outsourcing for North American and European practices. Leads long-term strategic direction, enterprise partnerships, and operational governance.',
    expertise: [
      'Sets strategic vision and multi-jurisdictional delivery direction',
      'Leads enterprise law firm and corporate legal partnerships',
      'Drives company growth, service scaling, and global expansion',
      'Represents Lexocrates in global legal and technology forums',
      'Ensures strict adherence to ethics, ABA, and SRA guidelines',
      'Oversees financial performance, transparency, and operational rigor',
    ],
    email: 'Support@lexocrates.com',
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
    image: '/images/team/ambika-shekhawat.jpg',
    tagline: 'Leading legal service delivery with precision, accountability and purpose.',
    bio: 'At Lexocrates, legal quality is not left to chance. As Senior Manager – Legal Services & Delivery, Ambika Shekhawat oversees legal service delivery, team development and the implementation of quality standards. Her focus is on ensuring that legal assignments are supported by sound legal reasoning, structured processes and clear accountability.',
    noteHeading: 'A Note from Our Senior Manager – Legal Services & Delivery',
    noteParagraphs: [
      '“Good legal work is not measured only by the final deliverable but also by the judgement, attention to detail and responsibility behind it.',
      'My experience across commercial contracts, business operations and litigation support has shaped my approach to legal work: understand the requirement, get the details right and take ownership of the outcome.',
      'At Lexocrates, my focus is on developing a team that brings sound legal judgement, attention to detail and a strong sense of ownership to every assignment. I believe that quality comes from setting clear expectations, maintaining consistent standards and taking responsibility for the work we deliver. Ultimately, our goal is to earn our clients’ trust through reliable, thoughtful legal support and become a team they can confidently depend on.”',
    ],
    email: 'Support@lexocrates.com',
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
  },
];
