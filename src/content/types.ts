export interface ButtonConfig {
  variant: 'principal' | 'secondary';
  text: string;
  href: string;
  blank?: boolean;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface HeroContent {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  paragraph?: string;
  emphasis?: string;
  buttons: ButtonConfig[];
  image?: HeroImage;
}

export interface ComparisonOption {
  name: string;
  points: string[];
}

export interface ComparisonContent {
  title: string;
  subtitle?: string;
  alternative: ComparisonOption;
  ours: ComparisonOption;
}

export interface FaqItem {
  question: string;
  paragraphs: string[];
  bulletsLabel?: string;
  bullets?: string[];
}

export interface FaqContent {
  title: string;
  subtitle?: string;
  items: FaqItem[];
}

export interface ClosingCtaContent {
  title: string;
  subtitle?: string;
  buttons: ButtonConfig[];
  image?: {
    src: string;
    alt: string;
  };
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  logo?: string;
  logoAlt?: string;
  description?: string;
  legalTitle?: string;
  legalLinks?: FooterLink[];
  contactTitle?: string;
  contactItems?: string[];
  copyright?: string;
  disclaimer?: string;
}

export interface LandingMeta {
  title: string;
  description?: string;
}

export interface LandingContent {
  meta: LandingMeta;
  hero: HeroContent;
  footer?: FooterContent;
  closingCta?: ClosingCtaContent;
}
