import type { LandingContent } from './types';
import heroPic from '../assets/oautos_hero_pic (5).webp';

export interface TestimonialItem {
  theme: string;
  quote: string;
}

export interface TestimonialesSection {
  title: string;
  subtitle?: string;
  items: TestimonialItem[];
}

export interface TestimonialesContent extends LandingContent {
  testimonials: TestimonialesSection;
}

export const content: TestimonialesContent = {
  meta: {
    title: 'Testimoniales | Oautos',
    description:
      'Historias reales de personas que ya están manejando el auto que querían gracias a Oautos.',
  },
  hero: {
    title: 'Ellos ya comenzaron su camino',
    subtitle: 'Historias reales de personas que decidieron avanzar.',
    buttons: [
      {
        variant: 'principal',
        text: 'Descargar en Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.olr.olrapp&hl=es_MX',
        blank: true,
      },
      {
        variant: 'secondary',
        text: 'Descargar en App Store',
        href: 'https://apps.apple.com/mx/app/oautos/id6744710634',
        blank: true,
      },
    ],
    image: {
      src: heroPic.src,
      alt: 'Personas avanzando con Oautos',
    },
  },
  testimonials: {
    title: 'Lo que dicen quienes ya empezaron.',
    subtitle: 'Tres historias, un mismo punto de partida.',
    items: [
      {
        theme: 'El primer paso',
        quote:
          'Pensé que nunca podría empezar, pero Oautos me ayudó a organizarme.',
      },
      {
        theme: 'Claridad total',
        quote: 'Lo que más me gustó fue que todo está claro y en la app.',
      },
      {
        theme: 'Avance real',
        quote: 'Comencé con poco y hoy ya veo avance.',
      },
    ],
  },
  closingCta: {
    title: 'La siguiente historia la escribes tú.',
    subtitle: 'Conversemos y demos juntos el primer paso.',
    buttons: [
      {
        variant: 'principal',
        text: 'Descargar en Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.olr.olrapp&hl=es_MX',
        blank: true,
      },
      {
        variant: 'secondary',
        text: 'Descargar en App Store',
        href: 'https://apps.apple.com/mx/app/oautos/id6744710634',
        blank: true,
      },
    ],
  },
};
