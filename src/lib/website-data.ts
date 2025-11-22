
export type Page = {
  url: string;
  title: string;
  content: string;
};

export const websiteData: Page[] = [
  {
    url: '/about',
    title: 'About Lexocrates',
    content:
      'Lexocrates, founded in Jaipur, India, is a Legal Process Outsourcing (LPO) firm serving law firms and corporations across Canada. Our mission is to revolutionize legal services through expertise, technology, and a client-centric approach. We are committed to partnership and excellence, empowering our clients by providing superior legal support services that enhance efficiency and reduce costs.',
  },
  {
    url: '/services',
    title: 'Our Services',
    content:
      'We offer a comprehensive suite of legal outsourcing solutions. Our services include Contract Lifecycle Management, Legal Research & Analysis, Regulatory Compliance, Document Review, Corporate Legal Solutions, and Intellectual Property Support. We tailor our solutions to your specific needs, integrating seamlessly with your existing workflows.',
  },
  {
    url: '/services/contract-management',
    title: 'Contract Lifecycle Management',
    content:
      'We manage the entire lifecycle of your contracts, from drafting and negotiation to execution and renewal. Our team ensures your agreements are robust, compliant, and aligned with your business objectives, minimizing risk and maximizing value. Key areas include contract drafting, review, negotiation support, and renewal management.',
  },
  {
    url: '/services/legal-research',
    title: 'Legal Research & Analysis',
    content:
      'Our legal research services provide the critical information you need to build strong cases and make informed decisions. We conduct thorough research on case law, statutes, and regulations, delivering concise and actionable analysis. Key areas include case law research, statutory analysis, and memorandum drafting.',
  },
  {
    url: '/careers',
    title: 'Careers at Lexocrates',
    content:
      'Join our team of forward-thinking legal experts. We foster a culture of innovation, collaboration, and continuous learning. We offer remote work, professional development, and exposure to cutting-edge legal technology. Open positions include Senior Legal Researcher and Contract Management Specialist.',
  },
  {
    url: '/contact',
    title: 'Contact Us',
    content:
      'You can contact us via our contact form or by email. For sales inquiries, email Sales@Lexocrates.com. For HR, email HR@lexocrates.com. Our main office is located at B-1402 Mangalam The Grand Residency, Sirsi Road, Jaipur, Rajasthan, India. Our office hours are Monday to Friday, 9:00 AM to 6:00 PM IST.',
  },
  {
    url: '/blog',
    title: 'Blog',
    content:
      'Our blog provides insights on legal outsourcing, industry trends, and best practices. Recent topics include the growing Indian LPO market, data security in outsourcing, and the strategic advantages of outsourcing to India, such as professionalism, talent, and time zone benefits.',
  },
  {
    url: '/',
    title: 'Homepage',
    content: 'Lexocrates provides end-to-end legal outsourcing solutions, empowering global legal excellence. We enable your firm to focus on strategy while we handle precision legal work. Our firm is built on decades of expertise and a deep understanding of global legal standards. We are your trusted partner in Legal Process Outsourcing (LPO).'
  }
];
