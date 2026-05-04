import type {
  LandingContent,
  ComparisonContent,
  FaqContent,
} from './types';

export interface AportacionesContent extends LandingContent {
  comparison: ComparisonContent;
  faq: FaqContent;
}

export const content: AportacionesContent = {
  meta: {
    title: 'Aportaciones | Oautos',
    description:
      'Tu primera aportación es el inicio real de tu meta. Desde el primer pago construyes enganche, sumas puntos y demuestras compromiso.',
  },
  hero: {
    title: 'El primer pago es el paso más importante',
    subtitle:
      'Tu primera aportación no es solo dinero. Es el inicio real de tu meta.',
    paragraph: 'Desde el primer pago comienzas a:',
    paragraphItems: [
      'construir tu enganche',
      'sumar puntos',
      'generar historial interno',
      'demostrar compromiso',
    ],
    buttons: [
      {
        variant: 'principal',
        text: 'Realizar mi aportación',
        href: 'https://wa.me/52',
        blank: true,
      },
    ],
  },
  comparison: {
    title: 'Qué ganas con cada pago',
    subtitle:
      'Tu compromiso puede traducirse en beneficios para el siguiente paso. Además, cada pago puntual fortalece tu evaluación futura.',
    alternative: {
      name: 'Sin pagar',
      points: ['Plan detenido', 'Sin puntos', 'Sin historial'],
    },
    ours: {
      name: 'Con pagar',
      points: ['Avance activo', 'Beneficios', 'Perfil fortalecido'],
    },
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question:
          '¿Cuáles son las formas en las que puedo hacer mis aportaciones al plan?',
        paragraphs: ['Una vez creado el plan, hay dos formas:'],
        bullets: [
          'SPEI directo a tu cuenta personalizada',
          'Código QR que se genera desde la app',
        ],
        closingParagraphs: [
          'Podrás gestionar tu progreso a través de la app.',
        ],
      },
      {
        question: '¿Puedo adelantar pagos?',
        paragraphs: [
          'Cuando adelantas pagos, se reflejan de inmediato. Sin embargo, el plazo que seleccionaste inicialmente no se adelanta.',
        ],
      },
      {
        question: '¿Qué pasa si me atraso?',
        paragraphs: [
          'En el autofinanciamiento, las aportaciones se realizan conforme al plan que tú mismo definiste. Si existe un atraso, puede afectar el ritmo de avance hacia tu meta, ya que evaluamos constancia y compromiso durante el proceso.',
          'Lo más importante es la comunicación. Si prevés que podrías tener dificultad para cumplir en una fecha, te recomendamos contactarnos antes del vencimiento.',
          'Siempre buscamos la mejor forma de mantener tu avance sin afectar lo que ya has construido. La clave del modelo es planeación y prevención.',
        ],
      },
    ],
  },
  closingCta: {
    title: 'Cada aportación te acerca a tu meta.',
    subtitle: 'Da el siguiente paso y mantén tu compromiso activo.',
    buttons: [
      {
        variant: 'principal',
        text: 'Realizar mi aportación',
        href: 'https://wa.me/52',
        blank: true,
      },
    ],
  },
};
