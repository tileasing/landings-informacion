import type { LandingContent, FaqContent } from './types';
import heroPic from '../assets/oautos_hero_pic7.webp';

export interface ReasonItem {
  icon: 'lightbulb' | 'chart';
  title: string;
  outcome: string;
  itemsLabel: string;
  items: string[];
}

export interface ReasonsSection {
  title: string;
  items: ReasonItem[];
  closing: {
    headline: string;
    body: string;
  };
}

export interface AdaptableSection {
  title: string;
  paragraphs: string[];
  note: string;
}

export interface BenefitItem {
  icon: 'coin' | 'clock' | 'users' | 'calendar' | 'star';
  text: string;
}

export interface BenefitsSection {
  badge: string;
  title: string;
  description: string;
  items: BenefitItem[];
  closing: string;
}

export interface PlanesContent extends LandingContent {
  reasons: ReasonsSection;
  adaptable: AdaptableSection;
  benefits: BenefitsSection;
  faq: FaqContent;
}

export const content: PlanesContent = {
  meta: {
    title: 'Planes | Oautos',
    description: '',
  },
  hero: {
    title: 'Tener un plan te acerca a tu meta,',
    titleHighlight: 'convierte intención en resultados',
    subtitle:
      'Muchas personas quieren un auto y muy pocas construyen una ruta clara para lograrlo.',
    paragraph:
      'La diferencia entre una idea y una meta que se cumple está en la planeación. En Oautos, tu plan no es solo una tabla de pagos: es una herramienta que te ayuda a organizarte, avanzar con orden y mantener el enfoque hasta alcanzar tu objetivo.',
    emphasis: 'Sin plan, la meta se posterga.',
    buttons: [
      {
        variant: 'principal',
        text: 'Crear mi plan ahora',
        href: '',
        blank: true,
      },
      {
        variant: 'secondary',
        text: 'Hablar con un asesor',
        href: 'https://wa.me/+52 55 2729 4076',
        blank: true,
      },
    ],
    image: {
      src: heroPic.src,
      alt: 'Planes flexibles de Oautos',
    },
  },
  reasons: {
    title: '¿Por qué necesitas un plan?',
    items: [
      {
        icon: 'lightbulb',
        title: 'Claridad total',
        outcome: 'Elimina la incertidumbre',
        itemsLabel: 'Sabes exactamente:',
        items: [
          'cuánto necesitas',
          'cuánto aportar',
          'cada cuándo',
          'cuánto llevas avanzado',
          'cuánto te falta',
        ],
      },
      {
        icon: 'chart',
        title: 'Progreso visible',
        outcome: 'Avance que motiva',
        itemsLabel: 'Dentro de la app puedes consultar:',
        items: [
          'porcentaje de meta',
          'puntos acumulados',
          'historial',
          'próximos pagos',
        ],
      },
    ],
    closing: {
      headline:
        'La mayoría de las personas no fallan por falta de intención.',
      body: 'Fallan porque no tienen una estructura que les ayude a mantenerse constantes.',
    },
  },
  adaptable: {
    title: 'Tu plan se adapta a ti',
    paragraphs: [
      'Puedes construir tu meta a tu ritmo, para que realmente puedas cumplirlo.',
      'Se ajusta a tu capacidad actual. Lo importante no es empezar grande. Lo importante es empezar.',
    ],
    note: 'Recuerda: el plazo mínimo es de 6 meses.',
  },
  benefits: {
    badge: 'Beneficios adicionales',
    title: 'Tu compromiso vale',
    description:
      'Cada vez que cumples con tu plan, obtienes beneficios adicionales.',
    items: [
      { icon: 'coin', text: 'Puntos equivalentes a dinero' },
      { icon: 'clock', text: 'Recompensas por puntualidad' },
      { icon: 'users', text: 'Beneficios por referidos' },
      { icon: 'calendar', text: 'Dinámicas especiales mensuales' },
      { icon: 'star', text: 'Bonificaciones por constancia' },
    ],
    closing:
      'Esto convierte tu esfuerzo en valor adicional para tu meta.',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Puedo cambiar el monto o el auto?',
        paragraphs: [
          'El plan que eliges al inicio está diseñado alrededor de un objetivo específico. Si cambias de auto y el valor es mayor, el monto del enganche también cambia, y eso implica ajustar el plan completo.',
          'Por eso, nuestra recomendación es terminar el plan actual, completar el proceso de evaluación y, si decides subir de categoría, hacer el ajuste en ese momento. Puede ser cubriendo la diferencia directamente o estructurando un complemento.',
          'De esa forma mantienes tu avance y no pierdes el progreso ya construido.',
        ],
      },
      {
        question: '¿Puedo adelantar aportaciones?',
        paragraphs: [
          'El plan tiene un plazo mínimo obligatorio de 6 meses, diseñado para fomentar disciplina financiera. Puedes adelantar aportaciones y alcanzar antes el monto del enganche.',
          'Sin embargo, aunque completes el monto antes, el proceso de perfilamiento crediticio solo puede iniciar una vez transcurrido ese periodo mínimo. El modelo evalúa tanto compromiso como constancia.',
        ],
      },
      {
        question: '¿Mi dinero está seguro?',
        paragraphs: [
          'Existe un proceso formal conforme a contrato. Aquí no se pierde el dinero: lo que se construye, se respeta.',
          'Si lo necesitas, puedes cancelar el plan y solicitar una devolución conforme al contrato.',
        ],
      },
    ],
  },
  closingCta: {
    title: 'El mejor momento para comenzar no es mañana, es hoy.',
    subtitle:
      'Mientras más pronto empieces, más rápido te acercas a tu meta. Tu auto no llega por casualidad: llega por decisión, constancia y un plan claro.',
    buttons: [
      {
        variant: 'principal',
        text: 'Crear mi plan hoy',
        href: '',
        blank: true,
      },
      {
        variant: 'secondary',
        text: 'Hablar por WhatsApp',
        href: 'https://wa.me/+52 55 2729 4076',
        blank: true,
      },
      {
        variant: 'tertiary',
        text: 'Conocer más sobre Oautos',
        href: 'https://oautos.com.mx/',
        blank: true,
      },
    ],
  },
};
