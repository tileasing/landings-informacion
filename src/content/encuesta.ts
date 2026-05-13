export interface SurveyOption {
  value: string;
  label: string;
  hasOtherInput?: boolean;
}

export interface SurveyQuestion {
  id: string;
  step: string;
  category: string;
  question: string;
  options: SurveyOption[];
}

export interface SurveyContent {
  meta: {
    title: string;
    description?: string;
  };
  intro: {
    badge?: string;
    title: string;
    subtitle: string;
  };
  questions: SurveyQuestion[];
  submitEndpoint: string;
  thankYou: {
    title: string;
    subtitle: string;
    paragraph?: string;
  };
}

export const content: SurveyContent = {
  meta: {
    title: "Oautos — Cuéntanos tu experiencia",
    description:
      "Tu opinión nos ayuda a mejorar la experiencia Oautos. Solo te tomará un par de minutos.",
  },
  intro: {
    badge: "Encuesta breve",
    title: "Cuéntanos tu experiencia",
    subtitle:
      "Tu opinión nos ayuda a entenderte mejor y a mejorar. No te tomará más de 1 minuto.",
  },
  questions: [
    {
      id: "motivacion_uso",
      step: "01",
      category: "Motivación inicial",
      question: "¿Para qué quieres tu auto?",
      options: [
        { value: "familia", label: "Para la familia" },
        { value: "trabajo", label: "Trabajo" },
        { value: "negocio", label: "Negocio" },
        { value: "otros", label: "Otros", hasOtherInput: true },
      ],
    },
    {
      id: "motivacion_tiempo",
      step: "02",
      category: "Motivación inicial",
      question: "¿En cuánto tiempo te gustaría lograrlo?",
      options: [
        { value: "pronto", label: "Lo más pronto posible" },
        {
          value: "sin_prisa",
          label: "No tengo prisa, pero ya quiero iniciar",
        },
        {
          value: "indeciso",
          label: "Aún indeciso, pero sí me gustaría tener mi auto",
        },
        {
          value: "para_familia",
          label: "Lo quiero para mis hijos / familiares",
        },
      ],
    },
    {
      id: "objecion",
      step: "03",
      category: "Objeción inicial",
      question: "¿Qué te detiene hoy?",
      options: [
        { value: "no_necesito", label: "No lo necesito ahora" },
        { value: "falta_dinero", label: "Falta de dinero en este momento" },
        { value: "acceso_complicado", label: "Acceso complicado a obtenerlo" },
        {
          value: "confianza_instituciones",
          label: "Confianza en instituciones",
        },
        { value: "dudas_opcion", label: "Dudas sobre la mejor opción" },
      ],
    },
    {
      id: "intencion",
      step: "04",
      category: "Intención",
      question: "¿Qué opciones reales tienes para obtener tu auto?",
      options: [
        { value: "financiamiento_bancario", label: "Financiamiento bancario" },
        { value: "financiamiento_agencia", label: "Financiamiento en agencia" },
        { value: "contado", label: "Pago de contado" },
        { value: "complicado", label: "Es complicado" },
        { value: "otro", label: "Otro", hasOtherInput: true },
      ],
    },
    {
      id: "decision",
      step: "05",
      category: "Decisión",
      question: "¿Qué te hace falta para decidir?",
      options: [
        { value: "seguridad_dinero", label: "Seguridad de mi dinero" },
        { value: "confianza_oautos", label: "Confianza en Oautos" },
        { value: "tiempo_recibir", label: "Mucho tiempo para recibir mi auto" },
        { value: "falta_info", label: "Falta de información" },
        { value: "otro", label: "Otro", hasOtherInput: true },
      ],
    },
    {
      id: "primer_pago",
      step: "06",
      category: "Primer pago",
      question: "¿Qué te impide hacer tu primera aportación?",
      options: [
        { value: "no_recorde_fecha", label: "No recordé mi fecha" },
        { value: "no_supe_como", label: "No supe cómo hacerlo" },
        { value: "no_tuve_dinero", label: "No tuve el dinero" },
        { value: "planes_cambiaron", label: "Mis planes cambiaron" },
        { value: "pensarlo", label: "Quiero pensarlo de nuevo" },
      ],
    },
    {
      id: "experiencia",
      step: "07",
      category: "Experiencia",
      question: "¿Qué tan fácil fue pagar?",
      options: [
        { value: "muy_facil", label: "Muy fácil, no tuve problemas" },
        {
          value: "dificil_info",
          label: "Difícil para encontrar mi información de pago",
        },
        { value: "problemas_estab", label: "Problemas en el establecimiento" },
        { value: "fallo_sistema", label: "Falló el sistema" },
        { value: "otro", label: "Otro", hasOtherInput: true },
      ],
    },
    {
      id: "recomienzo",
      step: "08",
      category: "Recomienzo",
      question: "¿Qué te hizo detenerte?",
      options: [
        { value: "desconfianza", label: "Desconfianza" },
        { value: "problemas_personales", label: "Problemas personales" },
        { value: "miedo_perder", label: "Miedo a perder el dinero" },
        {
          value: "tiempo_obtener",
          label: "Mucho tiempo para obtener el auto",
        },
        { value: "otro_auto", label: "Quiero otro auto" },
        { value: "otro", label: "Otro", hasOtherInput: true },
      ],
    },
  ],
  submitEndpoint: "https://api.oautos.mx/api/encuesta",
  thankYou: {
    title: "¡Gracias por compartir tu experiencia!",
    subtitle: "Tu respuesta se envió correctamente.",
    paragraph:
      "Tu opinión nos ayuda a mejorar Oautos. Apreciamos mucho el tiempo que nos dedicaste.",
  },
};
