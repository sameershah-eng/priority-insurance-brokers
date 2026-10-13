export interface ServiceWorkProfile {
  id: string;
  name: string;
  description: string;
  keyQuestions: string[];
}

export interface QuoteChecklistItem {
  id: string;
  title: string;
  description: string;
}

export interface PolicyLayer {
  title: string;
  description: string;
  details: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "industry" | "coverage";
  categoryLabel: string;
  shortDescription: string;
  featured: boolean;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  workProfiles: ServiceWorkProfile[];
  keyRiskFactors: {
    title: string;
    description: string;
  }[];
  quoteChecklist: QuoteChecklistItem[];
  policyLayers: PolicyLayer[];
  clientReview?: {
    author: string;
    role: string;
    quote: string;
    context: string;
  };
  faqs: ServiceFAQ[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "demolition",
    slug: "demolition-contractors",
    title: "Demolition Contractors",
    category: "industry",
    categoryLabel: "High-Risk Trade",
    shortDescription: "Specialist cover for structural knock-downs, mechanical demolition, asbestos handling and internal strip-outs.",
    featured: true,
    heroHeadline: "Demolition contractor insurance. Built around your work.",
    heroSubheadline: "For established demolition businesses, structural contractors and strip-out teams. We look closely at your activities, contracts and exclusions before you decide.",
    heroImage: "/src/assets/images/demolition_excavator_1791913660275.jpg",
    workProfiles: [
      {
        id: "residential",
        name: "Residential demolition",
        description: "Knock-downs, site clearing and associated excavation, with a close look at nearby properties, overhead services, and asbestos management.",
        keyQuestions: [
          "Full or partial demolition, and the exact machinery methods used",
          "Maximum structure height, boundary setbacks and neighbouring properties",
          "Asbestos identification, licensed removal and approved subcontracting",
          "Excavation, site clearing, tree removal and hazardous waste transport"
        ]
      },
      {
        id: "commercial",
        name: "Commercial & industrial",
        description: "Multi-storey dismantling, industrial factory deconstructions, heavy plant operations, and public thoroughfare traffic management.",
        keyQuestions: [
          "Engineered sequencing, crane picks and high-reach shear attachments",
          "Shared party walls, underpinning, vibration monitoring and dial-before-you-dig",
          "Contractual indemnities and hold-harmless clauses required by head contractors",
          "Environmental containment, dust suppression and stormwater protection"
        ]
      },
      {
        id: "strip-out",
        name: "Strip-outs & partial demolition",
        description: "Defits, tenancy returns, retail refurbishments, and non-structural removals inside active commercial premises.",
        keyQuestions: [
          "Work within occupied or operational tenant buildings",
          "Protection of existing structural elements and landlord services (HVAC, fire lines)",
          "Out-of-hours works, hot works permits and lift/loading dock access agreements",
          "Dust, acoustic containment and waste chute logistics"
        ]
      }
    ],
    keyRiskFactors: [
      {
        title: "Demolition methods and height restrictions",
        description: "Tell us how structures are taken down and the maximum heights involved. Standard broker package policies frequently contain hidden sub-limits or outright exclusions above 10 or 15 metres. We ensure the policy schedule reflects the work you actually undertake."
      },
      {
        title: "Asbestos and hazardous materials handling",
        description: "Most general liability wordings exclude asbestos unconditionally. If your licence or scope includes bonded (non-friable) or friable asbestos removal, a specialist pollution liability extension or standalone environmental policy is essential."
      },
      {
        title: "Neighbouring property, vibration & support removal",
        description: "Vibration damage and removal of lateral support are common sources of costly litigation. We negotiate clauses that ensure cover extends to adjoining owners and public infrastructure."
      },
      {
        title: "Subcontractors and contractual hold-harmless clauses",
        description: "If you engage crane operators, traffic controllers, or cartage contractors, insurers demand strict proof of their insurance. We audit your subcontract agreements to prevent liability slipping through gaps."
      }
    ],
    quoteChecklist: [
      {
        id: "chk-1",
        title: "Your activities and methods",
        description: "Residential, commercial or industrial; structural demolition or strip-outs; maximum heights and associated excavation."
      },
      {
        id: "chk-2",
        title: "Asbestos and waste exposure",
        description: "Removal, transport, disposal methods and who performs the work, including licenced subcontractors."
      },
      {
        id: "chk-3",
        title: "Business and workforce details",
        description: "Annual turnover, employee count, subcontractor payments and the states/territories you operate in."
      },
      {
        id: "chk-4",
        title: "Licences and operating controls",
        description: "Relevant state demolition licences, supervisor tickets, demolition safety plans and site risk controls."
      },
      {
        id: "chk-5",
        title: "Contracts and current insurance",
        description: "Required principal limits, insurance clauses, current policy schedules, endorsements and renewal date."
      },
      {
        id: "chk-6",
        title: "Claims history and equipment schedule",
        description: "5-year claims record, any non-renewal/declines, and an asset schedule of owned or hired plant."
      }
    ],
    policyLayers: [
      {
        title: "Demolition Public Liability",
        description: "Third-party personal injury or property damage caused by demolition work.",
        details: "Covers defense costs and court judgements. Limits from $10M to $50M configured for tier-1 principal contracts."
      },
      {
        title: "Asbestos & Environmental Liability",
        description: "Sudden, accidental or historical exposure during removal and site remediation.",
        details: "Vital protection against bodily injury claims that emerge years after asbestos containment or cartage."
      },
      {
        title: "Plant, Attachments & Tools",
        description: "Excavators, hydraulic shears, pulverisers, breakers and hired machinery.",
        details: "Covers dry hire, wet hire, transit, roll-over, and replacement cost on agreed market value."
      },
      {
        title: "Commercial Motor & Cartage",
        description: "Trucks, tippers, hook-lifts and support vehicles carrying site debris.",
        details: "Includes loading/unloading risk, dangerous goods endorsements, and fleet fleet-rate discounts."
      },
      {
        title: "Professional Indemnity",
        description: "For contractors providing demolition sequencing plans, methodology statements or consulting.",
        details: "Protects against financial loss claims arising from flawed structural engineering advice or certs."
      },
      {
        title: "Management & Business Risks",
        description: "Management liability, statutory fines, cyber extortion and business interruption.",
        details: "Shields directors from personal liability during SafeWork investigations or regulatory disputes."
      }
    ],
    clientReview: {
      author: "Antonio Lara",
      role: "Licensed Demolition Contractor, QLD",
      quote: "Struggled for weeks to get Demolition added to my current liability insurance in order to submit for a licence application. Found Priority and within a day Dan had a quote, an acceptance and fully paid up insurance with a certificate of currency. Saved me so much stress and time. Thank you again.",
      context: "Published client review from verified policyholder."
    },
    faqs: [
      {
        question: "What insurance does a demolition contractor legally need?",
        answer: "In Australia, demolition contractors typically require a minimum of $20 million Public Liability tailored explicitly to demolition (as standard trade policies specifically exclude it), Plant & Equipment cover for excavators and attachments, Workers Compensation for employees, and often Asbestos Liability if handling ACM."
      },
      {
        question: "Does public liability automatically include asbestos removal?",
        answer: "Almost never. Standard public liability policies contain total asbestos exclusions. At Priority, we source policies with specialized asbestos removal endorsements or standalone environmental liability policies that satisfy state licensing authorities (such as WorkSafe / SafeWork)."
      },
      {
        question: "Am I covered if I subcontract out parts of the demolition?",
        answer: "Cover for subcontractor acts depends heavily on policy wording. Insurers require that you maintain written subcontractor agreements and verify that every subcontractor holds their own compliant insurance of equal value. We help you establish standard verification protocols."
      },
      {
        question: "Does liability insurance cover the actual building being demolished?",
        answer: "No. Public liability covers third-party damage to neighbouring properties, council assets, or passing pedestrians. It does not pay for damage to the structure you were hired to tear down. However, contract works cover can protect retained structural portions."
      },
      {
        question: "Can you help after a decline or non-renewal by another broker?",
        answer: "Yes. High-risk trades often receive automatic computer-generated declines from mass-market insurers. As Steadfast network brokers, we access specialist Lloyd's syndicates and Australian agency underwriters who assess risks on merit rather than standard algorithms."
      },
      {
        question: "How quickly can you arrange a certificate of currency?",
        answer: "If complete details and claims declarations are ready, we frequently issue approved certificates of currency within 24 to 48 hours to prevent project or licensing delays."
      }
    ]
  },
  {
    id: "mining",
    slug: "mining-contractors",
    title: "Mining Contractors",
    category: "industry",
    categoryLabel: "Resource Sector",
    shortDescription: "Specialist risk solutions for underground & open-cut mining services, shutdowns, maintenance and mobile plant.",
    featured: true,
    heroHeadline: "Mining contractor insurance. Engineered for high-stakes sites.",
    heroSubheadline: "Navigating site access conditions, high contractual liability limits, and specialized underground plant warranties across Queensland and national resource corridors.",
    heroImage: "/src/assets/images/hero_broker_site_1791913660706.jpg",
    workProfiles: [
      {
        id: "open-cut",
        name: "Open-cut operations & civil works",
        description: "Haul road construction, overburden stripping, bulk earthworks, and heavy equipment maintenance crews.",
        keyQuestions: [
          "Airside or pit-floor vehicle access endorsements",
          "Working within blast zones or exclusion perimeters",
          "High limit requirements ($50M+ Public Liability) imposed by tier-1 miners"
        ]
      },
      {
        id: "underground",
        name: "Underground & shaft services",
        description: "Ground support, shotcreting, vent shaft installation, dewatering and mechanical fit-outs.",
        keyQuestions: [
          "Explicit underground risk disclosure (standard policies exclude underground)",
          "Electrical and mechanical apparatus compliance",
          "Emergency rescue team exposure and business continuity"
        ]
      },
      {
        id: "shutdown",
        name: "Shutdown & fixed plant maintenance",
        description: "Crusher overhauls, conveyor splicing, wash plant maintenance, and mill relining.",
        keyQuestions: [
          "Tight contractual timelines with liquidated damages implications",
          "Hot works on hydrocarbon or combustible material handling circuits",
          "Contractor onboarding and cross-indemnity deed verification"
        ]
      }
    ],
    keyRiskFactors: [
      {
        title: "Pit-floor and underground exclusions",
        description: "Most off-the-shelf business packs exclude all works past the mine gate. Priority structures wordings that explicitly authorise below-surface and active production environments."
      },
      {
        title: "Principal contractual indemnities",
        description: "Global mining houses issue non-negotiable procurement contracts that push extreme liability onto service contractors. We review these clauses to ensure your policy doesn't breach policy warranty."
      }
    ],
    quoteChecklist: [
      {
        id: "mine-1",
        title: "Mine site locations and principals",
        description: "List of mine operators (e.g. BHP, Glencore, Rio Tinto, Anglo) and specific sites."
      },
      {
        id: "mine-2",
        title: "Underground percentage disclosure",
        description: "Clear breakdown between surface work, wash plants, and underground shafts."
      },
      {
        id: "mine-3",
        title: "Schedule of heavy equipment and dry hire",
        description: "Full asset values for equipment operating inside mine boundaries."
      }
    ],
    policyLayers: [
      {
        title: "High-Limit Mining Public Liability",
        description: "Limits up to $100M required by major mining companies.",
        details: "Tailored to pit-floor operations and hazardous industrial maintenance."
      },
      {
        title: "Mining Mobile Plant & Machinery Breakdown",
        description: "Comprehensive cover for heavy excavators, dump trucks, and fixed plant.",
        details: "Includes underground retrieval costs and transit insurance."
      },
      {
        title: "Contractual Liability & Broadform Indemnity",
        description: "Protection when signing rigorous tier-1 supplier service deeds.",
        details: "Harmonised with Steadfast network contractual liability extensions."
      }
    ],
    faqs: [
      {
        question: "Why do standard insurers decline mine site contractors?",
        answer: "Standard underwriters view mining as catastrophic loss potential due to high asset values and 24/7 downtime risk. As specialist brokers, we take the time to present your safety management system, tickets, and exact scope to underwriters who write mining risks daily."
      },
      {
        question: "Can you provide $50 million liability insurance?",
        answer: "Yes. We arrange primary policies of $20M and umbrella / excess-of-loss layers up to $100M+ to satisfy any resource company vendor pre-qualification."
      }
    ]
  },
  {
    id: "earthmoving",
    slug: "earthmoving-civil",
    title: "Earthmoving & Civil",
    category: "industry",
    categoryLabel: "Civil Infrastructure",
    shortDescription: "Contractors, excavators, drainage teams and businesses working with heavy civil plant.",
    featured: true,
    heroHeadline: "Earthmoving & civil insurance. Protecting iron and reputation.",
    heroSubheadline: "From bulk earthworks to subdivision drainage and directional drilling. Complete coverage for machinery, underground utilities, and principal contracts.",
    heroImage: "/src/assets/images/demolition_excavator_1791913660275.jpg",
    workProfiles: [
      {
        id: "civil-bulk",
        name: "Bulk earthworks & subdivision",
        description: "Site cuts, retention basins, batter shaping and road preparation.",
        keyQuestions: [
          "Soil compaction warranties and structural engineering interfaces",
          "Erosion and sediment control failure risks during storm events"
        ]
      },
      {
        id: "utilities",
        name: "Directional drilling & service trenching",
        description: "Working around live fiber optic, gas mains, high voltage cables and water trunks.",
        keyQuestions: [
          "Underground services cable strikes and strict Dial-Before-You-Dig adherence",
          "Contamination or environmental spill responses"
        ]
      }
    ],
    keyRiskFactors: [
      {
        title: "Underground service cable strike liability",
        description: "Striking a high-pressure gas main or telecommunications trunk can generate claims exceeding hundreds of thousands. We secure wordings with sensible duty-of-care clauses rather than restrictive exclusion warranties."
      }
    ],
    quoteChecklist: [
      {
        id: "earth-1",
        title: "Dial-Before-You-Dig procedures",
        description: "Documented processes for electronic line location and potholing."
      },
      {
        id: "earth-2",
        title: "Plant list with PPSR and finance status",
        description: "Make, model, serial number and market values."
      }
    ],
    policyLayers: [
      {
        title: "Civil Contractors Public Liability",
        description: "Cover for property damage, vibration, and underground service rupture.",
        details: "Available in limits from $10M to $50M."
      },
      {
        title: "Excavator & Earthmoving Plant Comprehensive",
        description: "Protection against roll-over, fire, flood, theft and accidental damage.",
        details: "Includes finance payout protection and agreed value endorsements."
      }
    ],
    faqs: [
      {
        question: "Are underground utility strikes covered?",
        answer: "Yes, provided the policy is arranged properly. Many retail policies contain strict 'underground services clauses' requiring unreasonable pre-work documentation. We ensure your policy wording accommodates real-world civil site conditions."
      }
    ]
  },
  {
    id: "plant-hire",
    slug: "plant-dry-hire",
    title: "Plant & Dry Hire",
    category: "industry",
    categoryLabel: "Equipment Fleet",
    shortDescription: "Cover considerations for owned machinery, hired-out fleet, cross-hire agreements and damage waivers.",
    featured: false,
    heroHeadline: "Plant & dry hire insurance. Closing the gap between owner and hirer.",
    heroSubheadline: "When valuable machinery leaves your yard, hire agreements and damage waivers must align with insurer conditions to prevent unrecoverable losses.",
    heroImage: "/src/assets/images/hero_broker_site_1791913660706.jpg",
    workProfiles: [
      {
        id: "dry-hire",
        name: "Dry hire fleets (un-operated machinery)",
        description: "Excavators, rollers, telehandlers and access equipment hired out to third-party operators.",
        keyQuestions: [
          "Enforceability of hire agreements and damage waiver excess structures",
          "Theft by trick (hirer disappearance or fraudulent hire documents)"
        ]
      },
      {
        id: "wet-hire",
        name: "Wet hire (equipment + operator)",
        description: "Providing plant with your skilled operators under client site direction.",
        keyQuestions: [
          "Distinction between operator fault vs hirer site command liability",
          "Care, custody and control extensions"
        ]
      }
    ],
    keyRiskFactors: [
      {
        title: "Theft by conversion and bogus hirers",
        description: "Standard theft cover excludes situations where you voluntarily handed the keys to someone who then disappears with the machine. We arrange specific fraud and conversion extensions."
      }
    ],
    quoteChecklist: [
      {
        id: "hire-1",
        title: "Standard Hire Agreement terms",
        description: "Copy of current hire terms, damage waiver policy, and ID verification."
      }
    ],
    policyLayers: [
      {
        title: "Plant & Equipment with Dry Hire Extension",
        description: "Full accidental damage and theft cover while in the custody of third parties.",
        details: "Essential for equipment rental businesses."
      }
    ],
    faqs: [
      {
        question: "Does my insurance cover equipment hired out without an operator?",
        answer: "Only if you have an explicit 'Dry Hire' endorsement. Standard plant policies strictly exclude cover once equipment is handed to an unaffiliated hirer unless declared."
      }
    ]
  },
  {
    id: "public-liability",
    slug: "public-liability",
    title: "Public & Product Liability",
    category: "coverage",
    categoryLabel: "Core Protection",
    shortDescription: "Protection against third-party personal injury and property damage claims arising from business operations.",
    featured: false,
    heroHeadline: "Commercial public & product liability. Solid foundation for every contract.",
    heroSubheadline: "Protecting your balance sheet from catastrophic property damage or bodily injury claims. Backed by Steadfast policy wordings with superior definitions.",
    heroImage: "/src/assets/images/hero_broker_site_1791913660706.jpg",
    workProfiles: [
      {
        id: "trade-commercial",
        name: "Commercial trades and builders",
        description: "Sites, clients, members of the public, and principal contract requirements.",
        keyQuestions: ["Height limits", "Hot works conditions", "Principal indemnity deeds"]
      }
    ],
    keyRiskFactors: [
      {
        title: "Sub-limit traps in cheap online policies",
        description: "Online comparison policies often feature harsh sub-limits for pure economic loss, water damage, or defective workmanship. We secure full-limit broadform cover."
      }
    ],
    quoteChecklist: [
      {
        id: "pl-1",
        title: "Annual turnover and wage breakdown",
        description: "Direct wages, PAYG staff, and subcontractor payments."
      }
    ],
    policyLayers: [
      {
        title: "Broadform Public Liability ($10M - $50M)",
        description: "Protects against legal liability for third-party injury and property loss.",
        details: "Includes defense legal costs outside the policy limit."
      }
    ],
    faqs: [
      {
        question: "What is the difference between $10M and $20M liability?",
        answer: "Most major commercial builders, government entities, and mine sites mandate a minimum of $20M to even enter the gate. The incremental cost from $10M to $20M is usually very small."
      }
    ]
  },
  {
    id: "motor-fleet",
    slug: "commercial-motor-fleet",
    title: "Commercial Motor & Fleet",
    category: "coverage",
    categoryLabel: "Fleet & Haulage",
    shortDescription: "Comprehensive cover for utes, prime movers, rigid tippers, trailers, and multi-vehicle commercial fleets.",
    featured: false,
    heroHeadline: "Commercial fleet & motor insurance. Built for work vehicles.",
    heroSubheadline: "Single-policy fleet management for heavy trucks, trailers, yellow gear, and light utility vehicles. Fast claims turnaround to minimize vehicle downtime.",
    heroImage: "/src/assets/images/hero_broker_site_1791913660706.jpg",
    workProfiles: [
      {
        id: "fleet-ops",
        name: "Mixed commercial vehicle fleets (5+ units)",
        description: "Streamlined administration with blanket additions and deletions.",
        keyQuestions: ["Driver age limits", "Dangerous goods carriage", "Windscreen and downtime cover"]
      }
    ],
    keyRiskFactors: [
      {
        title: "Downtime costs after an accident",
        description: "When an essential truck or tipper is off the road, lost revenue quickly exceeds the physical repair cost. We recommend business interruption and hire vehicle extensions."
      }
    ],
    quoteChecklist: [
      {
        id: "fleet-1",
        title: "Fleet vehicle register",
        description: "Rego numbers, VINs, carrying capacity and driver history."
      }
    ],
    policyLayers: [
      {
        title: "Comprehensive Fleet Policy",
        description: "Covers collision, rollover, theft, storm, and third-party property damage.",
        details: "Rated on fleet experience rather than individual driver ratings."
      }
    ],
    faqs: [
      {
        question: "How many vehicles do I need for fleet rating?",
        answer: "Typically 5 or more commercial vehicles qualifies your business for a fleet policy, giving you collective pricing and simplified single-expiry management."
      }
    ]
  }
];
