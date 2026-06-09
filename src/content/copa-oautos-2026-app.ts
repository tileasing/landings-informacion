// Contenido de la plataforma privada Copa Oautos 2026.
// Sustituir textos finales cuando el cliente confirme la copy definitiva.

import { trivias } from "./trivias";

export interface CopaAppMeta {
  title: string;
  description: string;
}

export interface CopaAppLoginContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  forgotPassword: string;
  submit: string;
  helper: string;
  footnote: string;
  successRedirect: string;
}

export type CopaAppMenuIcon = "user" | "history" | "terms" | "logout";

export interface CopaAppMenuItem {
  label: string;
  href: string;
  icon: CopaAppMenuIcon;
  variant?: "default" | "danger";
}

export interface CopaAppUserPreview {
  name: string;
  email: string;
  phone?: string;
}

export interface CopaAppNavbarContent {
  homeHref: string;
  brandLabel: string;
  menuAriaLabel: string;
  user: CopaAppUserPreview;
  menuItems: CopaAppMenuItem[];
}

export type CopaAppCardIcon = "ball" | "trivia";

export interface CopaAppDashboardCard {
  id: "quiniela" | "trivia";
  icon: CopaAppCardIcon;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  cta: string;
  href: string;
  accent: "blue" | "green";
  bannerImage: string; // ruta relativa a src/assets/ (placeholder mientras llega arte definitivo)
  bannerAlt?: string;
}

export interface CopaAppDashboardContent {
  greetingMorning: string;
  greetingAfternoon: string;
  greetingEvening: string;
  welcomeIntro: string;
  liveClockLabel: string;
  cardsTitle: string;
  cardsSubtitle: string;
  cards: CopaAppDashboardCard[];
}

export interface CopaAppPointsBreakdown {
  totalAccumulated: number;
  quiniela: number;
  trivia: number;
  fortune_wheel: number;
  position?: number;
  totalParticipants?: number;
}

export interface CopaAppPointsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  totalLabel: string;
  rankLabel: string;
  quinielaLabel: string;
  triviaLabel: string;
  appLabel: string;
  pointsSuffix: string;
  data: CopaAppPointsBreakdown;
}

export interface CopaAppRankingEntry {
  position: number;
  name: string;
  points: number;
  isCurrentUser?: boolean;
}

export interface CopaAppRankingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  yourPositionLabel: string;
  notInTopMessage: string;
  inTopMessage: string;
  pointsSuffix: string;
  topEntries: CopaAppRankingEntry[];
  currentUser: CopaAppRankingEntry;
}

// === Quiniela ===

export type CopaQuinielaPhaseId =
  | "grupos"
  | "octavos"
  | "cuartos"
  | "semifinales"
  | "tercer-puesto"
  | "final";

export interface CopaQuinielaPhase {
  id: CopaQuinielaPhaseId;
  label: string;
  shortLabel: string;
  status: "open" | "locked";
  lockedMessage?: string;
}

export interface CopaQuinielaTeam {
  code: string; // ISO 3166-1 alpha-2 (o 'gb-eng', etc. compatible con flagcdn)
  name: string;
}

export interface CopaQuinielaMatch {
  id: string;
  phaseId: CopaQuinielaPhaseId;
  group?: string;
  kickoff: string; // ISO 8601 con offset estándar CST (ej. 2026-06-11T18:00:00-06:00)
  venue?: string;
  teamA: CopaQuinielaTeam;
  teamB: CopaQuinielaTeam;
  result?: {
    goalsA: number;
    goalsB: number;
  };
}

export interface CopaQuinielaPointsRule {
  label: string;
  description: string;
  points: number;
  scope: "match" | "tournament" | "engagement";
}

export interface CopaQuinielaTournamentPick {
  id: "mvp" | "goleador" | "favorito" | "campeon";
  label: string;
  helper: string;
  placeholder: string;
  icon: "star" | "boot" | "heart" | "trophy";
  kind?: "text" | "country"; // 'text' por defecto; 'country' renderiza un selector con banderas.
}

export interface CopaQuinielaTournamentPicks {
  eyebrow: string;
  title: string;
  subtitle: string;
  deadline: string; // ISO con offset
  deadlinePrefix: string;
  deadlinePassed: string;
  saved: string;
  picks: CopaQuinielaTournamentPick[];
}

export type CopaQuinielaMainTabId = "partidos" | "apuestas";

export interface CopaQuinielaMainTab {
  id: CopaQuinielaMainTabId;
  label: string;
  icon: "ball" | "star";
}

export interface CopaQuinielaContent {
  meta: CopaAppMeta;
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  rules: {
    title: string;
    items: string[];
  };
  mainTabs: CopaQuinielaMainTab[];
  phases: CopaQuinielaPhase[];
  matches: CopaQuinielaMatch[];
  tournamentPicks: CopaQuinielaTournamentPicks;
  pointsTable: {
    eyebrow: string;
    title: string;
    description: string;
    rules: CopaQuinielaPointsRule[];
    note: string;
    toggleShow: string;
    toggleHide: string;
  };
  labels: {
    statusOpen: string;
    statusLocked: string;
    statusFinished: string;
    cutoffPrefix: string;
    cutoffPassed: string;
    yourPrediction: string;
    actualResult: string;
    pointsEarned: string;
    pointsLost: string;
    saved: string;
    saving: string;
    saveError: string;
    noPrediction: string;
    phaseEmpty: string;
    phaseLockedTitle: string;
    phaseLockedHint: string;
    matchOpensIn: string;
    backToDashboard: string;
  };
}

// === Trivia ===

export type CopaTriviaCategory = "mundial" | "oautos" | "mexico";
export type CopaTriviaOptionLetter = "A" | "B" | "C" | "D" | "E";
export type CopaTriviaQuestionKind = "multiple-choice" | "rating" | "open-text";

export interface CopaTriviaOption {
  letter: CopaTriviaOptionLetter;
  text: string;
}

export interface CopaTriviaQuestion {
  id: string;
  category: CopaTriviaCategory;
  text: string;
  kind?: CopaTriviaQuestionKind; // 'multiple-choice' por defecto
  options?: CopaTriviaOption[]; // requerido para multiple-choice
  correct?: CopaTriviaOptionLetter; // omitido para encuestas (sin respuesta correcta)
  placeholder?: string; // texto guía para open-text
  maxRating?: number; // tope de la escala (default 5) para rating
  maxLength?: number; // límite de caracteres (default 500) para open-text
}

export interface CopaTriviaItem {
  id: string;
  name: string; // identificador interno (ej. TRIVIA_01)
  title: string; // nombre visible
  typeLabel: string; // "Mundial + Oautos", "México + Oautos", etc.
  availableFrom: string; // ISO con offset
  isSurvey?: boolean; // true = encuesta sin respuestas correctas (cuestionario final)
  questions: CopaTriviaQuestion[];
}

export interface CopaTriviaPointsRule {
  label: string;
  description: string;
  points: number;
  display: "plus" | "multiplier" | "cap";
}

export interface CopaTriviaPointsConfig {
  completion: number;
  perCorrect: number;
  allCorrectBonus: number;
  oautosDoublesTotal: boolean;
  maxPerTrivia: number;
}

export interface CopaTriviaContent {
  meta: CopaAppMeta;
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  rules: {
    title: string;
    items: string[];
  };
  trivias: CopaTriviaItem[];
  pointsTable: {
    eyebrow: string;
    title: string;
    description: string;
    rules: CopaTriviaPointsRule[];
    note: string;
  };
  pointsConfig: CopaTriviaPointsConfig;
  labels: {
    statusLocked: string;
    statusAvailable: string;
    statusClosed: string;
    statusCompleted: string;
    availableFromPrefix: string;
    closesPrefix: string;
    closedMessage: string;
    completedAtPrefix: string;
    playButton: string;
    reviewButton: string;
    pendingContent: string;
    pendingHint: string;
    questionLabel: string; // "Pregunta {n} de {total}"
    backToList: string;
    nextButton: string;
    prevButton: string;
    submitButton: string;
    finishButton: string;
    closeButton: string;
    resultsHeading: string;
    surveyResultsHeading: string;
    surveyResultsThanks: string;
    surveyRatingHint: string;
    surveyRatingSelected: string; // usa {value} y {max}
    surveyTextareaCounter: string; // usa {current} y {max}
    pointsEarnedSuffix: string;
    correctAnswerLabel: string;
    yourAnswerLabel: string;
    breakdownTitle: string;
    breakdownCompletion: string;
    breakdownPerCorrect: string;
    breakdownAllCorrect: string;
    breakdownOautos: string;
    backToDashboard: string;
    maxPointsLabel: string;
  };
}

// === Historial de puntos ===

export type CopaHistorySource = "all" | "quiniela" | "trivia" | "ruleta";

export interface CopaHistoryFilter {
  id: CopaHistorySource;
  label: string;
}

export interface CopaHistoryContent {
  meta: CopaAppMeta;
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  filters: CopaHistoryFilter[];
  summary: {
    totalLabel: string;
    breakdownLabel: string;
    quinielaLabel: string;
    triviaLabel: string;
    ruletaLabel: string;
    pointsSuffix: string;
  };
  list: {
    title: string;
    countSuffix: string;
    countSuffixSingular: string;
  };
  empty: {
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  emptyFiltered: {
    title: string;
    description: string;
  };
  labels: {
    backToDashboard: string;
    sourceQuiniela: string;
    sourceTrivia: string;
    sourceRuleta: string;
    perfectTrivia: string;
    earnedAtPrefix: string;
  };
}

// === Perfil ===

export interface CopaAppProfileContent {
  meta: CopaAppMeta;
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  info: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    notProvided: string;
    editInAppTitle: string;
    editInAppDescription: string;
  };
  labels: {
    backToDashboard: string;
  };
}

// === Recuperación de contraseña ===

export interface CopaAppRecoveryContent {
  meta: CopaAppMeta;
  request: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitButton: string;
    backToLogin: string;
    footnote: string;
    errorEmptyEmail: string;
    errorInvalidEmail: string;
  };
  sent: {
    meta: CopaAppMeta;
    eyebrow: string;
    title: string;
    subtitleWithEmail: string; // {email} placeholder
    subtitleGeneric: string;
    helperTitle: string;
    helperText: string;
    backToLoginButton: string;
    redirectMessage: string; // {seconds} placeholder
    redirectSeconds: number;
  };
}

export interface CopaAppContent {
  meta: CopaAppMeta;
  login: CopaAppLoginContent;
  navbar: CopaAppNavbarContent;
  dashboard: CopaAppDashboardContent;
  points: CopaAppPointsContent;
  ranking: CopaAppRankingContent;
  quiniela: CopaQuinielaContent;
  trivia: CopaTriviaContent;
  historial: CopaHistoryContent;
  perfil: CopaAppProfileContent;
  recuperarPassword: CopaAppRecoveryContent;
}

export const content: CopaAppContent = {
  meta: {
    title: "Copa Oautos 2026 · Acceso participantes",
    description:
      "Plataforma privada de la Copa Oautos 2026. Inicia sesión para participar en las dinámicas del mundial.",
  },
  login: {
    eyebrow: "Copa Oautos 2026",
    title: "¡Bienvenido!",
    subtitle:
      "Utiliza las mismas credenciales de la app.\nParticipa en las dinámicas, acumula puntos y compite por los premios de la Copa Oautos durante el Mundial.",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tucorreo@oautos.com",
    passwordLabel: "Contraseña",
    passwordPlaceholder: "Ingresa tu contraseña",
    forgotPassword: "¿Olvidaste tu contraseña?",
    submit: "Ingresar",
    helper: "¿Aún no tienes acceso?",
    footnote: "Solo para participantes registrados en la Copa Oautos 2026.",
    successRedirect: "/copa-oautos-2026/dashboard",
  },
  navbar: {
    homeHref: "/copa-oautos-2026/dashboard",
    brandLabel: "Copa Oautos 2026",
    menuAriaLabel: "Abrir menú de usuario",
    user: {
      name: "Participante",
      email: "participante@oautos.com",
      phone: "+52 55 1234 5678",
    },
    menuItems: [
      {
        label: "Mi perfil",
        href: "/copa-oautos-2026/perfil",
        icon: "user",
      },
      {
        label: "Historial de puntos",
        href: "/copa-oautos-2026/historial",
        icon: "history",
      },
      {
        label: "Términos y condiciones",
        href: "/copa-oautos-2026/terminos-y-condiciones",
        icon: "terms",
      },
      {
        label: "Cerrar sesión",
        href: "/copa-oautos-2026/login",
        icon: "logout",
        variant: "danger",
      },
    ],
  },
  dashboard: {
    greetingMorning: "Buenos días",
    greetingAfternoon: "Buenas tardes",
    greetingEvening: "Buenas noches",
    welcomeIntro:
      "Listo para sumar puntos en la Copa Oautos. Elige por dónde quieres empezar.",
    liveClockLabel: "Estás conectado",
    cardsTitle: "¿Cómo quieres participar hoy?",
    cardsSubtitle: "Aquí encuentras dos formas de jugar durante el mundial.",
    cards: [
      {
        id: "quiniela",
        icon: "ball",
        eyebrow: "Predicciones",
        title: "Quiniela",
        description:
          "Pronostica los marcadores y acumula puntos por cada acierto.",
        highlights: [
          "Todos los partidos desbloqueados por fase.",
          "Bonus por MVP y goleador del torneo.",
          "Marcador exacto vale +150 · ganador o empate correctos +50.",
        ],
        cta: "Ir a la quiniela",
        href: "/copa-oautos-2026/quiniela",
        accent: "blue",
        bannerImage: "bannerQuiniela.jpg",
        bannerAlt: "Estadio durante un partido del mundial",
      },
      {
        id: "trivia",
        icon: "trivia",
        eyebrow: "Conocimiento",
        title: "Trivia",
        description:
          "Responde las preguntas de cada trivia y suma puntos al instante.",
        highlights: [
          "12 trivias en fechas clave del mundial · una sola oportunidad por trivia.",
          "Hasta 500 puntos por trivia perfecta · doble de puntos si aciertas las Oautos.",
          "Bonificación extra por completar todas las trivias del calendario.",
        ],
        cta: "Jugar trivia",
        href: "/copa-oautos-2026/trivia",
        accent: "green",
        bannerImage: "bannerTrivia.jpg",
        bannerAlt: "Trivia Copa Oautos",
      },
    ],
  },
  points: {
    eyebrow: "Tu desempeño",
    title: "Mis puntos en la Copa",
    subtitle:
      "Suma puntos por cada dinámica. El total define tu posición en el ranking de la Copa Oautos.",
    totalLabel: "Total acumulado",
    rankLabel: "Lugar",
    quinielaLabel: "Quiniela",
    triviaLabel: "Trivia",
    appLabel: "Ruleta de la app",
    pointsSuffix: "pts",
    data: {
      totalAccumulated: 0,
      quiniela: 0,
      trivia: 0,
      fortune_wheel: 0,
      position: 0,
      totalParticipants: 0,
    },
  },
  ranking: {
    eyebrow: "Posición",
    title: "Ranking de la Copa",
    subtitle: "Top 5 participantes con más puntos acumulados.",
    yourPositionLabel: "Tu posición",
    notInTopMessage: "Sigue jugando para escalar posiciones.",
    inTopMessage: "¡Estás en el top 10! Mantén el ritmo.",
    pointsSuffix: "pts",
    topEntries: [
      { position: 1, name: "Carlos Hernández", points: 0 },
      { position: 2, name: "María González", points: 0 },
      { position: 3, name: "Luis Rodríguez", points: 0 },
      { position: 4, name: "Ana Martínez", points: 0 },
      { position: 5, name: "José López", points: 0 },
      { position: 6, name: "Laura Sánchez", points: 0 },
      { position: 7, name: "Pedro Ramírez", points: 0 },
      { position: 8, name: "Isabel Torres", points: 0 },
      { position: 9, name: "Diego Flores", points: 0 },
      { position: 10, name: "Sofía Cruz", points: 0 },
    ],
    currentUser: {
      position: 47,
      name: "Tú",
      points: 0,
      isCurrentUser: true,
    },
  },
  quiniela: {
    meta: {
      title: "Quiniela · Copa Oautos 2026",
      description: "Pronostica los resultados del mundial y suma puntos.",
    },
    header: {
      eyebrow: "Dinámica · Predicciones",
      title: "Quiniela del Mundial",
      subtitle:
        "Pronostica el marcador de cada partido y acumula puntos según la tabla. Las fases del mundial se irán habilitando conforme avance el torneo.",
    },
    rules: {
      title: "¿Cómo funciona?",
      items: [
        "Puedes editar tu predicción tantas veces quieras hasta 1 día antes del partido.",
        "Cuando falte menos de 24 horas, ese partido se bloqueará y ya no podrás modificarlo.",
        "Cuando termine el partido verás cuántos puntos ganaste según la tabla de puntuación.",
        "Además puedes predecir el MVP y el goleador del torneo antes de que arranque el mundial — son 300 puntos cada acierto.",
        "Tu equipo favorito te suma 25 puntos extra cada vez que gane (próximamente podrás elegirlo).",
        "Las fases siguientes (octavos, cuartos, etc.) se desbloquean cuando se conocen los equipos clasificados.",
      ],
    },
    mainTabs: [
      { id: "partidos", label: "Partidos", icon: "ball" },
      { id: "apuestas", label: "Apuestas mundialistas", icon: "star" },
    ],
    phases: [
      {
        id: "grupos",
        label: "Fase de grupos",
        shortLabel: "Grupos",
        status: "open",
      },
      {
        id: "octavos",
        label: "Octavos de final",
        shortLabel: "Octavos",
        status: "locked",
        lockedMessage:
          "Esta fase se habilitará cuando termine la fase de grupos y se conozcan los clasificados.",
      },
      {
        id: "cuartos",
        label: "Cuartos de final",
        shortLabel: "Cuartos",
        status: "locked",
        lockedMessage:
          "Disponible cuando se conozcan los ganadores de octavos.",
      },
      {
        id: "semifinales",
        label: "Semifinales",
        shortLabel: "Semis",
        status: "locked",
        lockedMessage:
          "Disponible cuando se conozcan los ganadores de cuartos.",
      },
      {
        id: "tercer-puesto",
        label: "Tercer puesto",
        shortLabel: "3er puesto",
        status: "locked",
        lockedMessage:
          "Disponible cuando se conozcan los perdedores de semifinales.",
      },
      {
        id: "final",
        label: "Final",
        shortLabel: "Final",
        status: "locked",
        lockedMessage: "Disponible cuando se conozcan los finalistas.",
      },
    ],
    // Calendario oficial FIFA — sólo cargados los grupos para los que ya tenemos
    // las imágenes confirmadas (G, H, I, J, K). El resto se irá completando.
    // Las horas están en formato local del estadio (offset UTC correspondiente).
    matches: [
      // === Grupo G ===
      {
        id: "m15-gG",
        phaseId: "grupos",
        group: "Grupo G",
        kickoff: "2026-06-15T21:00:00-06:00",
        venue: "Estadio Los Ángeles (Los Ángeles)",
        teamA: { code: "ir", name: "RI de Irán" },
        teamB: { code: "nz", name: "Nueva Zelanda" },
      },
      {
        id: "m16-gG",
        phaseId: "grupos",
        group: "Grupo G",
        kickoff: "2026-06-15T15:00:00-06:00",
        venue: "Estadio de Seattle (Seattle)",
        teamA: { code: "be", name: "Bélgica" },
        teamB: { code: "eg", name: "Egipto" },
      },
      {
        id: "m39-gG",
        phaseId: "grupos",
        group: "Grupo G",
        kickoff: "2026-06-21T15:00:00-06:00",
        venue: "Estadio Los Ángeles (Los Ángeles)",
        teamA: { code: "be", name: "Bélgica" },
        teamB: { code: "ir", name: "RI de Irán" },
      },
      {
        id: "m40-gG",
        phaseId: "grupos",
        group: "Grupo G",
        kickoff: "2026-06-21T19:00:00-06:00",
        venue: "Estadio BC Place Vancouver (Vancouver)",
        teamA: { code: "nz", name: "Nueva Zelanda" },
        teamB: { code: "eg", name: "Egipto" },
      },
      {
        id: "m63-gG",
        phaseId: "grupos",
        group: "Grupo G",
        kickoff: "2026-06-26T19:00:00-06:00",
        venue: "Estadio de Seattle (Seattle)",
        teamA: { code: "eg", name: "Egipto" },
        teamB: { code: "ir", name: "RI de Irán" },
      },
      {
        id: "m64-gG",
        phaseId: "grupos",
        group: "Grupo G",
        kickoff: "2026-06-26T19:00:00-06:00",
        venue: "Estadio BC Place Vancouver (Vancouver)",
        teamA: { code: "nz", name: "Nueva Zelanda" },
        teamB: { code: "be", name: "Bélgica" },
      },

      // === Grupo H ===
      {
        id: "m13-gH",
        phaseId: "grupos",
        group: "Grupo H",
        kickoff: "2026-06-15T15:00:00-06:00",
        venue: "Estadio Miami (Miami)",
        teamA: { code: "sa", name: "Arabia Saudí" },
        teamB: { code: "uy", name: "Uruguay" },
      },
      {
        id: "m14-gH",
        phaseId: "grupos",
        group: "Grupo H",
        kickoff: "2026-06-15T09:00:00-06:00",
        venue: "Estadio Atlanta (Atlanta)",
        teamA: { code: "es", name: "España" },
        teamB: { code: "cv", name: "Islas de Cabo Verde" },
      },
      {
        id: "m37-gH",
        phaseId: "grupos",
        group: "Grupo H",
        kickoff: "2026-06-21T15:00:00-06:00",
        venue: "Estadio Miami (Miami)",
        teamA: { code: "uy", name: "Uruguay" },
        teamB: { code: "cv", name: "Islas de Cabo Verde" },
      },
      {
        id: "m38-gH",
        phaseId: "grupos",
        group: "Grupo H",
        kickoff: "2026-06-21T09:00:00-06:00",
        venue: "Estadio Atlanta (Atlanta)",
        teamA: { code: "es", name: "España" },
        teamB: { code: "sa", name: "Arabia Saudí" },
      },
      {
        id: "m65-gH",
        phaseId: "grupos",
        group: "Grupo H",
        kickoff: "2026-06-26T20:00:00-06:00",
        venue: "Estadio Houston (Houston)",
        teamA: { code: "cv", name: "Islas de Cabo Verde" },
        teamB: { code: "sa", name: "Arabia Saudí" },
      },
      {
        id: "m66-gH",
        phaseId: "grupos",
        group: "Grupo H",
        kickoff: "2026-06-26T20:00:00-06:00",
        venue: "Estadio Guadalajara (Guadalajara)",
        teamA: { code: "uy", name: "Uruguay" },
        teamB: { code: "es", name: "España" },
      },

      // === Grupo I ===
      {
        id: "m17-gI",
        phaseId: "grupos",
        group: "Grupo I",
        kickoff: "2026-06-16T13:00:00-06:00",
        venue: "Estadio Nueva York/Nueva Jersey (Nueva York)",
        teamA: { code: "fr", name: "Francia" },
        teamB: { code: "sn", name: "Senegal" },
      },
      {
        id: "m18-gI",
        phaseId: "grupos",
        group: "Grupo I",
        kickoff: "2026-06-16T16:00:00-06:00",
        venue: "Estadio Boston (Boston)",
        teamA: { code: "iq", name: "Irak" },
        teamB: { code: "no", name: "Noruega" },
      },
      {
        id: "m41-gI",
        phaseId: "grupos",
        group: "Grupo I",
        kickoff: "2026-06-22T16:00:00-06:00",
        venue: "Estadio Nueva York/Nueva Jersey (Nueva York)",
        teamA: { code: "no", name: "Noruega" },
        teamB: { code: "sn", name: "Senegal" },
      },
      {
        id: "m42-gI",
        phaseId: "grupos",
        group: "Grupo I",
        kickoff: "2026-06-22T19:00:00-06:00",
        venue: "Estadio Filadelfia (Filadelfia)",
        teamA: { code: "fr", name: "Francia" },
        teamB: { code: "iq", name: "Irak" },
      },
      {
        id: "m61-gI",
        phaseId: "grupos",
        group: "Grupo I",
        kickoff: "2026-06-26T19:00:00-06:00",
        venue: "Estadio Boston (Boston)",
        teamA: { code: "no", name: "Noruega" },
        teamB: { code: "fr", name: "Francia" },
      },
      {
        id: "m62-gI",
        phaseId: "grupos",
        group: "Grupo I",
        kickoff: "2026-06-26T19:00:00-06:00",
        venue: "Estadio de Toronto (Toronto)",
        teamA: { code: "sn", name: "Senegal" },
        teamB: { code: "iq", name: "Irak" },
      },

      // === Grupo J ===
      {
        id: "m19-gJ",
        phaseId: "grupos",
        group: "Grupo J",
        kickoff: "2026-06-16T19:00:00-06:00",
        venue: "Estadio Kansas City (Kansas City)",
        teamA: { code: "ar", name: "Argentina" },
        teamB: { code: "dz", name: "Argelia" },
      },
      {
        id: "m20-gJ",
        phaseId: "grupos",
        group: "Grupo J",
        kickoff: "2026-06-17T00:00:00-06:00",
        venue:
          "Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)",
        teamA: { code: "at", name: "Austria" },
        teamB: { code: "jo", name: "Jordania" },
      },
      {
        id: "m43-gJ",
        phaseId: "grupos",
        group: "Grupo J",
        kickoff: "2026-06-22T17:00:00-06:00",
        venue: "Estadio Dallas (Dallas)",
        teamA: { code: "ar", name: "Argentina" },
        teamB: { code: "at", name: "Austria" },
      },
      {
        id: "m44-gJ",
        phaseId: "grupos",
        group: "Grupo J",
        kickoff: "2026-06-22T19:00:00-06:00",
        venue:
          "Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)",
        teamA: { code: "jo", name: "Jordania" },
        teamB: { code: "dz", name: "Argelia" },
      },
      {
        id: "m69-gJ",
        phaseId: "grupos",
        group: "Grupo J",
        kickoff: "2026-06-27T11:00:00-06:00",
        venue: "Estadio Kansas City (Kansas City)",
        teamA: { code: "dz", name: "Argelia" },
        teamB: { code: "at", name: "Austria" },
      },
      {
        id: "m70-gJ",
        phaseId: "grupos",
        group: "Grupo J",
        kickoff: "2026-06-27T11:00:00-06:00",
        venue: "Estadio Dallas (Dallas)",
        teamA: { code: "jo", name: "Jordania" },
        teamB: { code: "ar", name: "Argentina" },
      },

      // === Grupo K ===
      {
        id: "m23-gK",
        phaseId: "grupos",
        group: "Grupo K",
        kickoff: "2026-06-17T11:00:00-06:00",
        venue: "Estadio Houston (Houston)",
        teamA: { code: "pt", name: "Portugal" },
        teamB: { code: "cd", name: "RD Congo" },
      },
      {
        id: "m24-gK",
        phaseId: "grupos",
        group: "Grupo K",
        kickoff: "2026-06-17T21:00:00-06:00",
        venue: "Estadio Ciudad de México (Ciudad de México)",
        teamA: { code: "uz", name: "Uzbekistán" },
        teamB: { code: "co", name: "Colombia" },
      },
      {
        id: "m47-gK",
        phaseId: "grupos",
        group: "Grupo K",
        kickoff: "2026-06-23T17:00:00-06:00",
        venue: "Estadio Houston (Houston)",
        teamA: { code: "pt", name: "Portugal" },
        teamB: { code: "uz", name: "Uzbekistán" },
      },
      {
        id: "m48-gK",
        phaseId: "grupos",
        group: "Grupo K",
        kickoff: "2026-06-23T20:00:00-06:00",
        venue: "Estadio Guadalajara (Guadalajara)",
        teamA: { code: "co", name: "Colombia" },
        teamB: { code: "cd", name: "RD Congo" },
      },
      {
        id: "m71-gK",
        phaseId: "grupos",
        group: "Grupo K",
        kickoff: "2026-06-27T16:00:00-06:00",
        venue: "Estadio Miami (Miami)",
        teamA: { code: "co", name: "Colombia" },
        teamB: { code: "pt", name: "Portugal" },
      },
      {
        id: "m72-gK",
        phaseId: "grupos",
        group: "Grupo K",
        kickoff: "2026-06-27T16:00:00-06:00",
        venue: "Estadio Atlanta (Atlanta)",
        teamA: { code: "cd", name: "RD Congo" },
        teamB: { code: "uz", name: "Uzbekistán" },
      },

      // === Grupo B ===
      {
        id: "m3-gB",
        phaseId: "grupos",
        group: "Grupo B",
        kickoff: "2026-06-12T13:00:00-06:00",
        venue: "Estadio de Toronto (Toronto)",
        teamA: { code: "ca", name: "Canadá" },
        teamB: { code: "ba", name: "Bosnia y Herzegovina" },
      },
      {
        id: "m8-gB",
        phaseId: "grupos",
        group: "Grupo B",
        kickoff: "2026-06-13T13:00:00-06:00",
        venue:
          "Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)",
        teamA: { code: "qa", name: "Catar" },
        teamB: { code: "ch", name: "Suiza" },
      },
      {
        id: "m26-gB",
        phaseId: "grupos",
        group: "Grupo B",
        kickoff: "2026-06-18T13:00:00-06:00",
        venue: "Estadio Los Ángeles (Los Ángeles)",
        teamA: { code: "ch", name: "Suiza" },
        teamB: { code: "ba", name: "Bosnia y Herzegovina" },
      },
      {
        id: "m27-gB",
        phaseId: "grupos",
        group: "Grupo B",
        kickoff: "2026-06-18T16:00:00-06:00",
        venue: "Estadio BC Place Vancouver (Vancouver)",
        teamA: { code: "ca", name: "Canadá" },
        teamB: { code: "qa", name: "Catar" },
      },
      {
        id: "m51-gB",
        phaseId: "grupos",
        group: "Grupo B",
        kickoff: "2026-06-24T13:00:00-06:00",
        venue: "Estadio BC Place Vancouver (Vancouver)",
        teamA: { code: "ch", name: "Suiza" },
        teamB: { code: "ca", name: "Canadá" },
      },
      {
        id: "m52-gB",
        phaseId: "grupos",
        group: "Grupo B",
        kickoff: "2026-06-24T13:00:00-06:00",
        venue: "Estadio de Seattle (Seattle)",
        teamA: { code: "ba", name: "Bosnia y Herzegovina" },
        teamB: { code: "qa", name: "Catar" },
      },

      // === Grupo C ===
      {
        id: "m5-gC",
        phaseId: "grupos",
        group: "Grupo C",
        kickoff: "2026-06-13T19:00:00-06:00",
        venue: "Estadio Boston (Boston)",
        teamA: { code: "ht", name: "Haití" },
        teamB: { code: "gb-sct", name: "Escocia" },
      },
      {
        id: "m7-gC",
        phaseId: "grupos",
        group: "Grupo C",
        kickoff: "2026-06-13T16:00:00-06:00",
        venue: "Estadio Nueva York/Nueva Jersey (Nueva York)",
        teamA: { code: "br", name: "Brasil" },
        teamB: { code: "ma", name: "Marruecos" },
      },
      {
        id: "m29-gC",
        phaseId: "grupos",
        group: "Grupo C",
        kickoff: "2026-06-19T17:30:00-06:00",
        venue: "Estadio Filadelfia (Filadelfia)",
        teamA: { code: "br", name: "Brasil" },
        teamB: { code: "ht", name: "Haití" },
      },
      {
        id: "m30-gC",
        phaseId: "grupos",
        group: "Grupo C",
        kickoff: "2026-06-19T15:00:00-06:00",
        venue: "Estadio Boston (Boston)",
        teamA: { code: "gb-sct", name: "Escocia" },
        teamB: { code: "ma", name: "Marruecos" },
      },
      {
        id: "m49-gC",
        phaseId: "grupos",
        group: "Grupo C",
        kickoff: "2026-06-24T15:00:00-06:00",
        venue: "Estadio Miami (Miami)",
        teamA: { code: "gb-sct", name: "Escocia" },
        teamB: { code: "br", name: "Brasil" },
      },
      {
        id: "m50-gC",
        phaseId: "grupos",
        group: "Grupo C",
        kickoff: "2026-06-24T15:00:00-06:00",
        venue: "Estadio Atlanta (Atlanta)",
        teamA: { code: "ma", name: "Marruecos" },
        teamB: { code: "ht", name: "Haití" },
      },

      // === Grupo D ===
      {
        id: "m4-gD",
        phaseId: "grupos",
        group: "Grupo D",
        kickoff: "2026-06-12T19:00:00-06:00",
        venue: "Estadio Los Ángeles (Los Ángeles)",
        teamA: { code: "us", name: "EE. UU." },
        teamB: { code: "py", name: "Paraguay" },
      },
      {
        id: "m6-gD",
        phaseId: "grupos",
        group: "Grupo D",
        kickoff: "2026-06-14T00:00:00-06:00",
        venue: "Estadio BC Place Vancouver (Vancouver)",
        teamA: { code: "au", name: "Australia" },
        teamB: { code: "tr", name: "Turquía" },
      },
      {
        id: "m31-gD",
        phaseId: "grupos",
        group: "Grupo D",
        kickoff: "2026-06-19T23:00:00-06:00",
        venue:
          "Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)",
        teamA: { code: "tr", name: "Turquía" },
        teamB: { code: "py", name: "Paraguay" },
      },
      {
        id: "m32-gD",
        phaseId: "grupos",
        group: "Grupo D",
        kickoff: "2026-06-19T15:00:00-06:00",
        venue: "Estadio de Seattle (Seattle)",
        teamA: { code: "us", name: "EE. UU." },
        teamB: { code: "au", name: "Australia" },
      },
      {
        id: "m59-gD",
        phaseId: "grupos",
        group: "Grupo D",
        kickoff: "2026-06-25T22:00:00-06:00",
        venue: "Estadio Los Ángeles (Los Ángeles)",
        teamA: { code: "tr", name: "Turquía" },
        teamB: { code: "us", name: "EE. UU." },
      },
      {
        id: "m60-gD",
        phaseId: "grupos",
        group: "Grupo D",
        kickoff: "2026-06-25T22:00:00-06:00",
        venue:
          "Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)",
        teamA: { code: "py", name: "Paraguay" },
        teamB: { code: "au", name: "Australia" },
      },

      // === Grupo E ===
      {
        id: "m9-gE",
        phaseId: "grupos",
        group: "Grupo E",
        kickoff: "2026-06-14T16:00:00-06:00",
        venue: "Estadio Filadelfia (Filadelfia)",
        teamA: { code: "ci", name: "Costa de Marfil" },
        teamB: { code: "ec", name: "Ecuador" },
      },
      {
        id: "m10-gE",
        phaseId: "grupos",
        group: "Grupo E",
        kickoff: "2026-06-14T11:00:00-06:00",
        venue: "Estadio Houston (Houston)",
        teamA: { code: "de", name: "Alemania" },
        teamB: { code: "cw", name: "Curazao" },
      },
      {
        id: "m33-gE",
        phaseId: "grupos",
        group: "Grupo E",
        kickoff: "2026-06-20T14:00:00-06:00",
        venue: "Estadio de Toronto (Toronto)",
        teamA: { code: "de", name: "Alemania" },
        teamB: { code: "ci", name: "Costa de Marfil" },
      },
      {
        id: "m34-gE",
        phaseId: "grupos",
        group: "Grupo E",
        kickoff: "2026-06-20T18:00:00-06:00",
        venue: "Estadio Kansas City (Kansas City)",
        teamA: { code: "ec", name: "Ecuador" },
        teamB: { code: "cw", name: "Curazao" },
      },
      {
        id: "m55-gE",
        phaseId: "grupos",
        group: "Grupo E",
        kickoff: "2026-06-25T13:00:00-06:00",
        venue: "Estadio Filadelfia (Filadelfia)",
        teamA: { code: "cw", name: "Curazao" },
        teamB: { code: "ci", name: "Costa de Marfil" },
      },
      {
        id: "m56-gE",
        phaseId: "grupos",
        group: "Grupo E",
        kickoff: "2026-06-25T14:00:00-06:00",
        venue: "Estadio Nueva York/Nueva Jersey (Nueva York)",
        teamA: { code: "ec", name: "Ecuador" },
        teamB: { code: "de", name: "Alemania" },
      },

      // === Grupo F ===
      {
        id: "m11-gF",
        phaseId: "grupos",
        group: "Grupo F",
        kickoff: "2026-06-14T14:00:00-06:00",
        venue: "Estadio Dallas (Dallas)",
        teamA: { code: "nl", name: "Países Bajos" },
        teamB: { code: "jp", name: "Japón" },
      },
      {
        id: "m12-gF",
        phaseId: "grupos",
        group: "Grupo F",
        kickoff: "2026-06-14T21:00:00-06:00",
        venue: "Estadio Monterrey (Monterrey)",
        teamA: { code: "se", name: "Suecia" },
        teamB: { code: "tn", name: "Túnez" },
      },
      {
        id: "m35-gF",
        phaseId: "grupos",
        group: "Grupo F",
        kickoff: "2026-06-20T16:00:00-06:00",
        venue: "Estadio Houston (Houston)",
        teamA: { code: "nl", name: "Países Bajos" },
        teamB: { code: "se", name: "Suecia" },
      },
      {
        id: "m36-gF",
        phaseId: "grupos",
        group: "Grupo F",
        kickoff: "2026-06-20T20:00:00-06:00",
        venue: "Estadio Monterrey (Monterrey)",
        teamA: { code: "tn", name: "Túnez" },
        teamB: { code: "jp", name: "Japón" },
      },
      {
        id: "m57-gF",
        phaseId: "grupos",
        group: "Grupo F",
        kickoff: "2026-06-25T18:00:00-06:00",
        venue: "Estadio Dallas (Dallas)",
        teamA: { code: "jp", name: "Japón" },
        teamB: { code: "se", name: "Suecia" },
      },
      {
        id: "m58-gF",
        phaseId: "grupos",
        group: "Grupo F",
        kickoff: "2026-06-25T18:00:00-06:00",
        venue: "Estadio Kansas City (Kansas City)",
        teamA: { code: "tn", name: "Túnez" },
        teamB: { code: "nl", name: "Países Bajos" },
      },

      // === Grupo A ===
      {
        id: "m1-gA",
        phaseId: "grupos",
        group: "Grupo A",
        kickoff: "2026-06-11T13:00:00-06:00",
        venue: "Estadio Ciudad de México (Ciudad de México)",
        teamA: { code: "mx", name: "México" },
        teamB: { code: "za", name: "Sudáfrica" },
      },
      {
        id: "m2-gA",
        phaseId: "grupos",
        group: "Grupo A",
        kickoff: "2026-06-11T20:00:00-06:00",
        venue: "Estadio Guadalajara (Guadalajara)",
        teamA: { code: "kr", name: "República de Corea" },
        teamB: { code: "cz", name: "Chequia" },
      },
      {
        id: "m25-gA",
        phaseId: "grupos",
        group: "Grupo A",
        kickoff: "2026-06-18T17:00:00-06:00",
        venue: "Estadio Atlanta (Atlanta)",
        teamA: { code: "cz", name: "Chequia" },
        teamB: { code: "za", name: "Sudáfrica" },
      },
      {
        id: "m28-gA",
        phaseId: "grupos",
        group: "Grupo A",
        kickoff: "2026-06-18T19:00:00-06:00",
        venue: "Estadio Guadalajara (Guadalajara)",
        teamA: { code: "mx", name: "México" },
        teamB: { code: "kr", name: "República de Corea" },
      },
      {
        id: "m53-gA",
        phaseId: "grupos",
        group: "Grupo A",
        kickoff: "2026-06-24T19:00:00-06:00",
        venue: "Estadio Ciudad de México (Ciudad de México)",
        teamA: { code: "cz", name: "Chequia" },
        teamB: { code: "mx", name: "México" },
      },
      {
        id: "m54-gA",
        phaseId: "grupos",
        group: "Grupo A",
        kickoff: "2026-06-24T19:00:00-06:00",
        venue: "Estadio Monterrey (Monterrey)",
        teamA: { code: "za", name: "Sudáfrica" },
        teamB: { code: "kr", name: "República de Corea" },
      },

      // === Grupo L ===
      {
        id: "m21-gL",
        phaseId: "grupos",
        group: "Grupo L",
        kickoff: "2026-06-17T16:00:00-06:00",
        venue: "Estadio de Toronto (Toronto)",
        teamA: { code: "gh", name: "Ghana" },
        teamB: { code: "pa", name: "Panamá" },
      },
      {
        id: "m22-gL",
        phaseId: "grupos",
        group: "Grupo L",
        kickoff: "2026-06-17T14:00:00-06:00",
        venue: "Estadio Dallas (Dallas)",
        teamA: { code: "gb-eng", name: "Inglaterra" },
        teamB: { code: "hr", name: "Croacia" },
      },
      {
        id: "m45-gL",
        phaseId: "grupos",
        group: "Grupo L",
        kickoff: "2026-06-23T19:00:00-06:00",
        venue: "Estadio Boston (Boston)",
        teamA: { code: "gb-eng", name: "Inglaterra" },
        teamB: { code: "gh", name: "Ghana" },
      },
      {
        id: "m46-gL",
        phaseId: "grupos",
        group: "Grupo L",
        kickoff: "2026-06-23T16:00:00-06:00",
        venue: "Estadio de Toronto (Toronto)",
        teamA: { code: "pa", name: "Panamá" },
        teamB: { code: "hr", name: "Croacia" },
      },
      {
        id: "m67-gL",
        phaseId: "grupos",
        group: "Grupo L",
        kickoff: "2026-06-27T13:00:00-06:00",
        venue: "Estadio Nueva York/Nueva Jersey (Nueva York)",
        teamA: { code: "pa", name: "Panamá" },
        teamB: { code: "gb-eng", name: "Inglaterra" },
      },
      {
        id: "m68-gL",
        phaseId: "grupos",
        group: "Grupo L",
        kickoff: "2026-06-27T13:00:00-06:00",
        venue: "Estadio Filadelfia (Filadelfia)",
        teamA: { code: "hr", name: "Croacia" },
        teamB: { code: "gh", name: "Ghana" },
      },
    ],
    tournamentPicks: {
      eyebrow: "Predicciones del torneo",
      title: "Tus apuestas mundialistas",
      subtitle:
        "Antes de que arranque el mundial, escoge a tus favoritos. Cada acierto suma puntos al final del torneo.",
      deadline: "2026-06-11T13:00:00-06:00",
      deadlinePrefix: "Puedes modificar hasta el inicio del mundial:",
      deadlinePassed: "Predicciones cerradas: el mundial ya inició",
      saved: "Guardado",
      picks: [
        {
          id: "mvp",
          label: "Jugador MVP del torneo",
          helper: "Nombre y apellido del jugador.",
          placeholder: "Ej. Lionel Messi",
          icon: "star",
        },
        {
          id: "goleador",
          label: "Goleador del torneo",
          helper: "El máximo anotador del campeonato.",
          placeholder: "Ej. Kylian Mbappé",
          icon: "boot",
        },
        {
          id: "favorito",
          label: "Tu selección favorita",
          helper:
            "Suma 25 puntos extra cada vez que tu favorita gane un partido.",
          placeholder: "Selecciona un país",
          icon: "heart",
          kind: "country",
        },
        {
          id: "campeon",
          label: "Selección campeona del mundial",
          helper: "Tu predicción de quién levantará la copa.",
          placeholder: "Selecciona un país",
          icon: "trophy",
          kind: "country",
        },
      ],
    },
    pointsTable: {
      eyebrow: "Tabla de puntos",
      title: "Puntos Mundialistas",
      description:
        "Cada acierto suma puntos a tu cuenta general. Estos son los puntos vigentes para la Copa Oautos 2026:",
      rules: [
        {
          label: "Ganador correcto",
          description: "Aciertas únicamente quién gana el partido.",
          points: 50,
          scope: "match",
        },
        {
          label: "Empate correcto",
          description: "Predices empate y el partido termina empatado.",
          points: 50,
          scope: "match",
        },
        {
          label: "Marcador exacto",
          description:
            "Aciertas el resultado y los goles exactos de ambos equipos.",
          points: 150,
          scope: "match",
        },
        {
          label: "Equipo favorito gana",
          description:
            "Cada partido que gane tu equipo favorito te suma puntos extra.",
          points: 25,
          scope: "match",
        },
        {
          label: "MVP / goleador correcto",
          description:
            "Aciertas el jugador MVP o el goleador del torneo (300 puntos cada uno).",
          points: 300,
          scope: "tournament",
        },
        {
          label: "Participar todas las semanas",
          description:
            "Bonificación por mantener actividad cada semana del torneo.",
          points: 500,
          scope: "engagement",
        },
      ],
      note: "Los puntos de la quiniela se suman a los de la trivia y los obtenidos dentro de la app para definir tu posición en la Copa Oautos.",
      toggleShow: "Ver tabla de puntos",
      toggleHide: "Ocultar tabla de puntos",
    },
    labels: {
      statusOpen: "Abierta",
      statusLocked: "Bloqueada",
      statusFinished: "Finalizada",
      cutoffPrefix: "Puedes modificar hasta",
      cutoffPassed: "Predicción cerrada para este partido",
      yourPrediction: "Tu predicción",
      actualResult: "Resultado real",
      pointsEarned: "puntos ganados",
      pointsLost: "sin puntos",
      saved: "Predicción guardada",
      saving: "Guardando…",
      saveError: "No pudimos guardar. Intenta de nuevo.",
      noPrediction: "No registraste predicción",
      phaseEmpty: "Aún no hay partidos publicados para esta fase.",
      phaseLockedTitle: "Fase no disponible todavía",
      phaseLockedHint:
        "Mientras tanto, completa tus predicciones de la fase actual.",
      matchOpensIn: "Falta",
      backToDashboard: "Volver al panel",
    },
  },
  trivia: {
    meta: {
      title: "Trivia · Copa Oautos 2026",
      description:
        "Pon a prueba tus conocimientos del mundial y de Oautos. Cada trivia se habilita en fechas determinadas.",
    },
    header: {
      eyebrow: "Dinámica · Trivia",
      title: "Trivia Mundialista",
      subtitle:
        "Cinco preguntas por trivia, una sola oportunidad por fecha. Suma hasta 500 puntos por trivia si la dejas perfecta.",
    },
    rules: {
      title: "¿Cómo funciona?",
      items: [
        "Cada trivia tiene un número fijo de preguntas y solo puedes jugarla una vez.",
        "Las trivias se habilitan en las fechas del calendario y permanecen abiertas hasta que se desbloquee la siguiente.",
        "Una vez que envíes tus respuestas no podrás modificarlas.",
        "Los puntos se otorgan al instante al terminar la trivia.",
        "Si aciertas todas las preguntas Oautos de una trivia, tu puntaje de esa trivia se duplica.",
      ],
    },
    trivias,
    pointsTable: {
      eyebrow: "Tabla de puntos",
      title: "Puntos Trivia",
      description:
        "Cada trivia es independiente y suma puntos a tu cuenta general según la siguiente tabla:",
      rules: [
        {
          label: "Trivia completada",
          description: "Por finalizar y enviar todas las respuestas.",
          points: 50,
          display: "plus",
        },
        {
          label: "Respuesta correcta",
          description: "Por cada respuesta acertada.",
          points: 20,
          display: "plus",
        },
        {
          label: "Todas las respuestas bien",
          description:
            "Bonificación extra si aciertas todas las preguntas de la trivia.",
          points: 100,
          display: "plus",
        },
        {
          label: "Respuesta correcta Oautos",
          description:
            "Si aciertas todas las preguntas Oautos de la trivia, el puntaje total se duplica.",
          points: 2,
          display: "multiplier",
        },
        {
          label: "Total máximo por trivia",
          description: "Tope que puedes obtener en una sola trivia.",
          points: 500,
          display: "cap",
        },
      ],
      note: "Los puntos de la trivia se suman a los de la quiniela y a los obtenidos dentro de la app.",
    },
    pointsConfig: {
      completion: 50,
      perCorrect: 20,
      allCorrectBonus: 100,
      oautosDoublesTotal: true,
      maxPerTrivia: 500,
    },
    labels: {
      statusLocked: "Bloqueada",
      statusAvailable: "Disponible",
      statusClosed: "Cerrada",
      statusCompleted: "Completada",
      availableFromPrefix: "Se habilita el",
      closesPrefix: "Cierra el",
      closedMessage: "Esta trivia ya cerró y no se puede jugar.",
      completedAtPrefix: "Completada el",
      playButton: "Jugar trivia",
      reviewButton: "Ver mis respuestas",
      pendingContent: "Próximamente",
      pendingHint:
        "Las preguntas se publican unos días antes de la fecha de habilitación.",
      questionLabel: "Pregunta",
      backToList: "Volver al listado",
      nextButton: "Siguiente",
      prevButton: "Anterior",
      submitButton: "Enviar respuestas",
      finishButton: "Cerrar",
      closeButton: "Cerrar",
      resultsHeading: "Resultados de tu trivia",
      surveyResultsHeading: "¡Gracias por tu retroalimentación!",
      surveyResultsThanks:
        "Tus respuestas nos ayudan a seguir mejorando Copa Oautos.",
      surveyRatingHint: "Toca una estrella para calificar",
      surveyRatingSelected: "Tu calificación: {value} de {max}",
      surveyTextareaCounter: "{current}/{max}",
      pointsEarnedSuffix: "puntos ganados",
      correctAnswerLabel: "Respuesta correcta",
      yourAnswerLabel: "Tu respuesta",
      breakdownTitle: "Desglose de tus puntos",
      breakdownCompletion: "Trivia completada",
      breakdownPerCorrect: "Respuestas correctas",
      breakdownAllCorrect: "Todas las respuestas bien",
      breakdownOautos: "Bonificación Oautos (×2)",
      backToDashboard: "Volver al panel",
      maxPointsLabel: "Hasta 500 pts",
    },
  },
  historial: {
    meta: {
      title: "Historial de puntos · Copa Oautos 2026",
      description: "Revisa todos los puntos que has ganado en la Copa Oautos.",
    },
    header: {
      eyebrow: "Historial",
      title: "Tus puntos en la Copa",
      subtitle:
        "Aquí encuentras cada actividad completada y los puntos que sumaste. Filtra por dinámica para ver el detalle por fuente.",
    },
    filters: [
      { id: "all", label: "Todos" },
      { id: "quiniela", label: "Quiniela" },
      { id: "trivia", label: "Trivia" },
      { id: "ruleta", label: "Ruleta" },
    ],
    summary: {
      totalLabel: "Total acumulado",
      breakdownLabel: "Por dinámica",
      quinielaLabel: "Quiniela",
      triviaLabel: "Trivia",
      ruletaLabel: "Ruleta",
      pointsSuffix: "pts",
    },
    list: {
      title: "Movimientos",
      countSuffix: "movimientos",
      countSuffixSingular: "movimiento",
    },
    empty: {
      title: "Aún no tienes puntos registrados",
      description:
        "Cuando completes una trivia, quiniela o gires la ruleta, tus puntos aparecerán aquí.",
      primaryCta: {
        label: "Jugar una trivia",
        href: "/copa-oautos-2026/trivia",
      },
      secondaryCta: {
        label: "Ir a la quiniela",
        href: "/copa-oautos-2026/quiniela",
      },
    },
    emptyFiltered: {
      title: "Sin movimientos en esta categoría",
      description:
        "Todavía no has ganado puntos en esta dinámica. Cuando lo hagas, los verás aquí.",
    },
    labels: {
      backToDashboard: "Volver al panel",
      sourceQuiniela: "Quiniela",
      sourceTrivia: "Trivia",
      sourceRuleta: "Ruleta",
      perfectTrivia: "Trivia perfecta",
      earnedAtPrefix: "Ganados el",
    },
  },
  perfil: {
    meta: {
      title: "Mi perfil · Copa Oautos 2026",
      description: "Información de tu cuenta en la Copa Oautos.",
    },
    header: {
      eyebrow: "Mi cuenta",
      title: "Mi perfil",
      subtitle: "Estos son los datos asociados a tu cuenta en la Copa Oautos.",
    },
    info: {
      eyebrow: "Información personal",
      title: "Tus datos",
      subtitle: "Información traída de tu cuenta en Oautos.",
      nameLabel: "Nombre completo",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      notProvided: "Sin registrar",
      editInAppTitle: "¿Necesitas actualizar tus datos?",
      editInAppDescription:
        "La edición se hace desde la app Oautos. Allí puedes modificar tu nombre, correo, teléfono y demás datos de tu cuenta.",
    },
    labels: {
      backToDashboard: "Volver al panel",
    },
  },
  recuperarPassword: {
    meta: {
      title: "Recuperar contraseña · Copa Oautos 2026",
      description:
        "Te enviaremos un enlace a tu correo para recuperar el acceso.",
    },
    request: {
      eyebrow: "Recuperar acceso",
      title: "¿Olvidaste tu contraseña?",
      subtitle:
        "Ingresa el correo con el que te registraste en Oautos y te enviaremos un enlace para crear una nueva contraseña.",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tucorreo@oautos.com",
      submitButton: "Enviar enlace de recuperación",
      backToLogin: "Volver a iniciar sesión",
      footnote:
        "La contraseña se cambia desde la app Oautos. Este enlace abre el flujo de recuperación.",
      errorEmptyEmail: "Ingresa tu correo electrónico.",
      errorInvalidEmail: "Ingresa un correo electrónico válido.",
    },
    sent: {
      meta: {
        title: "Enlace enviado · Copa Oautos 2026",
        description: "Te enviamos un enlace para recuperar tu contraseña.",
      },
      eyebrow: "Enlace enviado",
      title: "Revisa tu correo",
      subtitleWithEmail:
        "Enviamos un enlace de recuperación a {email}. Ábrelo desde tu correo para crear una nueva contraseña.",
      subtitleGeneric:
        "Enviamos un enlace de recuperación a tu correo. Ábrelo desde tu bandeja para crear una nueva contraseña.",
      helperTitle: "¿No te llegó?",
      helperText:
        "Revisa tu carpeta de spam o correo no deseado. El enlace puede tardar uno o dos minutos en aparecer.",
      backToLoginButton: "Volver a iniciar sesión",
      redirectMessage: "Te llevaremos al login en {seconds}s…",
      redirectSeconds: 15,
    },
  },
};
