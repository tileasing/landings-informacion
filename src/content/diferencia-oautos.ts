import type {
  LandingContent,
  BannerSection,
  ComparisonContent,
  FaqContent,
} from './types';

export interface Differentiator {
  icon: 'users' | 'device' | 'eye' | 'chat';
  title: string;
  description?: string;
  itemsLabel?: string;
  items?: string[];
}

export interface DifferentiatorsSection {
  title: string;
  subtitle?: string;
  items: Differentiator[];
}

export interface DiferenciaOautosContent extends LandingContent {
  differentiators: DifferentiatorsSection;
  comparison: ComparisonContent;
  banner: BannerSection;
  faq: FaqContent;
}

export const content: DiferenciaOautosContent = {
  meta: {
    title: 'La diferencia | Oautos',
    description:
      'Oautos transforma la movilidad en México con un modelo más justo e incluyente. Nos importa tu compromiso, no tu pasado.',
  },
  hero: {
    title: 'Nos importa tu compromiso, no tu pasado',
    subtitle:
      'Oautos nace como evolución de OLR Leasing para transformar la movilidad en México.',
    emphasis: 'Un modelo más justo e incluyente.',
    buttons: [
      {
        variant: 'principal',
        text: 'Hablar por WhatsApp',
        href: 'https://wa.me/52',
        blank: true,
      },
    ],
  },
  differentiators: {
    title: 'Diferenciadores clave',
    subtitle: 'Cuatro pilares que definen nuestra diferencia.',
    items: [
      {
        icon: 'users',
        title: 'Inclusión financiera real',
        description: 'El buró no es determinante.',
        itemsLabel: 'Evaluamos:',
        items: ['Compromiso', 'Puntualidad', 'Disciplina'],
      },
      {
        icon: 'device',
        title: 'Todo digital',
        itemsLabel: 'Todo sucede desde la app:',
        items: ['Plan', 'Pagos', 'Seguimiento', 'Puntos'],
      },
      {
        icon: 'eye',
        title: 'Transparencia',
        description: 'Sin procesos rígidos ni burocráticos.',
      },
      {
        icon: 'chat',
        title: 'Acompañamiento humano',
        itemsLabel: 'Puedes pedir:',
        items: ['Llamada', 'WhatsApp', 'Visita'],
      },
    ],
  },
  comparison: {
    title: 'Lo que cambia con Oautos.',
    subtitle: 'Cuatro contrastes con el modelo tradicional de financiamiento.',
    alternative: {
      name: 'Tradicional',
      points: [
        'Buró dominante',
        'Proceso lento',
        'Menos acompañamiento',
        'Poca flexibilidad',
      ],
    },
    ours: {
      name: 'Oautos',
      points: ['Comportamiento', 'Ágil', 'Cercano', 'Adaptable'],
    },
  },
  banner: {
    title: 'Una alternativa que sí te toma en cuenta.',
    subtitle: 'Cuéntanos tu situación y te mostramos cómo funciona.',
    button: {
      variant: 'secondary',
      text: 'Hablar por WhatsApp',
      href: 'https://wa.me/52',
      blank: true,
    },
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question:
          '¿Qué características diferencian a Oautos de las empresas tradicionales de financiamiento de autos?',
        paragraphs: [
          'Principalmente en su enfoque en la inclusión financiera y el uso de tecnología digital. En lugar de depender de un buró de crédito y procesos burocráticos lentos, Oautos utiliza un modelo de evaluación basado en el comportamiento del usuario, incluyendo la puntualidad y disciplina en sus aportaciones.',
          'Además, ofrece planes flexibles que permiten a los usuarios avanzar a su propio ritmo, así como recompensas por buen comportamiento. La transparencia total en el proceso y la gestión digital a través de una aplicación.',
        ],
      },
      {
        question:
          '¿Cuáles son los pasos que debo seguir para crear un plan de autofinanciamiento en Oautos?',
        paragraphs: [
          'Primero debes descargar la aplicación y registrarte. Durante el registro, te solicitaremos información básica.',
          'Como primer regalo te haremos girar una ruleta para ganar puntos para utilizarlos en tu primer plan. Estos puntos los podrás utilizar como dinero real para tu auto.',
        ],
      },
    ],
  },
  closingCta: {
    title: 'Tu compromiso es lo que cuenta.',
    subtitle: 'Conversemos y armamos un plan a tu medida.',
    buttons: [
      {
        variant: 'principal',
        text: 'Hablar por WhatsApp',
        href: 'https://wa.me/52',
        blank: true,
      },
    ],
  },
};
