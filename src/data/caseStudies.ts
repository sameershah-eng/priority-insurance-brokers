export interface CaseStudy {
  id: string;
  tabNumber: string;
  tabTitle: string;
  category: string;
  headline: string;
  story: string;
  metrics: {
    value: string;
    label: string;
  }[];
  disclaimer: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "outcome-1",
    tabNumber: "01",
    tabTitle: "When equipment failed",
    category: "EQUIPMENT CLAIM · VICTORIAN MAINTENANCE PLUMBER",
    headline: "The right preparation helped a business get back to work.",
    story: "Priority identified a specialist high-pressure drain jetter as critical income-generating equipment during a routine insurance review. When it later suffered an accidental electrical fire on-site, the supporting asset schedules and valuation evidence were already in place with the underwriter. The claim was approved within 24 hours and a replacement unit was installed and operational the following day.",
    metrics: [
      { value: "$18,000", label: "Claim paid" },
      { value: "1 day", label: "Business day from claim to payment" },
      { value: "2 days", label: "Total business downtime" }
    ],
    disclaimer: "Historical client outcome published on Priority's website. Timing and cover depend on the circumstances, policy and insurer."
  },
  {
    id: "outcome-2",
    tabNumber: "02",
    tabTitle: "When renewal mattered",
    category: "RISK RESTRUCTURE · CIVIL & EARTHMOVING CONTRACTOR",
    headline: "Closing a $5M contract gap before high-risk bridge work began.",
    story: "An expanding earthmoving contractor secured a major regional infrastructure subcontract for bridge abutments and deep trenching. Their previous general broker had left an outdated turnover tier and a 5-metre depth restriction on the policy schedule. Priority restructured the indemnity program, negotiated with dedicated civil underwriters, and delivered compliant certificates within 48 hours without project delay.",
    metrics: [
      { value: "$20M", label: "Full liability limit secured" },
      { value: "48 hrs", label: "Turnaround to issue compliant certificate" },
      { value: "$0", label: "Project delay penalties incurred" }
    ],
    disclaimer: "Real policy outcome negotiated by Priority Insurance Brokers. Individual terms depend on risk profile and insurer appetite."
  }
];
