import type {
  BannerSection,
  ButtonConfig,
  FaqContent,
  FooterContent,
  LandingMeta,
} from './types';
import type { Step } from './como-funciona';
import heroBg from '../assets/backgroundImageHero.jpg';

export interface CopaHeroContent {
  title: string;
  subtitle: string;
  cta: ButtonConfig;
  appStores?: {
    playStore?: string;
    appStore?: string;
  };
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

export interface CopaPointsRow {
  label: string;
  points: string;
}

export interface CopaPointsInfo {
  triggerLabel: string;
  modalTitle: string;
  actionsTitle: string;
  actions: CopaPointsRow[];
  teamBonusTitle: string;
  teamBonus: CopaPointsRow[];
  closing: string[];
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
  pointsInfo?: CopaPointsInfo;
}

export interface CopaPrizeRank {
  rankNumber?: number;
  position: string;
  prize: string;
}

export interface CopaPrizesContent {
  eyebrow?: string;
  title: string;
  rankings: CopaPrizeRank[];
  specialPrizesTitle: string;
  specialPrizes: string[];
  distributionTitle: string;
  distributionItems: string[];
  closing: string;
  image?: {
    src: string;
    alt: string;
  };
}

export type CopaDynamicIcon = 'lightbulb' | 'pie';
export type CopaDynamicAccent = 'primary' | 'secondary';

export interface CopaDynamicCard {
  iconKey: CopaDynamicIcon;
  eyebrow: string;
  title: string;
  description: string;
  featuresLabel: string;
  features: string[];
  bonus?: { label: string; text: string };
  timing?: { label: string; items: string[] };
  accent: CopaDynamicAccent;
}

export interface CopaDynamicsContent {
  eyebrow?: string;
  title: string;
  intro?: string;
  cards: CopaDynamicCard[];
  closing: string;
  cta: ButtonConfig;
  appStores?: {
    playStore?: string;
    appStore?: string;
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
  prizes: CopaPrizesContent;
  dynamics: CopaDynamicsContent;
  faq: FaqContent;
  finalCta: CopaFinalCtaContent;
  footer?: FooterContent;
}

export interface CopaFinalCtaContent {
  title: string;
  bullets: string[];
  cta: ButtonConfig;
  image?: {
    src: string;
    alt: string;
  };
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
    appStores: {
      playStore: 'https://play.google.com/store/apps/details?id=com.olr.olrapp&hl=es_MX',
      appStore: 'https://apps.apple.com/mx/app/oautos/id6744710634',
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
        description: 'Vive momentos únicos en la comunidad.',
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
    pointsInfo: {
      triggerLabel: 'Cómo se acumulan los puntos Copa',
      modalTitle: 'Tabla de puntos Copa',
      actionsTitle: 'Acciones',
      actions: [
        { label: 'Registro', points: '+50' },
        { label: 'Crear plan', points: '+300' },
        { label: 'Primera aportación', points: '+500' },
        { label: 'Aportación puntual', points: '+100' },
        { label: 'Referido registrado', points: '+200' },
        { label: 'Referido con plan', points: '+500' },
        { label: 'Completar trivia', points: '+50' },
        { label: 'Pregunta Oautos correcta', points: '+50' },
        { label: 'Participar en ruleta', points: '+50' },
        { label: 'Acertar ganador del partido', points: '+20' },
        { label: 'Acertar empate', points: '+30' },
        { label: 'Acertar marcador exacto', points: '+100' },
      ],
      teamBonusTitle: 'Bonus por equipo favorito',
      teamBonus: [
        { label: 'Gana partido', points: '+30' },
        { label: 'Avanza a Octavos', points: '+100' },
        { label: 'Avanza a Cuartos', points: '+150' },
        { label: 'Avanza a Semifinal', points: '+200' },
        { label: 'Llega a Final', points: '+300' },
        { label: 'Campeón Mundial', points: '+500' },
      ],
      closing: [
        'Los Puntos Copa son exclusivos de la dinámica Mundialista.',
        'Se utilizan para rankings, sorteos y oportunidades especiales.',
      ],
    },
  },
  prizes: {
    eyebrow: 'Premios',
    title: 'Participa y gana premios increíbles',
    rankings: [
      { rankNumber: 1, position: '1.er lugar', prize: '3,000 puntos Oautos' },
      { rankNumber: 2, position: '2.do lugar', prize: '2,000 puntos Oautos' },
      { rankNumber: 3, position: '3.er lugar', prize: '1,500 puntos Oautos' },
      { position: '4.° al 15.°', prize: '1,000 puntos Oautos' },
      { position: 'Los demás', prize: '500 puntos Oautos' },
    ],
    specialPrizesTitle: 'Premios especiales',
    specialPrizes: [
      'Cena para 2 personas',
      'Jerseys',
      'Balones',
      'Puntos Oautos',
      'Premios sorpresa',
    ],
    distributionTitle: 'Muchos premios serán entregados mediante:',
    distributionItems: [
      'Ruletas en vivo desde la app',
      'Dinámicas especiales',
      'Trivias',
      'Sorteos',
    ],
    closing: 'Esto significa que todos tienen oportunidades de ganar.',
    // image: { src: '...', alt: '...' }, // pendiente
  },
  dynamics: {
    eyebrow: 'Dinámicas extra',
    title: 'Más formas de jugar durante el Mundial',
    intro:
      'Además de la quiniela, tendrás trivias especiales y ruletas con premios durante todo el torneo.',
    cards: [
      {
        iconKey: 'lightbulb',
        accent: 'primary',
        eyebrow: 'Trivias',
        title: 'Demuestra cuánto sabes de fútbol',
        description:
          'Durante el Mundial lanzaremos trivias especiales en la app para que demuestres tus conocimientos.',
        featuresLabel: 'Cada trivia incluirá:',
        features: [
          'Preguntas del Mundial',
          'Retos especiales',
          'Preguntas sobre Oautos',
        ],
        bonus: {
          label: 'Bonus',
          text: 'Las preguntas sobre Oautos pueden darte puntos dobles.',
        },
      },
      {
        iconKey: 'pie',
        accent: 'secondary',
        eyebrow: 'Ruletas',
        title: 'Ruletas con premios durante el Mundial',
        description:
          'Se activarán ruletas especiales en la app para los partidos de México y otros partidos seleccionados.',
        featuresLabel: 'Podrás participar para ganar:',
        features: [
          'Premios y Oportunidades',
          'Puntos',
          'Beneficios especiales',
        ],
        timing: {
          label: 'Cuándo aparecen',
          items: [
            'Antes del partido',
            'En el medio tiempo',
            'Al final del partido',
          ],
        },
      },
    ],
    closing:
      'Mientras más avances dentro de Oautos, más oportunidades y ruletas desbloqueas en cada partido.',
    cta: {
      variant: 'principal',
      text: 'Empieza a participar',
      href: '#',
    },
    appStores: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.olr.olrapp&hl=es_MX',
      appStore: 'https://apps.apple.com/mx/app/oautos/id6744710634',
    },
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Necesito pagar para participar?',
        paragraphs: ['No. Solo necesitas registrarte.'],
      },
      {
        question: '¿Cómo gano más oportunidades?',
        paragraphs: ['Creando tu plan y realizando aportaciones.'],
      },
      {
        question: '¿Qué son los puntos Copa?',
        paragraphs: [
          'Son puntos exclusivos de la dinámica Mundialista utilizados para rankings y sorteos. Con estos puntos tendrás oportunidades de ganar premios, sorteos y la quiniela.',
        ],
      },
      {
        question: '¿Qué son los puntos Oautos?',
        paragraphs: ['Son beneficios reales aplicables dentro de tu plan Oautos.'],
      },
      {
        question: '¿Puedo participar sin plan?',
        paragraphs: ['Sí.'],
      },
      {
        question: '¿Cómo reclamo premios?',
        paragraphs: [
          'El equipo Oautos contactará a los ganadores, y dentro de la comunidad se estarán mencionando todas las dinámicas.',
        ],
      },
      {
        question: '¿Puedo participar varias veces?',
        paragraphs: ['Solo una cuenta por usuario.'],
      },
      {
        question: '¿Los premios son transferibles?',
        paragraphs: ['No.'],
      },
      {
        question: '¿Los puntos Oautos pueden cambiarse por efectivo?',
        paragraphs: ['No.'],
      },
      {
        question: '¿Dónde se publican los rankings de la quiniela?',
        paragraphs: ['Dentro de la sección oficial Copa Oautos.'],
      },
      {
        question: '¿Cómo funcionan las ruletas?',
        paragraphs: ['Se activarán durante partidos y dinámicas especiales.'],
      },
      {
        question: '¿Cómo sé cuándo hay una ruleta activa?',
        paragraphs: ['Mediante notificaciones y anuncios dentro de la app.'],
      },
    ],
  },
  finalCta: {
    title: '¿Vas a quedarte fuera?',
    bullets: [
      'Participa en la Copa Oautos.',
      'Gana premios.',
      'Acumula puntos.',
      'Diviértete durante el Mundial.',
      'Avanza hacia tu meta.',
    ],
    cta: {
      variant: 'secondary',
      text: 'Participar ahora',
      href: '#',
    },
    // image: { src: '...', alt: '...' }, // pendiente
  },
  footer: {},
};
