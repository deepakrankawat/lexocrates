const hiddenParagraphs = [
  'Legal process outsourcing and AI automation for U.S. law firms covering contract review, eDiscovery, HIPAA-aware litigation support, ABA-aligned privilege workflows, and SOC 2 secure document processing.',
  'Legal process outsourcing for UK practices with AI-driven disclosure review, UK GDPR and DPA 2018 safeguards, SRA-aligned outsourcing controls, ISO 27001 hosting, and IDTA/SCCs data-transfer options.',
  'Canadian legal process outsourcing with AI-assisted contract lifecycle management, PIPEDA and Law 25 compliant handling, bilingual workflows, Canadian data residency choices, and litigation support for cross-border matters.',
  'AI contract review, NDA analysis, due diligence summarization, paralegal support, court filing preparation, legal research, and billing automation tuned for the USA, UK, and Canada.',
];

export function SeoHiddenBlock() {
  return (
    <div className="sr-only" aria-hidden="true">
      <p>{hiddenParagraphs[0]}</p>
      <p>{hiddenParagraphs[1]}</p>
      <p>{hiddenParagraphs[2]}</p>
      <p>{hiddenParagraphs[3]}</p>
    </div>
  );
}
