import type {
  LandingContent,
  BannerSection,
  ComparisonContent,
  FaqContent,
} from './types';
import heroPic from '../assets/oautos_hero_pic (2).webp';

export interface TransparencyItem {
  label: string;
  icon: string;
}

export interface TransparencyCard {
  title: string;
  intro?: string;
  items: TransparencyItem[];
}

export interface CancellationCard {
  title: string;
  intro?: string;
  items: string[];
}

export interface ControlSection {
  title: string;
  subtitle?: string;
  transparency: TransparencyCard;
  cancellation: CancellationCard;
}

export interface SeguridadContent extends LandingContent {
  control: ControlSection;
  comparison: ComparisonContent;
  banner: BannerSection;
  faq: FaqContent;
}

export const content: SeguridadContent = {
  meta: {
    title: 'Seguridad | Oautos',
    description:
      'Conoce las medidas de seguridad y respaldos que protegen tu plan de ahorro automotriz.',
  },
  hero: {
    title: 'Tu dinero está seguro y siempre a tu nombre',
    subtitle:
      'Sabemos que esta es una de las preguntas más importantes. Por eso queremos ser totalmente claros.',
    paragraph: 'Cada aportación que realizas queda:',
    paragraphItems: [
      'registrada',
      'identificada',
      'visible desde la app',
      'ligada a tu plan',
    ],
    emphasis: 'Tu dinero no se pierde.',
    buttons: [
      {
        variant: 'principal',
        text: 'Hablar por WhatsApp',
        href: 'https://wa.me/+52 55 2729 4076 ',
        blank: true,
      },
    ],
    image: {
      src: heroPic.src,
      alt: 'Plan seguro y respaldado en Oautos',
    },
  },
  control: {
    title: 'Estás siempre en control',
    subtitle: 'Visibilidad total y libertad para decidir.',
    transparency: {
      title: 'Transparencia',
      intro: 'Siempre puedes consultar:',
      items: [
        { label: 'Saldo acumulado', icon: 'wallet' },
        { label: 'Historial', icon: 'clock' },
        { label: 'Pagos', icon: 'card' },
        { label: 'Puntos', icon: 'star' },
        { label: 'Fechas', icon: 'calendar' },
      ],
    },
    cancellation: {
      title: 'Si decides no continuar',
      items: [
        'Existe un proceso formal de cancelación y devolución.',
        'La solicitud se realiza desde la aplicación.',
        'Después de 90 días de haber iniciado el plan puedes solicitar cancelación.',
        'El reembolso se procesa conforme al contrato y tiempos establecidos.',
      ],
    },
  },
  comparison: {
    title: 'La diferencia es lo que puedes ver.',
    subtitle: 'Donde otros prometen, nosotros mostramos.',
    alternative: {
      name: 'Otras opciones',
      points: [
        'Sin claridad',
        'Difícil seguimiento',
        'Poca certeza',
      ],
    },
    ours: {
      name: 'Oautos',
      points: [
        'Todo visible',
        'App + asesor',
        'Proceso formal',
      ],
    },
  },
  banner: {
    title: 'Aclara cualquier duda antes de empezar.',
    subtitle: 'Te respondemos cada pregunta, sin presión.',
    button: {
      variant: 'secondary',
      text: 'Hablar por WhatsApp',
      href: 'https://wa.me/+52 55 2729 4076 ',
      blank: true,
    },
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Cuál es el proceso de cancelación / devolución?',
        paragraphs: [
          'La cancelación se solicita directamente desde la aplicación, de manera muy fácil. El cliente puede solicitar la cancelación después de 90 días de haber iniciado el plan. El reembolso se realiza en un plazo máximo de 15 días hábiles en la cuenta bancaria a nombre del usuario. Existe un cargo por gastos administrativos. Al cancelar, el cliente queda excluido del esquema de recompensas de ese plan.',
        ],
      },
      {
        question: '¿Cuál es el paso a paso para cancelar un plan?',
        paragraphs: [
          'Debes ingresar a la sección de Contratos, donde encontrarás la opción para solicitar la cancelación del plan. El sistema te pedirá indicar el motivo y subir un estado de cuenta bancario a tu nombre para poder realizar la devolución correspondiente. Una vez recibida la solicitud, revisamos la información y te enviamos una carta de cancelación para firma digital.',
          'Después de firmar la carta, se procesa la transferencia a la cuenta registrada. Al realizar el pago, se envía el comprobante y el plan queda formalmente cancelado.',
          'Todo el proceso es digital, transparente y queda documentado dentro de la aplicación.',
        ],
      },
    ],
  },
  closingCta: {
    title: 'Comienza con total certeza.',
    subtitle:
      'Revisamos contigo el proceso, los plazos y los términos antes de cualquier paso.',
    buttons: [
      {
        variant: 'principal',
        text: 'Hablar por WhatsApp',
        href: 'https://wa.me/+52 55 2729 4076 ',
        blank: true,
      },
    ],
  },
};
