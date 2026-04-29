import type {
  LandingContent,
  ComparisonContent,
  ButtonConfig,
  FaqContent,
} from './types';

export interface Step {
  title: string;
  description?: string;
  itemsLabel?: string;
  items?: string[];
  footnote?: string;
}

export interface BannerSection {
  title: string;
  subtitle?: string;
  button: ButtonConfig;
}

export interface ComoFuncionaContent extends LandingContent {
  steps: {
    title: string;
    items: Step[];
  };
  comparison: ComparisonContent;
  banner: BannerSection;
  faq: FaqContent;
}

export const content: ComoFuncionaContent = {
  meta: {
    title: 'Cómo funciona | Oautos',
    description:
      'Construye el enganche de tu auto con aportaciones programadas. Sin crédito tradicional, con un proceso claro y digital.',
  },
  hero: {
    title: 'Tu auto empieza con un plan, no con una deuda',
    subtitle:
      'En Oautos ayudamos a personas que buscan un auto y que muchas veces no encajan en el crédito tradicional.',
    paragraph:
      'Nuestro modelo está diseñado para ayudarte a construir el enganche de tu vehículo mediante aportaciones programadas, con un proceso claro, digital y acompañado.',
    emphasis:
      'Lo más importante para nosotros no es tu pasado financiero. Nos importa tu compromiso, disciplina y constancia.',
    buttons: [
      {
        variant: 'principal',
        text: 'Hablar por WhatsApp',
        href: 'https://wa.me/52',
        blank: true,
      },
    ],
  },
  steps: {
    title: 'Cómo funciona paso a paso',
    items: [
      {
        title: 'Regístrate en la app',
        description:
          'Ingresa nombre, teléfono y correo. Recibirás acceso inmediato.',
        footnote:
          'Como bienvenida, puedes girar la ruleta y ganar tus primeros puntos para tu plan.',
      },
      {
        title: 'Ingresa a la aplicación',
        description: 'Recibirás por correo una contraseña temporal.',
        itemsLabel: 'Dentro de la app tendrás acceso a:',
        items: ['tu avance', 'historial', 'plan', 'pagos', 'puntos'],
      },
      {
        title: 'Crea tu plan',
        itemsLabel:
          'Dentro del menú seleccionas Autofinanciamiento y configuras:',
        items: [
          'auto objetivo',
          'meta mínima de enganche (30%)',
          'frecuencia de aportación',
          'plazo',
        ],
        footnote: 'El plazo mínimo es 6 meses.',
      },
      {
        title: 'Realiza tus aportaciones',
        itemsLabel: 'Puedes pagar por:',
        items: ['QR', 'SPEI a cuenta personalizada'],
        footnote: 'Cada movimiento queda registrado a tu nombre.',
      },
      {
        title: 'Avanza hacia tu meta',
        description:
          'Cada pago fortalece tu historial interno y tu camino hacia el crédito automotriz.',
      },
    ],
  },
  comparison: {
    title: 'No es una tanda. Es un plan.',
    subtitle: 'Aunque ambos juntan dinero, la forma de hacerlo cambia todo.',
    alternative: {
      name: 'Tanda',
      points: [
        'Dependes de otras personas',
        'Turnos o sorteos',
        'Sin contrato claro',
        'Sin seguimiento',
        'Sin estructura',
      ],
    },
    ours: {
      name: 'Oautos',
      points: [
        'Tu plan es individual',
        'No dependes de rifas',
        'Proceso formal',
        'Todo digital',
        'Meta específica',
      ],
    },
  },
  banner: {
    title:
      'Ya hay personas registradas y usuarios iniciando sus planes en esta etapa de lanzamiento.',
    subtitle:
      'Cada semana nuevos usuarios comienzan su camino con nosotros.',
    button: {
      variant: 'secondary',
      text: 'Hablar por WhatsApp',
      href: 'https://wa.me/52',
      blank: true,
    },
  },
  closingCta: {
    title: 'Tu plan empieza con una conversación',
    subtitle:
      'Te explicamos cómo funciona el proceso, resolvemos tus dudas y juntos definimos el camino hacia tu próximo auto.',
    buttons: [
      {
        variant: 'principal',
        text: 'Hablar por WhatsApp',
        href: 'https://wa.me/52',
        blank: true,
      },
    ],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Esto es como una tanda?',
        paragraphs: [
          'No. Es totalmente distinto. En una tanda dependes de un grupo y del orden de entrega, hay turnos o un sorteo. No hay evaluación formal. No hay contrato estructurado hacia crédito.',
          'En Oautos tu plan es individual, digital y estructurado hacia una meta específica, con reglas claras desde el inicio. Es un proceso formal, con contrato. No dependes de otros participantes, ni de sorteos ni de turnos. No es un esquema colectivo.',
        ],
      },
      {
        question: '¿Puedo cambiar de auto?',
        paragraphs: [
          'El plan que eliges al inicio está diseñado alrededor de un objetivo específico. Si cambias de auto y el valor es mayor, el monto del enganche también cambia, y eso implica ajustar el plan completo.',
          'Por eso, nuestra recomendación es terminar el plan actual, completar el proceso de evaluación y, si decides subir de categoría, hacer el ajuste en ese momento. Puede ser cubriendo la diferencia directamente o estructurando un complemento.',
          'De esa forma mantienes tu avance y no pierdes el progreso ya construido.',
        ],
      },
      {
        question: '¿Puedo adelantar pagos?',
        paragraphs: [
          'El plan tiene un plazo mínimo obligatorio de 6 meses el cual está diseñado para fomentar disciplina financiera. Puedes adelantar aportaciones y alcanzar antes el monto del enganche. Sin embargo, aunque completes el monto antes, el proceso de perfilamiento crediticio solo puede iniciar una vez transcurrido ese periodo mínimo. El modelo evalúa tanto compromiso como constancia.',
        ],
      },
      {
        question: '¿Qué pasa al finalizar el plan?',
        paragraphs: [
          'El objetivo del plan es prepararte para que llegues en mejores condiciones a la etapa de crédito. Durante todo el proceso evaluamos tu comportamiento, constancia y capacidad de pago. Si al finalizar el plan detectamos que algo necesita fortalecerse, no es un “no definitivo”.',
        ],
        bulletsLabel: 'Podemos analizar alternativas como:',
        bullets: [
          'Ajustar el monto del vehículo',
          'Complementar el enganche',
          'Extender ligeramente el plazo',
          'Reforzar el perfil con información adicional',
        ],
      },
    ],
  },
};
