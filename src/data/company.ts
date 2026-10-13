export interface CompanyInfo {
  name: string;
  tradingName: string;
  abn: string;
  car: string; // Corporate Authorised Representative
  brokerNetwork: string;
  afsl: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  officeHours: string;
  director: {
    name: string;
    title: string;
    carNumber: string;
    credentials: string[];
    bio: string;
  };
  trustCredentials: {
    title: string;
    subtitle: string;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
}

export const COMPANY: CompanyInfo = {
  name: "Priority Insurance Brokers",
  tradingName: "DCSX Group Pty Ltd",
  abn: "95 655 563 616",
  car: "1295220",
  brokerNetwork: "Community Broker Network Pty Ltd",
  afsl: "233750",
  tagline: "Specialist advice for complex businesses",
  heroHeadline: "Your business moves fast. Your insurance should keep up.",
  heroSubheadline: "Specialist commercial insurance for established businesses, complex operations and the people building Australia.",
  phone: "07 3103 2992",
  phoneRaw: "0731032992",
  email: "quotes@priorityib.com.au",
  address: {
    line1: "Level 7, 154 Melbourne Street",
    line2: "South Brisbane",
    city: "Brisbane",
    state: "QLD",
    postcode: "4101",
    country: "Australia",
  },
  officeHours: "Monday – Friday: 8:00 AM – 5:30 PM AEST",
  director: {
    name: "Daniel Ufer",
    title: "Managing Director",
    carNumber: "1295221",
    credentials: [
      "Diploma of Insurance Broking",
      "Qualified Practising Insurance Broker (QPIB)",
      "Steadfast Network Member"
    ],
    bio: "Daniel leads Priority Insurance Brokers with over 16 years of commercial broking experience across Queensland and nationwide. Specialising in heavy industry, high-risk contractors, demolition, and fleet operations, Daniel works closely with business owners to ensure policies actually respond when complex losses occur."
  },
  trustCredentials: [
    {
      title: "Steadfast Network",
      subtitle: "Through Community Broker Network"
    },
    {
      title: "Specialist Markets",
      subtitle: "For risks needing closer underwriting"
    },
    {
      title: "Claims Advocate",
      subtitle: "In your corner when loss happens"
    },
    {
      title: "Australia-Wide",
      subtitle: "Brisbane headquarters, national reach"
    }
  ],
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com/company/priority-insurance-brokers" },
    { platform: "Facebook", url: "https://facebook.com/priorityinsurancebrokers" },
    { platform: "Instagram", url: "https://instagram.com/priorityinsurance" },
    { platform: "YouTube", url: "https://youtube.com/@priorityinsurance" }
  ]
};
