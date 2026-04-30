import type {
  LandingContent,
  BannerSection,
  FaqContent,
} from './types';

export interface HabitContrast {
  label: string;
  text: string;
}

export interface HabitList {
  title: string;
  items: string[];
}

export interface HabitSection {
  title: string;
  subtitle?: string;
  myth: HabitContrast;
  reality: HabitContrast;
  keys: HabitList;
  tips: HabitList;
  emphasis: string;
}

export interface AhorroEducacionContent extends LandingContent {
  habit: HabitSection;
  banner: BannerSection;
  faq: FaqContent;
}

export const content: AhorroEducacionContent = {
  meta: {
    title: 'Ahorro y educación | Oautos',
    description:
      'Aprende a planear, ahorrar y construir el enganche de tu próximo auto.',
  },
  hero: {
    title: 'No necesitas mucho para empezar',
    subtitle:
      'Lo importante no es cuánto aportas.',

    emphasis: 'Lo importante es empezar y tener constancia.',
    buttons: [
      {
        variant: 'principal',
        text: 'Hablar por WhatsApp',
        href: 'https://wa.me/52',
        blank: true,
      },
    ],
  },
  habit: {
    title: 'La constancia gana al monto.',
    subtitle: 'Más vale un poco constante que mucho ocasional.',
    myth: {
      label: 'El mito',
      text: 'Muchas personas creen que necesitan una gran cantidad para iniciar.',
    },
    reality: {
      label: 'La realidad',
      text: 'Una aportación constante durante 6 meses puede acercarte mucho más rápido a tu objetivo que esperar “cuando tenga más”.',
    },
    keys: {
      title: 'Lo importante',
      items: [
        'Definir una meta',
        'Elegir un monto alcanzable',
        'Mantener constancia',
        'Generar hábito financiero',
      ],
    },
    tips: {
      title: 'Tips',
      items: [
        'Separa una cantidad fija al mes',
        'Prográmalo como prioridad',
        'Evita usarlo para gastos impulsivos',
      ],
    },
    emphasis:
      'Una aportación constante puede acercarte más rápido de lo que imaginas.',
  },
  banner: {
    title: 'El mejor momento para empezar es ahora.',
    subtitle: 'Te ayudamos a armar tu primer plan, paso a paso.',
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
        question: '¿Puedo adelantar aportaciones o terminar antes mi plan?',
        paragraphs: [
          'El plan tiene un plazo mínimo obligatorio de 6 meses el cual está diseñado para fomentar disciplina financiera. Puedes adelantar aportaciones y alcanzar antes el monto del enganche. Sin embargo, aunque completes el monto antes, el proceso de perfilamiento crediticio solo puede iniciar una vez transcurrido ese periodo mínimo. El modelo evalúa tanto compromiso como constancia.',
        ],
      },
      {
        question: '¿Qué modelo o años de autos puedo seleccionar o aceptan?',
        paragraphs: [
          'Para autofinanciamiento Oautos lo importante es apoyarte a llegar a tu meta, que cumplas con tus aportaciones para cubrir el mínimo de enganche y del valor del auto.',
          'El modelo y la marca tú los escoges, pero estos siempre deben de cumplir con requerimientos que tenemos:',
        ],
        bullets: [
          '30% de enganche',
          'Valor del auto mínimo de 245 mil pesos',
          '6 meses mínimo de aportaciones',
        ],
        closingParagraphs: [
          'Puede pasar que al cumplir tu meta decidas por otra marca, modelo, entre otros. Es por eso que nos interesa tu meta y que cumplas.',
        ],
      },
    ],
  },
  closingCta: {
    title: 'El primer paso es decidir empezar.',
    subtitle: 'Te acompañamos desde la primera aportación hasta tu meta.',
    buttons: [
      {
        variant: 'principal',
        text: 'Crear mi plan',
        href: 'https://wa.me/52',
        blank: true,
      },
    ],
  },
};
