
import { Briefcase, Users, Home, Brain, Shield, Landmark, FileText, Search } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const servicesList = [
  { 
    name: 'Contract Lifecycle Management', 
    slug: 'contract-management', 
    icon: FileText, 
    description: "End-to-end support for contract drafting, review, and management.",
    longDescription: "We manage the entire lifecycle of your contracts, from drafting and negotiation to execution and renewal. Our team ensures your agreements are robust, compliant, and aligned with your business objectives, minimizing risk and maximizing value.",
    keyAreas: [
      "Contract Drafting & Review",
      "Negotiation Support",
      "Obligation Tracking",
      "Renewal Management",
      "Template Standardization",
      "Repository Management"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-corporate-law')
  },
  { 
    name: 'Legal Research & Analysis', 
    slug: 'legal-research', 
    icon: Search, 
    description: "In-depth legal research and analysis to support your cases and decisions.",
    longDescription: "Our legal research services provide the critical information you need to build strong cases and make informed decisions. We conduct thorough research on case law, statutes, and regulations, delivering concise and actionable analysis.",
    keyAreas: [
      "Case Law Research",
      "Statutory & Regulatory Analysis",
      "Multi-jurisdictional Surveys",
      "Legislative Monitoring",
      "Memorandum Drafting",
      "Precedent Analysis"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-family-law')
  },
  { 
    name: 'Regulatory Compliance', 
    slug: 'regulatory-compliance', 
    icon: Landmark, 
    description: "Ensuring your business adheres to all relevant laws and regulations.",
    longDescription: "Navigating the complex web of regulations is a challenge for any business. We provide comprehensive compliance support, helping you identify applicable laws, develop policies, and implement procedures to ensure full adherence.",
    keyAreas: [
      "Compliance Program Development",
      "Regulatory Gap Analysis",
      "Policy Drafting & Implementation",
      "Compliance Audits & Monitoring",
      "Risk Assessments",
      "Training & Education"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-real-estate-law')
  },
  { 
    name: 'Document Review', 
    slug: 'document-review', 
    icon: FileText, 
    description: "Efficient and accurate review of legal documents for litigation and due diligence.",
    longDescription: "Our document review services leverage advanced technology and expert reviewers to deliver fast and accurate results for litigation, due diligence, and internal investigations. We help you find the critical information you need, when you need it.",
    keyAreas: [
      "E-Discovery & Litigation Support",
      "Due Diligence for M&A",
      "Internal Investigations",
      "Privilege & Redaction Logs",
      "First-Pass & Second-Level Review",
      "Technology-Assisted Review (TAR)"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-ip-law')
  },
  { 
    name: 'Corporate Legal Solutions', 
    slug: 'corporate-solutions', 
    icon: Briefcase,
    description: "Comprehensive support for your in-house legal department.",
    longDescription: "We act as an extension of your in-house legal team, providing flexible and scalable support for a wide range of corporate legal tasks. From entity management to routine commercial contracts, we help you manage your workload more effectively.",
    keyAreas: [
      "Corporate Secretarial Services",
      "Entity Management",
      "Commercial Contract Support",
      "Compliance Administration",
      "Legal Operations Consulting",
      "Special Projects Support"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-criminal-defense')
  },
  { 
    name: 'Intellectual Property Support', 
    slug: 'ip-support', 
    icon: Brain, 
    description: "Administrative and paralegal support for your IP portfolio.",
    longDescription: "We provide comprehensive support for managing your intellectual property assets. Our services include docketing, patent proofreading, trademark renewals, and other administrative tasks to help you protect and maintain your valuable IP portfolio.",
    keyAreas: [
      "Patent & Trademark Docketing",
      "Annuity & Renewal Management",
      "Patent Proofreading",
      "Prior Art Searches",
      "IP-related Data Verification",
      "Portfolio Management Support"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-immigration-law')
  },
];
