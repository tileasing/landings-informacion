import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-mexico-02",
  name: "TRIVIA_MEXICO_02",
  title: "México en los Mundiales",
  typeLabel: "Mundial + Oautos",
  availableFrom: "2026-06-18T00:00:00-06:00",
  questions: [
    {
      id: "tm2-q1",
      category: "mexico",
      text: "¿Qué hito logrará México en la Copa Mundial 2026?",
      options: [
        { letter: "A", text: "Ser el primer país en albergar tres Mundiales" },
        { letter: "B", text: "Clasificar por décima vez consecutiva a Octavos" },
        {
          letter: "C",
          text: "Ser la primera selección de CONCACAF en ganar el torneo",
        },
        { letter: "D", text: "Jugar todos sus partidos en el Estadio Azteca" },
      ],
      correct: "A",
    },
    {
      id: "tm2-q2",
      category: "mexico",
      text: "¿Qué selección eliminó a México en el Mundial 2014?",
      options: [
        { letter: "A", text: "Croacia" },
        { letter: "B", text: "Brasil" },
        { letter: "C", text: "Argentina" },
        { letter: "D", text: "Países Bajos" },
      ],
      correct: "D",
    },
    {
      id: "tm2-q3",
      category: "mexico",
      text: "¿En qué estadio mundialista de México se consagró Pelé en 1970 y Diego Maradona en 1986?",
      options: [
        { letter: "A", text: "Estadio Jalisco" },
        { letter: "B", text: "Estadio Cuauhtémoc" },
        { letter: "C", text: "Estadio Universitario" },
        { letter: "D", text: "Estadio Azteca" },
      ],
      correct: "D",
    },
    {
      id: "tm2-q4",
      category: "oautos",
      text: "¿Qué representa cada aportación que realizas en Oautos?",
      options: [
        { letter: "A", text: "Un avance hacia tu meta" },
        { letter: "B", text: "Mayor progreso dentro de tu plan" },
        { letter: "C", text: "Más beneficios y oportunidades" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "tm2-q5",
      category: "oautos",
      text: "¿Qué puedes hacer si necesitas ayuda durante tu proceso?",
      options: [
        { letter: "A", text: "Contactar por WhatsApp" },
        { letter: "B", text: "Solicitar llamada" },
        { letter: "C", text: "Acudir a oficinas o apoyo comercial" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
  ],
};

export default trivia;
