
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const servicesList = [
  { 
    name: 'Legal Research & Writing', 
    slug: 'legal-research-writing', 
    iconName: 'Search', 
    description: "Multi-jurisdictional case law synthesis and trial-ready briefing for complex global litigation.",
    longDescription: "Our Legal Research & Writing department functions as the intellectual engine for elite law firms. We don't just find cases; we synthesize complex multi-jurisdictional precedents into high-fidelity legal strategies. Our team is trained in the specific procedural requirements of US, UK, and Canadian courts, utilizing the Socratic method to uncover hidden legal risks and opportunities. We specialize in preparing appellate-grade briefs, motions for summary judgment, and strategic memorandums that meet the highest standards of the Bluebook and ALWD guides. By integrating with your firm's Westlaw or LexisNexis environments, we provide seamless, overnight research support that allows your partners to walk into court with a distinct informational advantage.",
    keyAreas: [
      "Multi-State Case Law Synthesis (US)",
      "UK Common Law Statutory Interpretation",
      "Appellate-Grade Brief Drafting",
      "Motion for Summary Judgment Prep",
      "Inter-Jurisdictional Comparative Surveys",
      "Regulatory Compliance Memorandums"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-corporate-law')
  },
  { 
    name: 'Litigation Support Services', 
    slug: 'litigation-support', 
    iconName: 'Gavel', 
    description: "End-to-end trial preparation and deposition analytics to maximize courtroom efficiency.",
    longDescription: "We empower trial lawyers by managing the exhaustive operational complexities of high-stakes litigation. Our litigation support team acts as a direct extension of your trial room, handling everything from case chronology development to the preparation of comprehensive witness binders. We excel in deposition summarization—transforming thousands of pages of testimony into actionable intelligence highlights. Our 'Overnight Advantage' model ensures that while your team is resting in New York or London, our Jaipur-based experts are refining exhibit logs and drafting discovery responses, providing 24/7 productivity. We integrate with platforms like Clio and TrialPad to ensure that every exhibit is indexed and every deadline is tracked with zero-margin-for-error precision.",
    keyAreas: [
      "Deposition Analytics & Summarization",
      "Trial Exhibit Management & Indexing",
      "Case Chronology Construction",
      "Discovery Request Response Drafting",
      "Witness Interview Highlight Reels",
      "Pleading Formatting & E-Filing Support"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-family-law')
  },
  { 
    name: 'Contract Lifecycle Management', 
    slug: 'contract-review-management', 
    iconName: 'FileText', 
    description: "Strategic redlining and template standardization to mitigate risk across global portfolios.",
    longDescription: "Our Contract Lifecycle Management (CLM) service transforms contract management from a bottleneck into a strategic asset. We handle the entire lifecycle—from initial drafting and rigorous redlining to obligation tracking and renewal audits. Our methodology relies on 'Playbook-First' integration, where we codify your firm's risk tolerance into a standardized review protocol. This ensures that every vendor agreement, employment contract, or M&A document is reviewed with absolute consistency across your global operations. We specialize in cross-border contract standardization, ensuring that your agreements remain enforceable and compliant across US, UK, and Canadian jurisdictions. By automating obligation alerts and conducting regular portfolio audits, we mitigate the hidden risks of missed renewals and non-compliance penalties.",
    keyAreas: [
      "Standardized Review Playbook Creation",
      "Multi-Jurisdictional Redlining",
      "Contract Obligation & Renewal Tracking",
      "M&A Due Diligence Document Review",
      "Template Library Optimization",
      "Vendor Risk Assessment Audits"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-real-estate-law')
  },
  { 
    name: 'eDiscovery & Document Review', 
    slug: 'document-review-ediscovery', 
    iconName: 'Search', 
    description: "Surgical-precision data review using advanced AI and multi-tiered quality control protocols.",
    longDescription: "In an era of petabyte-scale data, we provide the surgical precision required to identify the 'smoking gun' without the overhead of massive domestic review teams. Our eDiscovery department utilizes a multi-tiered Quality Control (QC) architecture—integrating Technology Assisted Review (TAR) and Predictive Coding with expert human oversight. Our reviewers are trained in the nuances of privilege, work-product doctrine, and data privacy (GDPR/CCPA), ensuring that your production sets are both comprehensive and secure. We operate within industry-leading platforms like Relativity and Everlaw, performing first-pass reviews, second-level quality checks, and complex redaction logging. Our goal is to dramatically reduce your firm's discovery spend while increasing the accuracy and defensibility of your document productions.",
    keyAreas: [
      "TAR & Predictive Coding Integration",
      "First-Pass Relevance Review",
      "Complex Privilege & Work-Product Logging",
      "GDPR & Data Privacy Redactions",
      "Chronological Data Extraction",
      "Production Set Verification (QC)"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-ip-law')
  },
  { 
    name: 'Compliance & Regulatory Support', 
    slug: 'compliance-regulatory', 
    iconName: 'ShieldCheck', 
    description: "Proactive global regulatory monitoring and gap remediation for corporate stewardship.",
    longDescription: "Navigating the global regulatory labyrinth requires more than just reactive fixes; it requires proactive stewardship. Lexocrates provides a comprehensive compliance infrastructure designed to keep your firm ahead of evolving laws in the US (SEC/FINRA), UK (FCA), and Canada (OSFI). We conduct deep-dive regulatory gap analyses to identify vulnerabilities in your current protocols and draft high-fidelity compliance policies to remediate them. Our team provides ongoing monitoring of legislative changes, delivering executive summaries that translate complex legal shifts into actionable business strategy. Whether managing AML/KYC documentation for a financial institution or ensuring GDPR compliance for a global tech firm, we provide the ongoing vigilance required to protect your reputation and your bottom line.",
    keyAreas: [
      "Cross-Border Regulatory Monitoring",
      "AML & KYC Document Verification",
      "GDPR / CCPA Gap Remediation",
      "Compliance Policy & Manual Drafting",
      "Risk Register Maintenance",
      "Internal Governance Audits"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-criminal-defense')
  },
  { 
    name: 'Paralegal & Virtual Operations', 
    slug: 'paralegal-assistant', 
    iconName: 'Users', 
    description: "High-fidelity administrative integration to optimize senior counsel's billable performance.",
    longDescription: "Our Paralegal & Virtual Legal Assistant services are designed to strip away the administrative friction that hinders senior legal counsel. We don't just 'assist'; we integrate into your firm's management software (Clio, MyCase, etc.) to handle the high-volume, high-precision tasks that keep a practice running. From managing complex master calendars and coordinating multi-jurisdictional conflict checks to proofreading appellate filings and coordinating with court clerks, we provide the operational stability your firm needs to scale. Our virtual assistants are trained in the specific professional ethics and confidentiality protocols of Western law firms, acting as a seamless, high-fidelity extension of your internal team. This allows your partners to focus exclusively on client advocacy and high-value strategic decision-making.",
    keyAreas: [
      "Firm Management Software Integration",
      "Multi-Jurisdictional Conflict Checks",
      "Master Calendar & Docket Management",
      "Legal Billing & Invoicing Analytics",
      "Court Filing (E-Filing) Coordination",
      "Proofreading & Bluebook Verification"
    ],
    image: PlaceHolderImages.find(img => img.id === 'service-immigration-law')
  },
];
