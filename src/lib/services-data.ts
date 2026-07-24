import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from '@/lib/placeholder-images';

export type ServiceContentItem = {
  title: string;
  description: string;
};

export type Service = {
  name: string;
  slug: string;
  iconName: string;
  description: string;
  longDescription: string;
  keyAreas: string[];
  bestFor: string[];
  process: ServiceContentItem[];
  deliverables: string[];
  benefits: ServiceContentItem[];
  qualityControls: string[];
  securityControls: ServiceContentItem[];
  engagementModels: ServiceContentItem[];
  securitySummary: string;
  image?: ImagePlaceholder;
};

export const servicesList: Service[] = [
  {
    name: 'Legal Research & Writing',
    slug: 'legal-research-writing',
    iconName: 'Search',
    description:
      'Reliable, source-backed legal research and writing services across Canada, the UK, and the USA for law firms and in-house legal departments.',
    longDescription:
      'Our legal research and writing services support law firms and in-house legal departments with reliable, source-backed legal analysis across Canada, the UK, and the USA. Every assignment is tailored to the client\'s legal issue, jurisdiction, procedural posture, preferred authorities, and required deliverable. Whether assisting with litigation, regulatory interpretation, contract disputes, appellate matters, or corporate legal work, we deliver clear, well-structured research that strengthens legal decision-making while allowing your team to retain complete control over legal strategy and client advice.',
    keyAreas: [
      'Canadian, UK & US Legal Research',
      'Case Law & Precedent Analysis',
      'Legal Memoranda & Research Notes',
      'Motion & Brief Drafting Support',
      'Appellate Research & Writing',
      'Regulatory & Compliance Research',
    ],
    bestFor: [
      'Law firms managing high-volume research requirements',
      'In-house legal departments requiring scalable research support',
      'Litigation and dispute resolution matters',
      'Corporate and commercial legal teams',
      'Cross-border legal matters across Canada, the UK, and the USA',
      'Legal teams seeking reliable, source-backed analysis',
    ],
    process: [
      {
        title: '01. Understanding the Assignment',
        description:
          'We begin by reviewing the legal issue, jurisdiction, procedural posture, relevant facts, deadlines, preferred research sources, citation requirements, and the intended purpose of the final work product.',
      },
      {
        title: '02. Research Strategy & Authority Review',
        description:
          'Our team develops a research plan based on applicable statutes, regulations, case law, persuasive authorities, and recognised secondary sources, while identifying any potential adverse or conflicting authorities.',
      },
      {
        title: '03. Legal Research & Source Verification',
        description:
          'Researchers collect and analyse relevant legal authorities, verify the current status of primary sources where applicable, and document all supporting references for accuracy and traceability.',
      },
      {
        title: '04. Legal Analysis & Draft Preparation',
        description:
          'The research is translated into clear, practical work product, whether a legal memorandum, case analysis, comparative survey, draft argument, or research summary, using the client\'s preferred format and citation style.',
      },
      {
        title: '05. Independent Quality Review',
        description:
          'Every assignment undergoes an independent review to verify legal authorities, citation accuracy, issue coverage, logical consistency, and adherence to client instructions before delivery.',
      },
      {
        title: '06. Final Delivery',
        description:
          'The completed work product is delivered securely in the agreed format, with ongoing support available for clarifications, revisions, or additional research where required.',
      },
    ],
    deliverables: [
      'Legal research memoranda',
      'Case law and precedent matrices',
      'Motion and brief drafting support',
      'Multi-jurisdictional legal research',
      'Statutory and regulatory comparison tables',
      'Citation tables and source-linked research packs',
      'Chronologies and factual issue summaries',
      'Legal research updates and monitoring',
    ],
    benefits: [
      {
        title: 'Greater Leverage for Senior Lawyers',
        description:
          'Reduce the time spent on research and authority collection, allowing lawyers to focus on legal analysis, client advice, negotiation, and advocacy.',
      },
      {
        title: 'Faster Access to Reliable Research',
        description:
          'Structured research methodologies and parallel workflows help accelerate turnaround without compromising quality or traceability.',
      },
      {
        title: 'Well-Supported Legal Analysis',
        description:
          'Every assignment is backed by verified legal authorities, clear citations, and documented reasoning, making the work easier to review and rely upon.',
      },
      {
        title: 'Consistent Work Product',
        description:
          'Standardised research methods, client-specific templates, and documented review processes help maintain consistency across matters and legal teams.',
      },
    ],
    qualityControls: [
      'Defined scope and research objectives',
      'Review of applicable primary and secondary authorities',
      'Authority verification and currency checks where applicable',
      'Citation and reference verification',
      'Adverse authority and exception review',
      'Independent legal quality review before final delivery',
    ],
    securityControls: [
      {
        title: 'Matter-level access',
        description:
          'Researchers receive access only to the files, facts, and platforms required for the assigned issue; unrelated client matters remain segregated.',
      },
      {
        title: 'Controlled research environments',
        description:
          'Client research credentials and source documents stay within approved systems. Downloads, exports, and local storage are restricted by the engagement protocol.',
      },
      {
        title: 'Privilege-aware handling',
        description:
          'Instructions, work product, attorney comments, and litigation strategy are treated as confidential matter material with defined escalation and delivery rules.',
      },
      {
        title: 'Governed use of technology',
        description:
          'Client information is not placed into unapproved public AI tools. Any AI-assisted workflow is scoped, permissioned, source-checked, and subject to human legal review.',
      },
    ],
    engagementModels: [
      {
        title: 'Single assignment',
        description:
          'A defined memorandum, survey, drafting task, or urgent research question with a fixed scope and delivery date.',
      },
      {
        title: 'Overflow research desk',
        description:
          'Flexible capacity for recurring research and drafting requests using agreed templates, turnaround bands, and escalation rules.',
      },
      {
        title: 'Dedicated knowledge pod',
        description:
          'A stable team that learns the client’s matters, preferred authorities, writing conventions, and internal knowledge systems.',
      },
    ],
    securitySummary:
      'Confidentiality is built into intake, source access, drafting, review, and delivery. Attorney strategy remains under client control, and technology supports—not replaces—human legal judgment.',
    image: PlaceHolderImages.find(
      (image) => image.id === 'service-corporate-law'
    ),
  },
  {
    name: 'Litigation Support',
    slug: 'litigation-support',
    iconName: 'Gavel',
    description:
      'Operational litigation support from case preparation and discovery to testimony review and trial readiness.',
    longDescription:
      'Our litigation support services help law firms and corporate legal departments manage the operational demands of litigation with accuracy, consistency, and efficiency. From case preparation and discovery support to document management, testimony review, and trial preparation, we work as an extension of your legal team to streamline litigation workflows while allowing counsel to retain full control over legal strategy, advocacy, and client representation.',
    keyAreas: [
      'Case File & Matter Management',
      'Discovery Review & Response Support',
      'Witness Statement & Testimony Review',
      'Hearing & Trial Preparation',
      'Deadline & Docket Management',
      'Litigation Document Quality Control',
    ],
    bestFor: [
      'Law firms handling complex litigation matters',
      'Corporate legal departments managing disputes',
      'Commercial and civil litigation support',
      'Discovery-intensive matters',
      'Hearing and trial preparation',
      'Legal teams requiring scalable litigation support',
    ],
    process: [
      {
        title: '01. Matter Assessment & Planning',
        description:
          'We review the case background, litigation stage, jurisdiction, deadlines, required deliverables, and client-specific instructions to establish the scope of support.',
      },
      {
        title: '02. Case Organisation & Document Review',
        description:
          'Our team organises case materials, reviews pleadings and supporting documents, prepares chronologies, and structures information for efficient access throughout the matter.',
      },
      {
        title: '03. Discovery & Evidence Support',
        description:
          'We assist with document review, discovery preparation, witness materials, exhibit organisation, and evidence management while maintaining documented review procedures and confidentiality.',
      },
      {
        title: '04. Litigation Document Preparation',
        description:
          'We prepare litigation-ready work product, including discovery materials, hearing bundles, case summaries, witness files, and supporting documentation in accordance with client requirements.',
      },
      {
        title: '05. Quality Review',
        description:
          'Every deliverable undergoes an independent quality review to verify completeness, consistency, formatting, document accuracy, and compliance with client instructions.',
      },
      {
        title: '06. Secure Delivery & Ongoing Support',
        description:
          'Completed work is delivered securely and on schedule, with continued support available for updates, additional documentation, or evolving litigation requirements.',
      },
    ],
    deliverables: [
      'Case Chronologies',
      'Discovery Support Documents',
      'Witness Statement Summaries',
      'Hearing & Trial Bundles',
      'Exhibit Lists & Document Indexes',
      'Case Status Reports',
      'Litigation Document Formatting',
      'Matter Progress Updates',
    ],
    benefits: [
      {
        title: 'Greater Efficiency',
        description:
          'Reduce the administrative workload associated with litigation, allowing your legal team to focus on case strategy, advocacy, and client representation.',
      },
      {
        title: 'Better Matter Organisation',
        description:
          'Well-structured case files and organised documentation improve accessibility and help legal teams work more efficiently throughout the litigation process.',
      },
      {
        title: 'Reliable Litigation Support',
        description:
          'Consistent workflows, documented procedures, and quality reviews help maintain accuracy across every stage of a matter.',
      },
      {
        title: 'Scalable Resources',
        description:
          'Access additional litigation support as workloads increase without disrupting your existing legal operations.',
      },
    ],
    qualityControls: [
      'Clearly defined scope and matter requirements',
      'Structured document organisation and review',
      'Discovery and evidence quality checks',
      'Formatting, completeness, and accuracy verification',
      'Independent quality assurance before delivery',
      'Secure delivery under attorney supervision',
    ],
    securityControls: [
      {
        title: 'Segregated matter workspaces',
        description:
          'Each litigation matter uses defined access groups, repositories, naming rules, and delivery paths to reduce cross-matter exposure.',
      },
      {
        title: 'Privilege-sensitive workflows',
        description:
          'Potentially privileged communications, attorney work product, strategy notes, and protected witness material follow heightened access and escalation rules.',
      },
      {
        title: 'Controlled source and production access',
        description:
          'Reviewers work in approved repositories or client systems wherever practical, with downloading, copying, printing, and external sharing limited by protocol.',
      },
      {
        title: 'Traceable delivery',
        description:
          'Version histories, reviewer assignments, issue logs, and release checks create a record of how each attorney-facing deliverable was prepared.',
      },
    ],
    engagementModels: [
      {
        title: 'Deadline support',
        description:
          'Short-term capacity for a deposition series, discovery response, motion record, hearing, filing, or trial-preparation deadline.',
      },
      {
        title: 'Matter support pod',
        description:
          'A stable group assigned to one or more active matters with daily trackers, recurring deliverables, and attorney checkpoints.',
      },
      {
        title: 'Litigation operations desk',
        description:
          'Ongoing support across a portfolio using common intake, chronology, deposition, docket, and reporting standards.',
      },
    ],
    securitySummary:
      'Litigation data is organized around matter segregation, privilege awareness, least-privilege access, controlled source handling, and traceable release checks. Strategic and dispositive decisions stay with supervising counsel.',
    image: PlaceHolderImages.find(
      (image) => image.id === 'service-family-law'
    ),
  },
  {
    name: 'Contract Lifecycle Management',
    slug: 'contract-review-management',
    iconName: 'FileText',
    description:
      'Structured contract drafting, review, negotiation support, obligation tracking, and portfolio management throughout the contract lifecycle.',
    longDescription:
      'Our contract lifecycle management services help law firms and in-house legal teams manage contracts with greater consistency, visibility, and efficiency. From contract drafting and review to negotiation support, obligation tracking, and renewal management, we provide structured legal operations support throughout the contract lifecycle. Every engagement is tailored to your review standards, risk thresholds, approval workflows, and internal processes, while your legal team retains full control over legal advice, negotiation strategy, and final approvals.',
    keyAreas: [
      'Contract Drafting & Review',
      'Contract Redlining & Negotiation Support',
      'Contract Risk Assessment',
      'Approval Workflow Management',
      'Obligation & Renewal Tracking',
      'Contract Portfolio Management',
    ],
    bestFor: [
      'Law firms managing commercial contracts',
      'In-house legal departments',
      'Vendor and procurement contracts',
      'Contract-heavy business operations',
      'Cross-border contract management',
      'Legal teams seeking scalable contract support',
    ],
    process: [
      {
        title: '01. Contract Intake & Scope Review',
        description:
          'We review the contract type, commercial objectives, applicable jurisdiction, review standards, timelines, and client-specific instructions before work begins.',
      },
      {
        title: '02. Review Framework & Risk Assessment',
        description:
          'Our team applies agreed review guidelines, identifies key legal and commercial risks, reviews contract terms, and follows client-approved playbooks and escalation protocols.',
      },
      {
        title: '03. Drafting, Review & Redlining',
        description:
          'We prepare, review, or revise contracts, suggest redlines where appropriate, and document observations for client review while maintaining consistency with agreed standards.',
      },
      {
        title: '04. Negotiation & Version Management',
        description:
          'We support negotiation tracking, manage document versions, record changes, and maintain an organised review history throughout the contract lifecycle.',
      },
      {
        title: '05. Quality Review',
        description:
          'Every contract undergoes an independent quality review to verify accuracy, consistency, drafting quality, formatting, and compliance with client instructions.',
      },
      {
        title: '06. Delivery & Ongoing Lifecycle Support',
        description:
          'Final documents are delivered securely, with continued support available for obligation tracking, renewals, amendments, and portfolio management where required.',
      },
    ],
    deliverables: [
      'Contract Drafts',
      'Contract Review & Redlines',
      'Clause Comparison Reports',
      'Contract Risk Summaries',
      'Obligation & Renewal Trackers',
      'Contract Approval Records',
      'Contract Portfolio Reports',
      'Contract Amendment Support',
    ],
    benefits: [
      {
        title: 'Faster Contract Turnaround',
        description:
          'Streamline contract review and approval processes while maintaining consistency and quality.',
      },
      {
        title: 'Improved Contract Visibility',
        description:
          'Structured contract management provides better oversight of obligations, approvals, renewals, and key milestones.',
      },
      {
        title: 'Consistent Contract Review',
        description:
          'Client-specific playbooks, review guidelines, and quality checks help ensure consistency across every contract.',
      },
      {
        title: 'Scalable Legal Operations',
        description:
          'Expand contract review capacity without increasing the workload on your internal legal team.',
      },
    ],
    qualityControls: [
      'Clearly defined review scope and client instructions',
      'Review against agreed playbooks and risk thresholds',
      'Clause consistency and drafting verification',
      'Formatting and document quality checks',
      'Independent quality assurance before delivery',
      'Secure delivery under attorney supervision',
    ],
    securityControls: [
      {
        title: 'Contract-level access control',
        description:
          'Access can be segmented by entity, business unit, deal, repository, and reviewer role so sensitive transactions remain need-to-know.',
      },
      {
        title: 'Controlled version management',
        description:
          'Source, working, redline, approved, and executed versions follow defined naming, storage, and release rules to reduce leakage and version confusion.',
      },
      {
        title: 'Sensitive data minimization',
        description:
          'Review workflows limit unnecessary exposure to personal data, pricing, acquisition information, trade secrets, and security schedules.',
      },
      {
        title: 'Approved technology boundaries',
        description:
          'Automation and AI-assisted extraction are used only within the client-approved environment, with human validation of clause meaning, risk, and extracted obligations.',
      },
    ],
    engagementModels: [
      {
        title: 'Backlog reduction sprint',
        description:
          'A time-bound project to triage, review, abstract, or remediate a defined contract population.',
      },
      {
        title: 'Managed review desk',
        description:
          'Recurring first-pass drafting and review under client playbooks, service levels, escalation rules, and performance reporting.',
      },
      {
        title: 'CLM operations pod',
        description:
          'Integrated support across intake, review, metadata, obligations, renewals, templates, and platform administration.',
      },
    ],
    securitySummary:
      'Contract support is designed around need-to-know access, controlled versions, sensitive-data minimization, approved technology, and attorney escalation. Commercial and legal approvals remain with the client.',
    image: PlaceHolderImages.find(
      (image) => image.id === 'service-real-estate-law'
    ),
  },
  {
    name: 'eDiscovery & Document Review',
    slug: 'ediscovery-document-review',
    iconName: 'Database',
    description:
      'Defensible eDiscovery and document review services for first-level review, relevance coding, privilege, redaction, and production preparation.',
    longDescription:
      'Our eDiscovery and document review services help law firms and corporate legal departments manage large volumes of electronically stored information with accuracy, consistency, and confidentiality. From first-level document review and relevance coding to privilege review, redaction support, and production preparation, we combine structured review workflows with technology-assisted processes to deliver efficient, defensible results. Every engagement is tailored to your review protocol, platform requirements, and quality standards, while your legal team retains full control over legal strategy, privilege decisions, and production determinations.',
    keyAreas: [
      'First-Level Document Review',
      'Relevance & Issue Coding',
      'Privilege Review & Redaction Support',
      'Technology-Assisted Review (TAR) Support',
      'Production Preparation & Quality Control',
      'eDiscovery Platform Support',
    ],
    bestFor: [
      'Litigation and dispute resolution matters',
      'Internal investigations',
      'Regulatory and compliance reviews',
      'Due diligence and corporate transactions',
      'Large-scale document review projects',
      'Law firms and in-house legal departments requiring scalable review support',
    ],
    process: [
      {
        title: '01. Matter Assessment & Review Planning',
        description:
          'We review the scope of the matter, document volumes, review objectives, jurisdiction, timelines, platform requirements, and client-specific review protocols before work begins.',
      },
      {
        title: '02. Review Protocol & Workflow Setup',
        description:
          'Our team applies agreed coding guidelines, privilege protocols, issue categories, escalation procedures, and quality standards to ensure a consistent review process.',
      },
      {
        title: '03. Document Review & Classification',
        description:
          'Documents are reviewed for relevance, responsiveness, privilege, confidentiality, and issue coding using client-approved workflows and review platforms where applicable.',
      },
      {
        title: '04. Redaction & Production Preparation',
        description:
          'We support document redactions, privilege logs, production set preparation, and document organisation while maintaining complete review consistency and auditability.',
      },
      {
        title: '05. Quality Review',
        description:
          'Every review project undergoes an independent quality check to verify coding accuracy, document classifications, redactions, privilege decisions, and production readiness.',
      },
      {
        title: '06. Secure Delivery & Ongoing Support',
        description:
          'Final review outputs are delivered securely, with continued support available for rolling productions, additional review phases, or evolving matter requirements.',
      },
    ],
    deliverables: [
      'First-Level Document Review',
      'Relevance & Responsiveness Coding',
      'Privilege Review Support',
      'Redaction Logs',
      'Privilege Logs',
      'Production-Ready Document Sets',
      'Review Progress Reports',
      'Quality Control Reports',
    ],
    benefits: [
      {
        title: 'Faster Review Timelines',
        description:
          'Structured review workflows and technology-assisted processes help accelerate document review while maintaining accuracy and consistency.',
      },
      {
        title: 'Defensible Review Process',
        description:
          'Documented review protocols, quality controls, and privilege review procedures support reliable and defensible document productions.',
      },
      {
        title: 'Improved Review Consistency',
        description:
          'Standardised coding guidelines and independent quality reviews help maintain consistency across large-scale review projects.',
      },
      {
        title: 'Scalable Review Capacity',
        description:
          'Expand document review resources quickly without increasing the burden on your internal legal team.',
      },
    ],
    qualityControls: [
      'Clearly defined review scope and coding protocols',
      'Consistent application of review guidelines',
      'Privilege and confidentiality verification',
      'Redaction and production quality checks',
      'Independent quality assurance before delivery',
      'Secure delivery under attorney supervision',
    ],
    securityControls: [
      {
        title: 'Review within approved platforms',
        description:
          'Wherever practical, documents remain in the client’s hosted review environment with MFA, role-based permissions, and platform audit logs enabled.',
      },
      {
        title: 'Download and transfer restrictions',
        description:
          'Local downloads, external storage, printing, copying, and unapproved transfers are restricted according to the matter security plan.',
      },
      {
        title: 'Segregated review teams',
        description:
          'Matter access is limited by reviewer role and conflicts. Privilege, second-level review, and production functions can be separated where risk requires it.',
      },
      {
        title: 'Controlled reviewer lifecycle',
        description:
          'Onboarding, confidentiality, training, access changes, inactive accounts, device controls, and matter offboarding follow documented checkpoints.',
      },
    ],
    engagementModels: [
      {
        title: 'Managed document review',
        description:
          'Reviewer staffing, training, supervision, QC, reporting, and escalation delivered as one managed workstream.',
      },
      {
        title: 'Specialist second-level review',
        description:
          'Focused support for privilege, redaction, key issues, foreign-language material, or production quality control.',
      },
      {
        title: 'Review operations support',
        description:
          'Protocol development, calibration, reviewer analytics, quality dashboards, and workflow administration for client-led teams.',
      },
    ],
    securitySummary:
      'The preferred model keeps documents inside approved review platforms, applies least-privilege access and MFA, restricts downloads, separates sensitive functions, and documents reviewer and production quality controls.',
    image: PlaceHolderImages.find((image) => image.id === 'service-ip-law'),
  },
  {
    name: 'Compliance & Regulatory Support',
    slug: 'compliance-regulatory-support',
    iconName: 'ShieldCheck',
    description:
      'Structured regulatory research, policy drafting, AML/KYC support, gap assessments, risk tracking, and regulatory monitoring.',
    longDescription:
      'Our compliance and regulatory support services help law firms and corporate legal departments manage evolving regulatory requirements with greater confidence and consistency. From regulatory research and policy drafting to compliance reviews, AML/KYC support, risk assessments, and ongoing regulatory monitoring, we provide structured legal operations support that helps organisations strengthen their compliance frameworks. Every engagement is tailored to your jurisdiction, internal policies, and regulatory obligations, while your legal and compliance teams retain full control over legal interpretation, regulatory engagement, and strategic decision-making.',
    keyAreas: [
      'Regulatory Research & Compliance Analysis',
      'Compliance Policy & Procedure Drafting',
      'AML & KYC Support',
      'Regulatory Gap Assessments',
      'Risk Register & Control Documentation',
      'Regulatory Monitoring & Reporting',
    ],
    bestFor: [
      'Law firms advising on regulatory compliance',
      'Corporate legal and compliance teams',
      'Financial services and regulated industries',
      'Privacy and data protection programmes',
      'Cross-border compliance requirements',
      'Organisations seeking scalable compliance support',
    ],
    process: [
      {
        title: '01. Requirement Assessment & Scope Definition',
        description:
          'We begin by understanding your regulatory environment, applicable jurisdictions, internal policies, compliance objectives, timelines, and reporting requirements.',
      },
      {
        title: '02. Regulatory Review & Gap Assessment',
        description:
          'Our team reviews applicable laws, regulations, and internal processes to identify compliance gaps, operational risks, and areas requiring remediation or policy updates.',
      },
      {
        title: '03. Documentation & Compliance Support',
        description:
          'We assist with policy drafting, regulatory documentation, AML/KYC support, due diligence, control documentation, and evidence preparation in accordance with your internal standards.',
      },
      {
        title: '04. Monitoring & Risk Management',
        description:
          'We support ongoing regulatory monitoring, maintain risk registers, track regulatory developments, and help keep compliance documentation current and organised.',
      },
      {
        title: '05. Quality Review',
        description:
          'Every assignment undergoes an independent quality review to verify accuracy, consistency, completeness, and alignment with client instructions before delivery.',
      },
      {
        title: '06. Delivery & Ongoing Support',
        description:
          'Final deliverables are provided securely, with continued support available for regulatory updates, policy revisions, additional documentation, and evolving compliance requirements.',
      },
    ],
    deliverables: [
      'Regulatory Research Reports',
      'Compliance Gap Assessment Reports',
      'Compliance Policies & Procedures',
      'AML & KYC Documentation Support',
      'Due Diligence Reports',
      'Risk Registers & Control Documentation',
      'Regulatory Monitoring Updates',
      'Compliance Status Reports',
    ],
    benefits: [
      {
        title: 'Stronger Compliance Frameworks',
        description:
          'Build structured compliance processes that help reduce operational risk and support ongoing regulatory readiness.',
      },
      {
        title: 'Better Regulatory Visibility',
        description:
          'Stay informed of evolving legal and regulatory requirements through organised monitoring and timely reporting.',
      },
      {
        title: 'Consistent Compliance Documentation',
        description:
          'Standardised processes and quality reviews help maintain consistency across policies, reports, and regulatory records.',
      },
      {
        title: 'Scalable Compliance Support',
        description:
          'Expand your compliance capabilities without increasing pressure on your internal legal and compliance teams.',
      },
    ],
    qualityControls: [
      'Clearly defined scope and regulatory requirements',
      'Review of applicable laws, regulations, and internal policies',
      'Documentation accuracy and consistency checks',
      'Independent quality assurance before delivery',
      'Secure handling of confidential compliance information',
      'Delivery under client-defined review and approval processes',
    ],
    securityControls: [
      {
        title: 'Data minimization by workstream',
        description:
          'Only information required for the control, diligence, privacy, or monitoring task is collected and made available to the assigned team.',
      },
      {
        title: 'Restricted sensitive-data access',
        description:
          'Identity documents, personal data, financial information, investigations, and control weaknesses follow defined access groups and handling rules.',
      },
      {
        title: 'Secure evidence repositories',
        description:
          'Evidence is stored and delivered through approved repositories with version, owner, access, and retention controls appropriate to the engagement.',
      },
      {
        title: 'Human validation of automated analysis',
        description:
          'Extraction, comparison, and monitoring tools may assist the work, but regulatory meaning, exceptions, and risk conclusions are reviewed by trained professionals.',
      },
    ],
    engagementModels: [
      {
        title: 'Assessment project',
        description:
          'A defined gap, privacy, diligence, audit-readiness, or regulatory-mapping project with a fixed population and outcome.',
      },
      {
        title: 'Compliance operations support',
        description:
          'Recurring evidence, due-diligence, policy, register, and remediation support under agreed procedures and review schedules.',
      },
      {
        title: 'Regulatory monitoring desk',
        description:
          'Ongoing monitoring, relevance assessment, summaries, and action tracking for selected jurisdictions and subject areas.',
      },
    ],
    securitySummary:
      'Compliance work is organized around data minimization, restricted access, controlled evidence, traceable sources, and client approval of legal interpretations, policies, and risk decisions.',
    image: PlaceHolderImages.find(
      (image) => image.id === 'service-criminal-defense'
    ),
  },
  {
    name: 'Paralegal & Virtual Operations',
    slug: 'paralegal-virtual-operations',
    iconName: 'Users',
    description:
      'Dependable paralegal and virtual legal operations support for matter intake, document preparation, docketing, filing, and practice management.',
    longDescription:
      'Our paralegal and virtual legal operations services help law firms and corporate legal departments manage the day-to-day legal and administrative work that supports efficient legal practice. From matter management and document preparation to docket coordination, legal administration, and client communication support, we provide dependable operational assistance that integrates seamlessly with your existing workflows. Every engagement is tailored to your firm\'s procedures, systems, and supervision requirements, while your legal team retains full control over legal advice, strategic decisions, and client relationships.',
    keyAreas: [
      'Matter Intake & Case Management',
      'Legal Document Preparation',
      'Calendar & Docket Management',
      'Filing & Document Coordination',
      'Legal Billing & Administrative Support',
      'Virtual Legal Operations Support',
    ],
    bestFor: [
      'Law firms requiring ongoing paralegal support',
      'Corporate legal departments',
      'High-volume legal practices',
      'Growing firms seeking operational support',
      'Multi-jurisdictional legal teams',
      'Legal teams looking to scale efficiently',
    ],
    process: [
      {
        title: '01. Requirement Assessment & Onboarding',
        description:
          'We begin by understanding your workflows, practice areas, systems, priorities, timelines, and supervision requirements to establish a clear scope of support.',
      },
      {
        title: '02. Workflow Integration',
        description:
          'Our team aligns with your internal procedures, document standards, communication protocols, and practice management systems to ensure seamless collaboration.',
      },
      {
        title: '03. Paralegal & Administrative Support',
        description:
          'We assist with matter intake, document preparation, calendar management, filing coordination, billing support, conflict-check coordination, document organisation, and other routine legal operations in accordance with your instructions.',
      },
      {
        title: '04. Matter Monitoring & Coordination',
        description:
          'We maintain organised matter records, track deadlines, coordinate documentation, and provide regular updates to help keep work progressing efficiently.',
      },
      {
        title: '05. Quality Review',
        description:
          'Every assignment undergoes an independent quality review to verify accuracy, completeness, consistency, and compliance with client instructions before delivery.',
      },
      {
        title: '06. Ongoing Operational Support',
        description:
          'Support continues as your matters evolve, allowing your legal team to scale resources efficiently while maintaining established workflows and service standards.',
      },
    ],
    deliverables: [
      'Matter Intake Records',
      'Organised Case Files',
      'Calendar & Docket Updates',
      'Legal Document Preparation',
      'Filing & Administrative Support',
      'Billing & Time Entry Support',
      'Matter Status Reports',
      'Practice Management Updates',
    ],
    benefits: [
      {
        title: 'Increased Operational Efficiency',
        description:
          'Reduce the administrative burden on lawyers and in-house legal teams, allowing them to focus on legal analysis, client service, and strategic work.',
      },
      {
        title: 'Better Matter Organisation',
        description:
          'Maintain organised files, accurate records, and well-managed workflows that support efficient legal operations.',
      },
      {
        title: 'Consistent Administrative Support',
        description:
          'Documented procedures, quality reviews, and structured workflows help ensure consistency across every assignment.',
      },
      {
        title: 'Scalable Legal Operations',
        description:
          'Expand operational capacity quickly without increasing the demands on your internal legal team.',
      },
    ],
    qualityControls: [
      'Clearly defined scope and client instructions',
      'Compliance with documented workflows and procedures',
      'Accuracy and completeness verification',
      'Document formatting and quality checks',
      'Independent quality assurance before delivery',
      'Secure handling of client information under attorney supervision',
    ],
    securityControls: [
      {
        title: 'Least-privilege system access',
        description:
          'Each team member receives only the matter, mailbox, calendar, billing, or practice-management permissions needed for assigned tasks.',
      },
      {
        title: 'MFA and named-user access',
        description:
          'Shared credentials are avoided. Approved systems use named accounts, MFA, access logging, and prompt revocation when roles or assignments change.',
      },
      {
        title: 'Controlled document handling',
        description:
          'Documents remain in approved repositories wherever possible, with downloads, removable media, personal email, printing, and external sharing restricted.',
      },
      {
        title: 'Documented onboarding and offboarding',
        description:
          'Confidentiality, conflicts, device requirements, client procedures, access reviews, and matter offboarding follow repeatable checkpoints.',
      },
    ],
    engagementModels: [
      {
        title: 'Task-based support',
        description:
          'Defined recurring outputs such as deposition summaries, filing packs, billing support, intake processing, or document formatting.',
      },
      {
        title: 'Dedicated virtual paralegal',
        description:
          'Named capacity embedded into the client’s daily workflow, systems, priorities, templates, and communication cadence.',
      },
      {
        title: 'Managed legal operations pod',
        description:
          'A multi-skilled team with coverage, supervision, reporting, and shared responsibility across several administrative workstreams.',
      },
    ],
    securitySummary:
      'Virtual operations are built around named users, MFA, least-privilege access, approved repositories, controlled document handling, attorney supervision, and prompt access revocation.',
    image: PlaceHolderImages.find(
      (image) => image.id === 'service-immigration-law'
    ),
  },
];
