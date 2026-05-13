import type {
  BannerSection,
  ButtonConfig,
  FooterContent,
  LandingMeta,
} from './types';
import type { Step } from './como-funciona';
import heroBg from '../assets/backgroundImageHero.jpg';

export interface CopaHeroContent {
  title: string;
  subtitle: string;
  cta: ButtonConfig;
  backgroundImage?: {
    src: string;
    alt?: string;
  };
}

export type CopaRewardIcon =
  | 'trophy'
  | 'star'
  | 'shirt'
  | 'ball'
  | 'sparkles'
  | 'gift';

export interface CopaRewardItem {
  icon: CopaRewardIcon;
  label: string;
  description: string;
}

export interface CopaProgressionContent {
  title: string;
  points: string[];
}

export interface CopaRewardsContent {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: CopaRewardItem[];
  progression: CopaProgressionContent;
  image?: {
    src: string;
    alt: string;
  };
}

export type CopaBenefitIcon =
  | 'check-badge'
  | 'award'
  | 'calendar'
  | 'target'
  | 'phone'
  | 'share';

export interface CopaBenefitItem {
  icon: CopaBenefitIcon;
  label: string;
}

export interface CopaAboutContent {
  eyebrow?: string;
  title: string;
  intro: string;
  activities: string[];
  closing: string[];
  benefitsEyebrow?: string;
  benefitsTitle: string;
  benefits: CopaBenefitItem[];
}

export interface CopaHowItWorksContent {
  title: string;
  items: Step[];
}

export interface CopaTier {
  badge: string;
  audience: string;
  benefits: string[];
}

export interface CopaTiersContent {
  eyebrow?: string;
  title: string;
  tiers: CopaTier[];
  closing: string[];
  image?: {
    src: string;
    alt: string;
  };
}

export interface CopaOautos2026Content {
  meta: LandingMeta;
  hero: CopaHeroContent;
  about: CopaAboutContent;
  rewards: CopaRewardsContent;
  bannerCta: BannerSection;
  howItWorks: CopaHowItWorksContent;
  tiers: CopaTiersContent;
  footer?: FooterContent;
}

export const content: CopaOautos2026Content = {
  meta: {
    title: 'Copa Oautos 2026',
    description:
      'Participa en la Copa Oautos 2026: gana premios, puntos, jerseys, balones, experiencias y beneficios para tu plan mientras avanzas hacia tu auto.',
  },
  hero: {
    title: 'Cada aportación es un gol a tu meta',
    subtitle:
      'Solo necesitas registrarte, elegir tu equipo favorito y empezar a participar en las dinámicas Mundialistas.',
    cta: {
      variant: 'principal',
      text: 'Participar ahora',
      href: '#',
    },
    backgroundImage: {
      src: heroBg.src,
      alt: 'Copa Oautos 2026',
    },
  },
  about: {
    eyebrow: '¿Qué es?',
    title: 'Mucho más que una quiniela',
    intro:
      'La Copa Oautos 2026 es una experiencia diseñada para que puedas:',
    activities: [
      'Divertirte durante el Mundial',
      'Participar en dinámicas y trivias',
      'Ganar premios',
      'Acumular beneficios',
      'Avanzar hacia tu meta de tener auto',
    ],
    closing: [
      'Todo mientras formas parte de una comunidad que comparte la emoción del Mundial.',
      'No importa si apenas nos estás conociendo o si ya tienes un plan. Todos pueden participar.',
    ],
    benefitsEyebrow: 'Beneficios',
    benefitsTitle: 'Pensado para que todos puedan jugar',
    benefits: [
      { icon: 'check-badge', label: 'Participa gratis' },
      { icon: 'award', label: 'Gana premios y puntos' },
      { icon: 'calendar', label: 'Juega durante el Mundial' },
      { icon: 'target', label: 'Avanza hacia tu auto' },
      { icon: 'phone', label: 'Participa desde tu celular' },
      { icon: 'share', label: 'Comparte y gana más' },
    ],
  },
  rewards: {
    eyebrow: 'Recompensas',
    title: 'Gana mientras avanzas hacia tu auto',
    intro:
      'Cada movimiento dentro de Oautos te acerca a tu meta y, durante la Copa, te abre la puerta a recompensas exclusivas.',
    items: [
      {
        icon: 'trophy',
        label: 'Premios',
        description: 'Sorteos y reconocimientos durante toda la temporada.',
      },
      {
        icon: 'star',
        label: 'Puntos',
        description: 'Acumúlalos y úsalos dentro de tu plan.',
      },
      {
        icon: 'shirt',
        label: 'Jerseys',
        description: 'Camisetas oficiales para los participantes destacados.',
      },
      {
        icon: 'ball',
        label: 'Balones',
        description: 'Producto oficial para llevar el juego a casa.',
      },
      {
        icon: 'sparkles',
        label: 'Experiencias',
        description: 'Vive momentos únicos pensados para la comunidad.',
      },
      {
        icon: 'gift',
        label: 'Beneficios para tu plan',
        description: 'Recompensas que aceleran tu camino al auto.',
      },
    ],
    progression: {
      title: 'Mientras más avances, más ganas',
      points: [
        'Más oportunidades para participar.',
        'Más premios al alcance.',
        'Más beneficios desbloqueados.',
      ],
    },
    // image: { src: '...', alt: '...' }, // se agregará la imagen de la app
  },
  bannerCta: {
    title: 'Únete a la Copa y empieza a sumar',
    subtitle:
      'Regístrate hoy y comienza a participar en las dinámicas, trivias y premios del Mundial.',
    button: {
      variant: 'secondary',
      text: 'Participar ahora',
      href: '#',
    },
  },
  howItWorks: {
    title: 'Participar es muy fácil',
    items: [
      {
        title: 'Regístrate',
        description:
          'Crea tu cuenta en Oautos completamente gratis y comienza a participar en la Copa, acumular puntos y acceder a todas las dinámicas.',
      },
      {
        title: 'Elige tu equipo favorito',
        description:
          'Selecciona la selección que apoyarás durante el Mundial.',
        itemsLabel: 'Cada vez que tu equipo avance:',
        items: [
          'Ganarás puntos Copa',
          'Desbloquearás nuevas oportunidades',
          'Podrás participar en dinámicas especiales',
        ],
      },
      {
        title: 'Completa tu quiniela',
        itemsLabel: 'Antes de cada partido podrás:',
        items: [
          'Elegir ganador',
          'Predecir marcador',
          'Acumular puntos',
          'Subir posiciones en el ranking',
        ],
      },
      {
        title: 'Participa en trivias y ruletas',
        itemsLabel: 'Durante el Mundial habrá:',
        items: [
          'Trivias',
          'Ruletas en vivo',
          'Sorteos',
          'Dinámicas especiales',
          'Premios sorpresa',
        ],
      },
      {
        title: 'Avanza dentro de Oautos',
        itemsLabel: 'Mientras más avances:',
        items: [
          'Más oportunidades obtienes',
          'Mejores beneficios desbloqueas',
          'Más posibilidades de ganar premios',
        ],
      },
    ],
  },
  tiers: {
    eyebrow: 'Niveles',
    title: 'Mientras más avances, más oportunidades tienes',
    tiers: [
      {
        badge: 'Básico',
        audience: 'Usuarios registrados',
        benefits: [
          'Participar en la quiniela',
          'Participar en trivias',
          'Participar en sorteos generales',
          'Acumular puntos Copa',
        ],
      },
      {
        badge: 'Mejorado',
        audience: 'Usuarios con plan creado',
        benefits: [
          'Más oportunidades en sorteos',
          'Acceso a dinámicas especiales',
          'Bonus de puntos Copa',
          'Ruletas especiales',
        ],
      },
      {
        badge: 'Premium',
        audience: 'Usuarios con plan activo y aportación',
        benefits: [
          'Máximas oportunidades',
          'Acceso prioritario',
          'Sorteos premium',
          'Ruletas exclusivas',
          'Premios especiales',
        ],
      },
    ],
    closing: [
      'No necesitas comenzar grande.',
      'Lo importante es empezar.',
      'Cada avance dentro de Oautos puede darte más beneficios durante la Copa.',
    ],
    // image: { src: '...', alt: '...' }, // pendiente
  },
  footer: {},
};
