export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  featured?: boolean;
  content: {
    sectionHeading: string;
    paragraphs: string[];
  }[];
  tableOfContents: {
    id: string;
    title: string;
  }[];
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "demolition-contractor-insurance-guide-australia",
    title: "Demolition contractor insurance: What certificates of currency leave out",
    excerpt: "A certificate of currency proves a policy exists. It does not prove the policy covers 18-metre mechanical drops, bonded asbestos removal, or adjoining party walls.",
    category: "High-Risk Trades",
    author: {
      name: "Daniel Ufer",
      role: "Managing Director & QPIB",
      avatar: "/src/assets/images/broker_director_1791913660480.jpg"
    },
    publishedDate: "12 Oct 2026",
    readTime: "6 min read",
    featured: true,
    tableOfContents: [
      { id: "the-certificate-trap", title: "The Certificate of Currency Trap" },
      { id: "height-depth-warranties", title: "Height and Depth Warranties in Fine Print" },
      { id: "asbestos-exclusions", title: "Why General Liability Won't Cover Asbestos" },
      { id: "subcontractor-exposure", title: "Managing Subcontractor Indemnities" },
      { id: "practical-checklist", title: "A Practical Checklist Before You Sign" }
    ],
    tags: ["Demolition", "Public Liability", "Risk Management", "Compliance"],
    content: [
      {
        sectionHeading: "The Certificate of Currency Trap",
        paragraphs: [
          "When a principal contractor or council licensing authority requests proof of insurance, they ask for a Certificate of Currency. Most business owners assume that if their broker sends a PDF stating '$20,000,000 Public Liability', they are fully protected against any mishap on site.",
          "In commercial litigation, however, a certificate of currency holds no contractual weight against the actual policy wording and endorsements schedule. If your policy has a standard 'Demolition Exclusion' or an unendorsed height limitation of 10 metres, that $20M certificate is virtually meaningless if an incident occurs outside those parameters."
        ]
      },
      {
        sectionHeading: "Height and Depth Warranties in Fine Print",
        paragraphs: [
          "Many off-the-shelf business packs written for general builders and earthmovers carry restrictive warranties. For instance, policies frequently restrict structural demolition to single-storey or maximum 4 metres in height, and excavation to 1.5 metres in depth without engineer sign-off.",
          "When taking on commercial deconstruction or industrial warehouse strip-outs, contractors routinely work with high-reach excavators operating at 15 to 25 metres. If this specific methodology is not declared to underwriters and formally acknowledged in your occupation description, the insurer can deny indemnity for a total loss."
        ]
      },
      {
        sectionHeading: "Why General Liability Won't Cover Asbestos",
        paragraphs: [
          "Every standard broadform liability policy in Australia contains an absolute asbestos exclusion. This applies whether the material is non-friable fibro sheeting or friable insulation.",
          "If your business encounters ACM during residential knock-downs or commercial defits, you must ensure that your insurance broker arranges an explicit Asbestos Removal Liability extension or a dedicated Environmental Impairment Liability policy with approved limits."
        ]
      },
      {
        sectionHeading: "Managing Subcontractor Indemnities",
        paragraphs: [
          "Subcontractors are common in demolition: specialized crane crews, saw-cutting technicians, hazardous waste hauliers, and traffic controllers. However, insurers require that you enforce formal written contracts with hold-harmless provisions and collect verified certificates of currency before works commence.",
          "Failure to verify subcontractor policies can result in your own primary insurer refusing to defend cross-claims if an uninsured contractor causes damage or injury on your project site."
        ]
      },
      {
        sectionHeading: "A Practical Checklist Before You Sign",
        paragraphs: [
          "Before accepting any insurance quote for demolition activities, request your broker to confirm three points in writing: First, that the declared occupation specifically includes structural demolition; second, that maximum working heights match your actual tenders; and third, that vibration and lateral support removal are not unconditionally excluded."
        ]
      }
    ]
  },
  {
    slug: "plant-hire-agreements-insurance-gaps",
    title: "Plant & dry hire: Where standard hire agreements fail in a loss",
    excerpt: "When an excavator or telehandler is hired out without an operator, standard plant insurance policies can be voided without an explicit dry hire endorsement.",
    category: "Plant & Equipment",
    author: {
      name: "Daniel Ufer",
      role: "Managing Director & QPIB",
      avatar: "/src/assets/images/broker_director_1791913660480.jpg"
    },
    publishedDate: "28 Sep 2026",
    readTime: "5 min read",
    featured: false,
    tableOfContents: [
      { id: "dry-vs-wet-hire", title: "Dry Hire vs Wet Hire Distinctions" },
      { id: "theft-by-conversion", title: "The Reality of Theft by Conversion" },
      { id: "damage-waivers", title: "Damage Waivers Are Not Insurance" }
    ],
    tags: ["Plant Hire", "Machinery", "Civil Works"],
    content: [
      {
        sectionHeading: "Dry Hire vs Wet Hire Distinctions",
        paragraphs: [
          "Hiring out heavy machinery without an operator carries an entirely different underwriting risk than operating equipment yourself. In dry hire, you surrender control over how the machine is maintained, who sits at the controls, and whether safe load indicators are bypassed.",
          "If your policy does not have an active 'Dry Hire' endorsement, an insurer can legitimately decline a rollover or engine burnout claim occurring while the equipment was in a customer's custody."
        ]
      },
      {
        sectionHeading: "The Reality of Theft by Conversion",
        paragraphs: [
          "Standard plant policies cover theft by break-in or forced entry. But what happens if a fraudulent client hires your 20-tonne excavator with false ID cards and ships it interstate?",
          "Under Australian insurance law, handing over the keys voluntarily is deemed 'theft by conversion' or 'embezzlement by bailee'—an exclusion on 90% of retail policies unless specifically negotiated."
        ]
      },
      {
        sectionHeading: "Damage Waivers Are Not Insurance",
        paragraphs: [
          "Many rental businesses charge customers an 8% damage waiver. While helpful for minor scratches, damage waivers do not replace insurer claims when a catastrophic total loss occurs. Ensure your hire agreements and insurance schedule work together seamlessly."
        ]
      }
    ]
  },
  {
    slug: "underground-utility-strike-liability",
    title: "Dial Before You Dig: When a cable strike leads to an insurance dispute",
    excerpt: "Why standard duty-of-care clauses in civil contractor policies lead to rejected claims when an underground optic fibre or gas main is damaged.",
    category: "Civil & Earthmoving",
    author: {
      name: "Daniel Ufer",
      role: "Managing Director & QPIB",
      avatar: "/src/assets/images/broker_director_1791913660480.jpg"
    },
    publishedDate: "15 Sep 2026",
    readTime: "4 min read",
    featured: false,
    tableOfContents: [
      { id: "high-cost-strikes", title: "The Cost of Telecommunications Damage" },
      { id: "strict-condition-clauses", title: "Strict Condition Clauses in PDS Documents" }
    ],
    tags: ["Civil Works", "Public Liability", "Utilities"],
    content: [
      {
        sectionHeading: "The Cost of Telecommunications Damage",
        paragraphs: [
          "Slicing through a subsea cable landing or critical inter-capital fibre trunk can trigger claims exceeding $500,000 for emergency splicing, traffic rerouting, and business interruption damages.",
          "Civil earthmovers often find that while their policy limit is $20M, an underground services clause requires hand-potholing within 1 metre of every marked asset—a condition that must be rigorously documented to preserve coverage."
        ]
      },
      {
        sectionHeading: "Strict Condition Clauses in PDS Documents",
        paragraphs: [
          "We assist civil contractors in auditing their site documentation procedures so that if an undetected utility is struck despite prudent electronic location, the claim is approved smoothly without insurer resistance."
        ]
      }
    ]
  },
  {
    slug: "managing-tier-1-contractual-liability-deeds",
    title: "Signing tier-1 construction deeds: Protecting your liability cover",
    excerpt: "Head contractor contracts frequently demand hold-harmless waivers and proportionate liability exclusions that can void your commercial insurance.",
    category: "Commercial Strategy",
    author: {
      name: "Daniel Ufer",
      role: "Managing Director & QPIB",
      avatar: "/src/assets/images/broker_director_1791913660480.jpg"
    },
    publishedDate: "03 Sep 2026",
    readTime: "7 min read",
    featured: false,
    tableOfContents: [
      { id: "contractual-liability-exclusions", title: "The Contractual Liability Exclusion" },
      { id: "cross-liability-clauses", title: "Cross-Liability and Principal Indemnity" }
    ],
    tags: ["Contractual Liability", "Commercial", "Legal"],
    content: [
      {
        sectionHeading: "The Contractual Liability Exclusion",
        paragraphs: [
          "Virtually every commercial liability policy states: 'We do not cover liability assumed by you under an agreement unless you would have been liable in the absence of that agreement at common law.'",
          "When a tier-1 builder asks you to indemnify them for losses caused by their own negligence, you have assumed liability beyond common law. We negotiate contractual liability extensions with underwriters to bridge this exposure."
        ]
      },
      {
        sectionHeading: "Cross-Liability and Principal Indemnity",
        paragraphs: [
          "Understanding how principal indemnity clauses interact with your policy ensures you can sign high-value tenders with complete legal confidence."
        ]
      }
    ]
  },
  {
    slug: "commercial-fleet-claims-turnaround-case-study",
    title: "Minimising truck downtime: Why broker-led fleet claims matter",
    excerpt: "How a proactive claims management protocol saved a regional Brisbane transport and haulage fleet 11 days of lost revenue during a major accident.",
    category: "Fleet & Haulage",
    author: {
      name: "Daniel Ufer",
      role: "Managing Director & QPIB",
      avatar: "/src/assets/images/broker_director_1791913660480.jpg"
    },
    publishedDate: "19 Aug 2026",
    readTime: "5 min read",
    featured: false,
    tableOfContents: [
      { id: "the-real-cost-of-idle-trucks", title: "The Real Cost of Idle Trucks" },
      { id: "direct-assessor-deployment", title: "Direct Assessor Deployment" }
    ],
    tags: ["Fleet", "Commercial Motor", "Claims"],
    content: [
      {
        sectionHeading: "The Real Cost of Idle Trucks",
        paragraphs: [
          "When a heavy prime mover is stationary in a smash repair yard waiting for an insurance assessor, the interest, driver standing costs, and lost route revenue rapidly mount up.",
          "Our dedicated claims desk bypasses call centres, deploying certified heavy vehicle assessors directly to repair workshops within 24 hours of notification."
        ]
      },
      {
        sectionHeading: "Direct Assessor Deployment",
        paragraphs: [
          "By tracking parts availability and pre-authorising tear-downs, we keep business moving for transport operators across the Eastern seaboard."
        ]
      }
    ]
  },
  {
    slug: "underinsurance-in-rising-replacement-cost-environment",
    title: "Plant replacement costs: Why insured values must be re-evaluated annually",
    excerpt: "With machinery lead times and equipment prices surging 20% in recent years, underinsurance clauses can trigger severe co-insurance penalties.",
    category: "Plant & Equipment",
    author: {
      name: "Daniel Ufer",
      role: "Managing Director & QPIB",
      avatar: "/src/assets/images/broker_director_1791913660480.jpg"
    },
    publishedDate: "04 Aug 2026",
    readTime: "4 min read",
    featured: false,
    tableOfContents: [
      { id: "co-insurance-clauses-explained", title: "Co-Insurance Clauses Explained" },
      { id: "market-value-vs-agreed-value", title: "Market Value vs Agreed Value" }
    ],
    tags: ["Plant", "Underwriting", "Asset Valuation"],
    content: [
      {
        sectionHeading: "Co-Insurance Clauses Explained",
        paragraphs: [
          "If a $400,000 excavator is insured for only $250,000 to save on premium, a partial loss claim of $50,000 may be proportionally reduced by the insurer under the co-insurance average clause.",
          "We review asset registers and advise on agreed value endorsements that safeguard against market inflation and long overseas delivery delays."
        ]
      },
      {
        sectionHeading: "Market Value vs Agreed Value",
        paragraphs: [
          "Agreed value policies provide total certainty: if the machine is written off, you receive the full sum specified on your schedule with zero haggling."
        ]
      }
    ]
  },
  {
    slug: "cyber-insurance-for-commercial-contractors",
    title: "Invoice redirection fraud: The number one cyber threat for trades",
    excerpt: "Why Australian construction subcontractors and suppliers are the primary target for email interception and fraudulent banking detail modifications.",
    category: "Commercial Strategy",
    author: {
      name: "Daniel Ufer",
      role: "Managing Director & QPIB",
      avatar: "/src/assets/images/broker_director_1791913660480.jpg"
    },
    publishedDate: "22 Jul 2026",
    readTime: "5 min read",
    featured: false,
    tableOfContents: [
      { id: "how-invoice-interception-happens", title: "How Invoice Interception Happens" },
      { id: "social-engineering-cover", title: "Social Engineering Insurance Coverage" }
    ],
    tags: ["Cyber Insurance", "Fraud", "Commercial Strategy"],
    content: [
      {
        sectionHeading: "How Invoice Interception Happens",
        paragraphs: [
          "Criminals compromise standard email accounts, monitor invoices for major milestone claims, and quietly replace payment BSB numbers right before transfer.",
          "Without specialized cyber crime endorsements, traditional commercial property and liability policies completely exclude voluntary wire transfers."
        ]
      },
      {
        sectionHeading: "Social Engineering Insurance Coverage",
        paragraphs: [
          "We structure tailored cyber policies that include funds transfer fraud coverage and rapid incident forensic response to recover stolen funds."
        ]
      }
    ]
  }
];
