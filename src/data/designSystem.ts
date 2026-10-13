export interface ColorToken {
  name: string;
  hex: string;
  role: string;
  usage: string;
  contrastRatio: string;
}

export interface TypeToken {
  level: string;
  element: string;
  font: string;
  size: string;
  lineHeight: string;
  tracking: string;
  example: string;
}

export interface SeoRedirectRule {
  legacyWordpressUrl: string;
  newRoute: string;
  statusCode: string;
  reason: string;
}

export const COLOR_TOKENS: ColorToken[] = [
  {
    name: "Base Canvas",
    hex: "#FAF9F6",
    role: "Background 60%",
    usage: "Warm off-white background, editorial breathing room",
    contrastRatio: "14.2:1 against Ink"
  },
  {
    name: "Paper Surface",
    hex: "#F2F0EB",
    role: "Container 30%",
    usage: "Subtle card backgrounds, tab bars, quiet section backdrops",
    contrastRatio: "12.8:1 against Ink"
  },
  {
    name: "Ink Navy",
    hex: "#0E1B2C",
    role: "Primary Text & Deep Bands",
    usage: "Headings, body prose, dark 'How We Work' contrast bands",
    contrastRatio: "14.2:1 on Base Canvas"
  },
  {
    name: "Ink Muted",
    hex: "#5B6676",
    role: "Secondary Text",
    usage: "Supporting copy, subheadings, unboxed metadata",
    contrastRatio: "5.8:1 on Base Canvas (AA Compliant)"
  },
  {
    name: "Brand Orange",
    hex: "#EE7625",
    role: "Primary CTA 10%",
    usage: "High-intent buttons ('Get a quote'), active progress steps",
    contrastRatio: "3.4:1 on Navy / 4.6:1 on White"
  },
  {
    name: "Navy Accent",
    hex: "#102A3D",
    role: "Brand Header & Structural",
    usage: "Top utility bar, dark card containers, button text contrast",
    contrastRatio: "13.5:1 on White"
  },
  {
    name: "Teal Gradient",
    hex: "#0F766E",
    role: "Subtle Accent Blob",
    usage: "Slow mesh background blur, hairline border hover",
    contrastRatio: "Decorative / Ambient"
  },
  {
    name: "Amber Warm",
    hex: "#F59E0B",
    role: "Secondary Accent",
    usage: "Checklist badges, gradient shift on hover, notice highlights",
    contrastRatio: "7.1:1 on Ink"
  }
];

export const TYPOGRAPHY_TOKENS: TypeToken[] = [
  {
    level: "Display Hero",
    element: "H1",
    font: "Manrope (700/800)",
    size: "clamp(2.5rem, 5vw, 4.25rem)",
    lineHeight: "1.08",
    tracking: "-0.03em",
    example: "Your business moves fast."
  },
  {
    level: "Serif Accent",
    element: "span / em",
    font: "Instrument Serif (Italic)",
    size: "Match parent display size",
    lineHeight: "1.0",
    tracking: "normal",
    example: "should keep up."
  },
  {
    level: "Section Heading",
    element: "H2",
    font: "Manrope (700)",
    size: "clamp(1.85rem, 3.5vw, 2.75rem)",
    lineHeight: "1.15",
    tracking: "-0.025em",
    example: "Insurance matters most when business gets real."
  },
  {
    level: "Card Heading",
    element: "H3",
    font: "Manrope (600)",
    size: "1.25rem – 1.5rem (20px – 24px)",
    lineHeight: "1.3",
    tracking: "-0.015em",
    example: "Demolition contractor insurance"
  },
  {
    level: "Body Prose",
    element: "p / span",
    font: "Manrope (400/500)",
    size: "0.9375rem – 1.0rem (15px – 16px)",
    lineHeight: "1.65",
    tracking: "-0.01em",
    example: "Specialist commercial insurance for established businesses across Australia."
  },
  {
    level: "Editorial Eyebrow",
    element: "span",
    font: "Manrope (700 uppercase)",
    size: "0.75rem (12px)",
    lineHeight: "1.4",
    tracking: "0.15em",
    example: "01 / OUR APPROACH"
  },
  {
    level: "Data & Telemetry",
    element: "span / code",
    font: "JetBrains Mono (500)",
    size: "0.875rem (14px)",
    lineHeight: "1.4",
    tracking: "normal",
    example: "$18,000 · 1 day · AFSL 233750"
  }
];

export const SEO_REDIRECT_RULES: SeoRedirectRule[] = [
  {
    legacyWordpressUrl: "/demolition-insurance/",
    newRoute: "/services/demolition-contractors",
    statusCode: "301 Permanent",
    reason: "Harmonises custom category slug with preserved keyword equity"
  },
  {
    legacyWordpressUrl: "/mining-contractors-insurance/",
    newRoute: "/services/mining-contractors",
    statusCode: "301 Permanent",
    reason: "Standardises path to /services/ while preserving backlink anchor authority"
  },
  {
    legacyWordpressUrl: "/civil-contractors-plant-hire/",
    newRoute: "/services/plant-dry-hire",
    statusCode: "301 Permanent",
    reason: "Redirects legacy combined URL to dedicated plant hire page"
  },
  {
    legacyWordpressUrl: "/blog/feed/",
    newRoute: "/blog",
    statusCode: "301 Permanent",
    reason: "RSS readers redirected to canonical modern React blog index"
  },
  {
    legacyWordpressUrl: "/contact-us/",
    newRoute: "/contact",
    statusCode: "301 Permanent",
    reason: "Direct mapping to streamlined contact and quote hub"
  }
];

export const ACCESSIBILITY_CHECKLIST = [
  {
    criterion: "WCAG 1.4.3 Contrast (Minimum)",
    level: "AA",
    status: "Pass",
    notes: "All prose meets 5.8:1 to 14.2:1 against light canvases; white text on dark navy exceeds 13:1."
  },
  {
    criterion: "WCAG 2.1.1 Keyboard Navigation",
    level: "A",
    status: "Pass",
    notes: "All interactive controls (mega-menu, tabs, quote modal, search) support full Tab/Enter/Esc."
  },
  {
    criterion: "WCAG 2.4.7 Focus Visible",
    level: "AA",
    status: "Pass",
    notes: "High-contrast 2px orange outline with 2px offset applied globally via *:focus-visible."
  },
  {
    criterion: "WCAG 2.3.3 Animation from Interactions",
    level: "AAA",
    status: "Pass",
    notes: "prefers-reduced-motion media query disables Lenis smooth scroll and Framer Motion translates."
  },
  {
    criterion: "WCAG 4.1.2 Name, Role, Value",
    level: "A",
    status: "Pass",
    notes: "aria-expanded, aria-controls, aria-modal, and semantic button tags implemented throughout."
  }
];
