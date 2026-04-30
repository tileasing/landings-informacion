import type { LandingContent } from './types';

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
        text: 'Crear mi plan',
        href: 'https://wa.me/52',
        blank: true,
      },
    ],
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
        text: 'Yo también quiero empezar',
        href: 'https://wa.me/52',
        blank: true,
      },
    ],
  },
};
