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

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsSection {
  title: string;
  subtitle?: string;
  items: StatItem[];
}

export interface FeaturedStoryDataItem {
  label: string;
  value: string;
}

export interface FeaturedStorySection {
  badge: string;
  name: string;
  location: string;
  quote: string;
  paragraph?: string;
  data: FeaturedStoryDataItem[];
  image?: { src?: string; alt: string };
}

export interface TimelineMilestone {
  icon: 'download' | 'coin' | 'clock' | 'check' | 'key';
  month: string;
  title: string;
  description?: string;
}

export interface TimelineSection {
  title: string;
  subtitle?: string;
  items: TimelineMilestone[];
}

export interface TestimonialesContent extends LandingContent {
  stats: StatsSection;
  testimonials: TestimonialesSection;
  featuredStory: FeaturedStorySection;
  timeline: TimelineSection;
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
  stats: {
    title: 'Confianza que se mide',
    subtitle:
      'Detrás de cada historia hay miles de personas avanzando con un mismo modelo.',
    items: [
      { value: '+8,500', label: 'Clientes activos' },
      { value: '94%', label: 'Completan su plan' },
      { value: '4.8 ★', label: 'En App Store y Google Play' },
      { value: '+$250M', label: 'MXN gestionados con respaldo' },
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
  featuredStory: {
    badge: 'Historia destacada',
    name: 'Mariana G.',
    location: '34 años · Guadalajara, Jalisco',
    quote:
      'Llevaba años pensándolo. Con Oautos por fin organicé mis finanzas y en 14 meses tenía mi enganche listo. Lo que más me sorprendió fue la transparencia: sabía a cada paso dónde estaba parada.',
    paragraph:
      'Mariana empezó con aportaciones pequeñas y fue ajustando su plan conforme avanzaba. Su constancia se tradujo en puntos, beneficios y un perfil sólido para entrar a perfilamiento.',
    data: [
      { label: 'Meta', value: 'Sedán compacto' },
      { label: 'Plazo', value: '14 meses' },
      { label: 'Cumplimiento', value: '100%' },
      { label: 'Puntos', value: '8,400' },
    ],
    image: {
      alt: 'Mariana, cliente de Oautos',
    },
  },
  timeline: {
    title: 'Así es el recorrido típico',
    subtitle:
      'Un proceso claro, paso a paso, que miles de clientes ya han completado.',
    items: [
      {
        icon: 'download',
        month: 'Mes 1',
        title: 'Descarga la app y crea su plan',
        description: 'Registro digital y configuración de meta.',
      },
      {
        icon: 'coin',
        month: 'Mes 2',
        title: 'Realiza su primera aportación',
        description: 'Empieza a sumar puntos y a construir historial.',
      },
      {
        icon: 'clock',
        month: 'Mes 6',
        title: 'Cumple el plazo mínimo',
        description: 'Alcanza el 50% de su meta y consolida disciplina.',
      },
      {
        icon: 'check',
        month: 'Mes 12',
        title: 'Completa el enganche',
        description: 'Entra al proceso de perfilamiento crediticio.',
      },
      {
        icon: 'key',
        month: 'Mes 14',
        title: 'Recibe su auto',
        description: 'Meta cumplida y nuevo capítulo en marcha.',
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
