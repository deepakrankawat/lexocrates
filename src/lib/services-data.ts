
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const servicesList = [
  { 
    name: 'Legal Research & Writing', 
    slug: 'legal-research-writing', 
    iconName: 'Search', 
    description: "In-depth legal research and high-quality writing services to support complex cases.",
    longDescription: "Our Legal Research & Writing service provides the intellectual backbone for your cases. We conduct thorough multi-jurisdictional research on case law, statutes, and regulations, delivering precise memorandums and briefs that stand up to the highest scrutiny.",
    keyAreas: [
      "Case Law Research",
      "Statutory Analysis",
      "Memorandum Drafting",
      "Appellate Brief Writing",
      "Motion for Summary Judgment Drafting",
      "Jurisdictional Surveys"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-corporate-law')
  },
  { 
    name: 'Litigation Support Services', 
    slug: 'litigation-support', 
    iconName: 'Gavel', 
    description: "Comprehensive support for all stages of litigation, from discovery to trial preparation.",
    longDescription: "We empower trial lawyers by handling the heavy lifting of litigation preparation. Our team assists with case organizing, witness preparation materials, and exhibit management, ensuring your trial team is focused on winning.",
    keyAreas: [
      "Trial Exhibit Preparation",
      "Witness Interview Summaries",
      "Deposition Summarization",
      "Case Chronology Development",
      "Pleading Drafting",
      "Discovery Request Responses"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-family-law')
  },
  { 
    name: 'Contract Review & Management', 
    slug: 'contract-review-management', 
    iconName: 'FileText', 
    description: "End-to-end management of contracts, from initial drafting to final execution and tracking.",
    longDescription: "Our Contract Review & Management service streamlines your agreement workflows. We manage the entire lifecycle of your contracts, ensuring robust protection, compliance, and template standardization for global operations.",
    keyAreas: [
      "Contract Drafting & Redlining",
      "Obligation & Deadline Tracking",
      "Template Standardization",
      "Lease Abstracting",
      "Vendor Agreement Management",
      "Contract Lifecycle Audit"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-real-estate-law')
  },
  { 
    name: 'Document Review (eDiscovery)', 
    slug: 'document-review-ediscovery', 
    iconName: 'Search', 
    description: "Efficient and accurate review of legal documents using advanced eDiscovery technologies.",
    longDescription: "We provide high-speed, high-accuracy document review services for complex litigation and internal investigations. Leveraging industry-leading eDiscovery tools, we help you identify critical evidence while managing privilege and sensitivity.",
    keyAreas: [
      "First-Pass Review",
      "Privilege & Redaction Logs",
      "Quality Assurance Audits",
      "Second-Level Quality Review",
      "Technology Assisted Review (TAR)",
      "Production Review"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-ip-law')
  },
  { 
    name: 'Compliance & Regulatory Support', 
    slug: 'compliance-regulatory', 
    iconName: 'ShieldCheck', 
    description: "Ensuring your business stays compliant with the latest global laws and regulations.",
    longDescription: "Navigating international regulations requires constant vigilance. We provide comprehensive compliance support, helping you develop policies, monitor regulatory changes, and implement gap-reduction strategies to protect your reputation.",
    keyAreas: [
      "GDPR & Data Privacy Compliance",
      "Regulatory Gap Analysis",
      "Policy & Procedure Drafting",
      "Compliance Monitoring & Audits",
      "AML & KYC Documentation",
      "Corporate Governance Support"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-criminal-defense')
  },
  { 
    name: 'Paralegal & Virtual Assistant Services', 
    slug: 'paralegal-assistant', 
    iconName: 'Users', 
    description: "Dedicated paralegal support to streamline your legal operations and administrative tasks.",
    longDescription: "Our Paralegal & Virtual Legal Assistant services act as an immediate extension of your team. We handle the administrative and procedural complexities of a modern law office, allowing senior partners to focus on client strategy and high-value work.",
    keyAreas: [
      "Administrative Filing & Scheduling",
      "Legal Billing & Invoicing Support",
      "Client Communication Management",
      "Document Formatting & Proofreading",
      "Database & CRM Management",
      "Conflict Check Coordination"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-immigration-law')
  },
];
