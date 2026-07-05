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
      'Multi-jurisdictional research, authority analysis, and lawyer-ready drafting for litigation, transactions, and regulatory matters.',
    longDescription:
      'Our legal research and writing team helps law firms and corporate legal departments convert complex questions into clear, source-linked work product. We work from the client’s issue statement, procedural posture, jurisdiction, preferred authorities, and output format. The service can support early case assessment, motion practice, appellate work, regulatory interpretation, contract disputes, and recurring knowledge-management needs. Every assignment is designed to reduce senior-lawyer review time while preserving attorney control over legal judgment and strategy.',
    keyAreas: [
      'Multi-State Case Law Synthesis (US)',
      'UK Common Law & Statutory Interpretation',
      'Canadian Federal and Provincial Research',
      'Motion, Brief, and Memorandum Support',
      'Inter-Jurisdictional Comparative Surveys',
      'Regulatory and Compliance Memoranda',
    ],
    bestFor: [
      'Research-intensive litigation and motion practice',
      'Overflow work during filing or transaction deadlines',
      'Multi-jurisdictional surveys and 50-state reviews',
      'Teams that need repeatable research and citation standards',
    ],
    process: [
      {
        title: 'Issue framing and instruction review',
        description:
          'We confirm the legal question, jurisdiction, procedural posture, relevant facts, deadline, exclusions, preferred databases, citation style, and the decision the work product must support.',
      },
      {
        title: 'Research plan and authority hierarchy',
        description:
          'The team builds a search plan covering controlling law, persuasive authority, statutes, regulations, secondary sources, defined terms, and likely adverse lines of authority.',
      },
      {
        title: 'Source collection and currency checks',
        description:
          'Researchers collect primary sources, validate their current status through available citator tools, and record source links, dates, court level, and jurisdictional relevance.',
      },
      {
        title: 'Analysis and adverse-authority review',
        description:
          'Authorities are compared against the client’s facts. Conflicting rules, exceptions, minority positions, unsettled issues, and practical litigation risks are surfaced rather than hidden.',
      },
      {
        title: 'Drafting in the requested decision format',
        description:
          'We prepare a concise answer, research memorandum, case matrix, chronology, draft argument, or annotated source pack using the client’s template and citation requirements.',
      },
      {
        title: 'Senior legal and citation quality control',
        description:
          'A second reviewer checks issue coverage, legal propositions, source support, quotations, pin cites, treatment of adverse authority, defined assumptions, and formatting before delivery.',
      },
    ],
    deliverables: [
      'Research memoranda with executive summaries',
      'Case-law and authority matrices',
      'Draft motions, briefs, and argument sections',
      '50-state or multi-jurisdictional surveys',
      'Statutory and regulatory comparison tables',
      'Citation tables and source-linked research packs',
      'Chronologies and factual issue maps',
      'Research updates and change alerts',
    ],
    benefits: [
      {
        title: 'More senior-lawyer leverage',
        description:
          'Partners and in-house counsel spend less time collecting and organizing authorities and more time applying judgment, advising clients, and shaping strategy.',
      },
      {
        title: 'Faster access to usable answers',
        description:
          'A structured research plan and parallel review can compress turnaround without reducing the traceability of the underlying authorities.',
      },
      {
        title: 'More defensible legal analysis',
        description:
          'Currency checks, authority hierarchy, adverse-authority searches, and source-linked conclusions make the work easier to verify and defend.',
      },
      {
        title: 'Consistent work product',
        description:
          'Client templates, citation rules, issue taxonomies, and reusable research protocols create consistency across matters and reviewers.',
      },
    ],
    qualityControls: [
      'Issue checklist approved before substantive research begins',
      'Primary-source preference and authority hierarchy review',
      'Current-status and negative-treatment checks where tools permit',
      'Independent quotation, pin-cite, and proposition verification',
      'Mandatory adverse-authority and exception analysis',
      'Senior reviewer sign-off with assumptions and open questions identified',
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
    name: 'Litigation Support Services',
    slug: 'litigation-support',
    iconName: 'Gavel',
    description:
      'Operational litigation support from matter intake through discovery, deposition analysis, motion preparation, and trial readiness.',
    longDescription:
      'Our litigation support teams organize the high-volume work that sits behind effective advocacy. We help counsel build reliable matter records, understand testimony, manage deadlines, prepare discovery materials, and assemble hearing or trial-ready deliverables. The client retains control of legal strategy, privilege decisions, filing positions, and advocacy. We provide the structured execution, documentation, and quality control needed to keep the matter moving under deadline pressure.',
    keyAreas: [
      'Deposition Analytics & Summarization',
      'Trial Exhibit Management & Indexing',
      'Case Chronology Construction',
      'Discovery Request and Response Support',
      'Witness and Factual Issue Files',
      'Pleading Formatting & E-Filing Support',
    ],
    bestFor: [
      'Complex matters with large pleadings or discovery records',
      'Teams facing deposition, hearing, or trial deadlines',
      'Recurring litigation operations and docket support',
      'Counsel that needs overnight or follow-the-sun execution',
    ],
    process: [
      {
        title: 'Matter intake and protocol design',
        description:
          'We document the claims, defenses, parties, jurisdictions, deadlines, governing orders, confidentiality restrictions, source repositories, deliverables, and attorney escalation contacts.',
      },
      {
        title: 'Matter map and source organization',
        description:
          'Pleadings, discovery, testimony, correspondence, and key evidence are indexed by date, witness, issue, allegation, and source so later work remains traceable.',
      },
      {
        title: 'Workstream production',
        description:
          'The assigned team prepares chronologies, deposition summaries, discovery trackers, exhibit lists, witness files, research packs, or filing support under a documented playbook.',
      },
      {
        title: 'Issue and escalation management',
        description:
          'Potential privilege concerns, missing records, contradictory testimony, deadline risks, unclear instructions, and strategically significant facts are logged and escalated.',
      },
      {
        title: 'Attorney-facing quality review',
        description:
          'A senior reviewer checks source references, page-line citations, dates, names, issue coding, completeness, formatting, and consistency with the attorney-approved protocol.',
      },
      {
        title: 'Delivery, update, and trial-readiness control',
        description:
          'Final deliverables are released through approved channels, versioned, and updated as the record develops. Open items and next deadlines remain visible to the client team.',
      },
    ],
    deliverables: [
      'Pleading, motion, and evidence indexes',
      'Master and issue-specific chronologies',
      'Page-line and narrative deposition summaries',
      'Discovery request and response trackers',
      'Witness, custodian, and fact files',
      'Exhibit lists and trial-binder materials',
      'Citation and record-reference checks',
      'Docket, deadline, and filing checklists',
    ],
    benefits: [
      {
        title: 'Stronger command of the record',
        description:
          'Searchable chronologies, testimony summaries, and issue maps help lawyers find the fact, exhibit, or contradiction they need without reopening the full record.',
      },
      {
        title: 'More predictable deadlines',
        description:
          'Central trackers, handoff rules, and escalation paths reduce the operational risk that important tasks or dependencies remain invisible.',
      },
      {
        title: 'Lower attorney administrative burden',
        description:
          'Structured preparation work moves away from senior lawyers while legal judgment and advocacy remain with the client’s attorneys.',
      },
      {
        title: 'Scalable matter capacity',
        description:
          'The team can expand for depositions, discovery peaks, dispositive motions, or trial preparation and contract when the surge passes.',
      },
    ],
    qualityControls: [
      'Matter-specific protocol and sample deliverable approval',
      'Page-line, date, exhibit, and source-reference verification',
      'Defined treatment for unclear testimony and missing materials',
      'Second-level review of high-risk or attorney-facing deliverables',
      'Version control across working and final files',
      'Open-issue, deadline, and escalation logs maintained through delivery',
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
      'Playbook-led drafting, review, negotiation support, obligation capture, and portfolio control across the contract lifecycle.',
    longDescription:
      'Our contract lifecycle support turns recurring contract work into a controlled operating process. We help legal departments and law firms define preferred positions, fallback language, risk thresholds, approval routes, and escalation triggers. Reviewers then apply that playbook consistently across contracts while business-sensitive, high-value, or unusual issues return to designated counsel. The same structure can support intake, drafting, redlining, negotiation tracking, signature readiness, obligation extraction, renewal management, and portfolio reporting.',
    keyAreas: [
      'Contract Review Playbook Creation',
      'Multi-Jurisdictional Drafting & Redlining',
      'NDA, Vendor, Customer, and Employment Agreements',
      'Obligation and Renewal Tracking',
      'M&A and Portfolio Due Diligence',
      'Template and Clause Library Governance',
    ],
    bestFor: [
      'Legal teams managing contract backlogs',
      'High-volume recurring agreement types',
      'Businesses needing faster first-pass review',
      'Contract portfolios with inconsistent data and renewal visibility',
    ],
    process: [
      {
        title: 'Contract intake and portfolio segmentation',
        description:
          'Agreements are classified by type, counterparty, value, jurisdiction, business owner, deadline, data sensitivity, and risk so the correct review path is applied.',
      },
      {
        title: 'Playbook and escalation design',
        description:
          'We document preferred clauses, acceptable fallbacks, non-negotiables, risk ratings, approval authorities, commercial variables, and mandatory attorney escalation events.',
      },
      {
        title: 'Drafting, review, and redlining',
        description:
          'Reviewers compare the agreement against the approved template and playbook, propose language, record deviations, and prepare concise issue notes for decision-makers.',
      },
      {
        title: 'Negotiation and exception support',
        description:
          'Counterparty changes are tracked across versions. Unusual exposure, regulatory issues, high-value departures, and business decisions are routed to the designated owner.',
      },
      {
        title: 'Final quality and signature-readiness review',
        description:
          'Names, dates, defined terms, cross-references, exhibits, schedules, commercial terms, approval evidence, redlines, and execution requirements are checked before release.',
      },
      {
        title: 'Obligation capture and portfolio reporting',
        description:
          'Key dates, notice requirements, payment terms, service levels, renewals, termination rights, and owner assignments are extracted into the client’s CLM or tracker.',
      },
    ],
    deliverables: [
      'Client-specific contract review playbooks',
      'Drafts, redlines, and clean comparison versions',
      'Clause deviation and risk reports',
      'Contract abstracts and metadata sheets',
      'Obligation, notice, and renewal trackers',
      'Template and fallback clause libraries',
      'Due-diligence matrices and exception reports',
      'Portfolio dashboards and backlog reporting',
    ],
    benefits: [
      {
        title: 'Shorter contract cycle times',
        description:
          'Repeatable intake, tiered review, approved fallback language, and clear escalation reduce avoidable waiting and rework.',
      },
      {
        title: 'More consistent risk positions',
        description:
          'A common playbook helps different reviewers apply the same standards across business units, regions, and agreement types.',
      },
      {
        title: 'Better use of in-house counsel',
        description:
          'Counsel focuses on material exceptions, negotiation strategy, and business decisions instead of every first-pass clause comparison.',
      },
      {
        title: 'Improved portfolio visibility',
        description:
          'Structured metadata and obligation capture make renewals, notices, commitments, and recurring negotiation issues easier to manage.',
      },
    ],
    qualityControls: [
      'Agreement-type checklist and playbook version control',
      'Clause-by-clause deviation and fallback verification',
      'Defined-term, cross-reference, exhibit, and schedule checks',
      'Commercial-term and metadata reconciliation',
      'Mandatory attorney escalation for high-risk exceptions',
      'Clean-versus-redline comparison before signature readiness',
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
    slug: 'document-review-ediscovery',
    iconName: 'Database',
    description:
      'Defensible review operations for relevance, issue coding, privilege, redaction, chronology, and production quality control.',
    longDescription:
      'Our eDiscovery and document review support combines trained reviewers, matter-specific protocols, review-platform discipline, calibration, sampling, and documented escalation. We support investigations, litigation, regulatory responses, internal reviews, and data-intensive due diligence. Technology can prioritize and organize material, but responsiveness, privilege, confidentiality, and production decisions remain subject to human review and supervising-counsel direction.',
    keyAreas: [
      'Review Protocol and Calibration Design',
      'First-Pass Relevance and Issue Review',
      'TAR and Predictive Coding Support',
      'Privilege, Work-Product, and Redaction Review',
      'Chronology and Factual Data Extraction',
      'Production and Privilege-Log Quality Control',
    ],
    bestFor: [
      'High-volume litigation and regulatory collections',
      'Internal investigations and compliance reviews',
      'Privilege-intensive matters',
      'Teams needing scalable, measured reviewer capacity',
    ],
    process: [
      {
        title: 'Matter protocol and data-risk assessment',
        description:
          'Counsel-approved definitions cover responsiveness, issues, privilege, confidentiality, redaction, hot documents, escalation, quality thresholds, and prohibited handling.',
      },
      {
        title: 'Secure workspace and reviewer onboarding',
        description:
          'Access groups, authentication, platform permissions, training materials, conflicts, confidentiality acknowledgments, and reviewer assignments are confirmed before review.',
      },
      {
        title: 'Calibration and seed review',
        description:
          'Reviewers code a controlled sample, compare decisions, discuss edge cases, refine examples, and establish a measurable baseline before full-volume review.',
      },
      {
        title: 'Scaled review and technology assistance',
        description:
          'First-pass review, email threading, deduplication, analytics, TAR prioritization, issue coding, and factual extraction proceed under daily throughput and quality monitoring.',
      },
      {
        title: 'Privilege, redaction, and escalation',
        description:
          'Potentially privileged, sensitive, ambiguous, high-risk, or technically problematic documents move to designated second-level reviewers or supervising counsel.',
      },
      {
        title: 'Quality sampling and production validation',
        description:
          'Targeted and statistical samples, overturn analysis, privilege checks, redaction validation, metadata checks, and production-set reconciliation are completed and documented.',
      },
    ],
    deliverables: [
      'Matter-specific review protocols and coding manuals',
      'Reviewer training and calibration packs',
      'Responsiveness, issue, and confidentiality coding',
      'Privilege review and privilege-log support',
      'Redaction review and validation logs',
      'Hot-document, witness, and chronology reports',
      'Daily throughput, quality, and escalation dashboards',
      'Production-set and quality-control reports',
    ],
    benefits: [
      {
        title: 'Scalable review capacity',
        description:
          'Reviewer teams can expand around data volume and deadlines while maintaining common protocols, supervision, and performance reporting.',
      },
      {
        title: 'More defensible decisions',
        description:
          'Calibration, documented protocols, escalation logs, sampling, and overturn analysis create evidence of a reasonable and repeatable process.',
      },
      {
        title: 'Lower cost of finding critical material',
        description:
          'Analytics and technology-assisted prioritization focus human attention where it is most useful without delegating final legal judgment to the tool.',
      },
      {
        title: 'Reduced privilege and production risk',
        description:
          'Layered privilege review, redaction validation, and pre-production checks help identify leakage, inconsistency, and technical defects before release.',
      },
    ],
    qualityControls: [
      'Protocol-based reviewer certification before live review',
      'Daily calibration and tracked reviewer agreement',
      'Targeted QC for privilege, hot documents, and key issues',
      'Random or statistical sampling based on matter needs',
      'Overturn-rate, rework, and escalation analysis',
      'Final production, redaction, metadata, and privilege validation',
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
    slug: 'compliance-regulatory',
    iconName: 'ShieldCheck',
    description:
      'Structured regulatory research, gap assessment, policy operations, control evidence, and monitoring support across evolving obligations.',
    longDescription:
      'Our compliance and regulatory support helps legal and risk teams turn broad obligations into actionable controls, policies, evidence, and reporting. We support regulatory inventories, gap assessments, policy drafting, due diligence, AML/KYC operations, privacy programs, risk registers, control testing, and regulatory-change monitoring. The client’s compliance officers and counsel retain ownership of legal interpretations, risk acceptance, regulatory engagement, and final policy approval.',
    keyAreas: [
      'Cross-Border Regulatory Monitoring',
      'AML, KYC, and Due-Diligence Support',
      'Privacy and Data-Protection Gap Reviews',
      'Compliance Policy and Procedure Drafting',
      'Risk Register and Control-Evidence Maintenance',
      'Internal Governance and Readiness Reviews',
    ],
    bestFor: [
      'Growing businesses formalizing compliance operations',
      'Regulated teams managing recurring evidence and reviews',
      'Cross-border privacy or third-party risk programs',
      'Organizations preparing for audits or control assessments',
    ],
    process: [
      {
        title: 'Scope, entity, and obligation mapping',
        description:
          'We identify relevant entities, products, jurisdictions, regulators, data types, third parties, business processes, existing policies, and the specific decision or readiness goal.',
      },
      {
        title: 'Regulatory and control inventory',
        description:
          'Applicable obligations are organized into a traceable matrix and mapped to policies, procedures, control owners, systems, evidence, and review frequencies.',
      },
      {
        title: 'Gap and risk assessment',
        description:
          'Missing, inconsistent, outdated, or weakly evidenced controls are documented with impact, likelihood, dependencies, and attorney or compliance-owner questions.',
      },
      {
        title: 'Remediation and document development',
        description:
          'We support policy, procedure, checklist, notice, questionnaire, control description, risk-register, and training-material updates under client approval.',
      },
      {
        title: 'Evidence and implementation support',
        description:
          'Control evidence, owner attestations, due-diligence files, issue remediation, and readiness trackers are organized so implementation can be monitored.',
      },
      {
        title: 'Monitoring and reporting',
        description:
          'Regulatory changes, recurring reviews, exceptions, incidents, overdue actions, and control metrics are summarized for legal, compliance, and management stakeholders.',
      },
    ],
    deliverables: [
      'Regulatory obligation and applicability matrices',
      'Gap assessments and remediation roadmaps',
      'Policies, procedures, notices, and checklists',
      'AML/KYC and third-party due-diligence files',
      'Privacy, retention, and data-mapping support',
      'Risk registers and control libraries',
      'Audit-readiness and evidence trackers',
      'Regulatory change alerts and executive summaries',
    ],
    benefits: [
      {
        title: 'Clearer ownership of obligations',
        description:
          'Structured matrices connect requirements to policies, controls, evidence, owners, and review dates instead of leaving them in isolated legal documents.',
      },
      {
        title: 'More efficient compliance operations',
        description:
          'Repeatable checklists, evidence standards, and review workflows reduce manual coordination and make recurring obligations easier to manage.',
      },
      {
        title: 'Faster readiness and remediation',
        description:
          'Prioritized gaps, dependencies, and action tracking help teams focus resources on issues with the greatest operational or regulatory significance.',
      },
      {
        title: 'Better management visibility',
        description:
          'Dashboards and concise summaries help stakeholders understand open risks, overdue actions, evidence gaps, and regulatory developments.',
      },
    ],
    qualityControls: [
      'Defined scope, entity, jurisdiction, and effective-date assumptions',
      'Requirement-to-source and requirement-to-control traceability',
      'Independent review of citations, dates, and obligation summaries',
      'Owner validation of process and evidence descriptions',
      'Controlled policy versions and approval records',
      'Open-question and legal-interpretation escalation to client counsel',
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
    slug: 'paralegal-assistant',
    iconName: 'Users',
    description:
      'Embedded paralegal and legal operations capacity for case administration, docketing, filings, billing, intake, and recurring workflow support.',
    longDescription:
      'Our paralegal and virtual legal operations teams take ownership of defined, repeatable work that consumes lawyer and in-house team capacity. Support can include matter intake, document organization, calendar and docket updates, filing preparation, proofreading, billing support, conflict-check coordination, client communication administration, and practice-management maintenance. The model is built around documented procedures, least-privilege system access, clear attorney supervision, daily visibility, and escalation when legal judgment is required.',
    keyAreas: [
      'Practice and Matter Management Support',
      'Conflict Check and Client Intake Coordination',
      'Master Calendar and Docket Administration',
      'Billing, Time, and Invoice Operations',
      'Court Filing and Document Production Support',
      'Proofreading, Formatting, and Citation Checks',
    ],
    bestFor: [
      'Law firms that need stable non-lawyer operational capacity',
      'Legal departments with recurring administrative backlogs',
      'Teams seeking follow-the-sun matter support',
      'Organizations standardizing fragmented legal workflows',
    ],
    process: [
      {
        title: 'Workflow and responsibility mapping',
        description:
          'We document tasks, systems, inputs, outputs, deadlines, owners, attorney-review points, client communication limits, risk levels, and tasks that must never be delegated.',
      },
      {
        title: 'SOP, access, and escalation setup',
        description:
          'Client procedures, templates, naming conventions, calendars, permissions, communication channels, quality checks, and escalation contacts are configured before live work.',
      },
      {
        title: 'Controlled pilot',
        description:
          'A limited set of matters or task types is processed first so instructions, turnaround expectations, access, output quality, and exception handling can be calibrated.',
      },
      {
        title: 'Daily task execution',
        description:
          'Assigned paralegals manage approved intake, docket, document, filing, billing, proofreading, correspondence, and platform tasks using shared trackers and priorities.',
      },
      {
        title: 'Quality review and legal escalation',
        description:
          'Checklists and senior review cover critical dates, names, filing requirements, document completeness, billing data, and formatting. Legal questions return to supervising counsel.',
      },
      {
        title: 'Performance and capacity management',
        description:
          'The team reports workload, turnaround, exceptions, rework, backlog, upcoming deadlines, and process-improvement opportunities at the agreed cadence.',
      },
    ],
    deliverables: [
      'Matter intake and opening packs',
      'Conflict-check and client-data trackers',
      'Calendars, docket updates, and deadline reports',
      'Formatted, proofread, and filing-ready documents',
      'Exhibit, correspondence, and matter indexes',
      'Billing, time-entry, and invoice support files',
      'Daily or weekly operations dashboards',
      'SOPs, checklists, and knowledge-base updates',
    ],
    benefits: [
      {
        title: 'More lawyer time for legal work',
        description:
          'Recurring coordination and administrative execution move to a managed support layer while lawyers retain supervision and legal decision-making.',
      },
      {
        title: 'More reliable operations',
        description:
          'Documented procedures, backup coverage, shared trackers, and quality checklists reduce dependence on informal knowledge and individual memory.',
      },
      {
        title: 'Flexible, scalable capacity',
        description:
          'Support can expand around filings, matter intake, billing cycles, diligence, and litigation peaks without rebuilding the internal team for each surge.',
      },
      {
        title: 'Better workflow visibility',
        description:
          'Task status, deadlines, bottlenecks, exceptions, and service levels are made visible through agreed reporting rather than managed through scattered messages.',
      },
    ],
    qualityControls: [
      'Task-specific SOPs, checklists, and sample outputs',
      'Dual control for critical dates and filing information',
      'Defined attorney approval points and prohibited tasks',
      'Template, naming, and matter-filing conventions',
      'Daily exception and overdue-task review',
      'Rework, turnaround, backlog, and service-level reporting',
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
