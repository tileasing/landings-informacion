import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-octavos",
  name: "TRIVIA_Octavos",
  title: "Octavos de Final",
  typeLabel: "Mundial + Oautos",
  availableFrom: "2026-07-02T00:00:00-06:00",
  questions: [
    {
      id: "toct-q1",
      category: "mundial",
      text: "¿Qué país ha organizado más Copas del Mundo?",
      options: [
        { letter: "A", text: "Alemania" },
        { letter: "B", text: "México" },
        { letter: "C", text: "Brasil" },
        { letter: "D", text: "Italia" },
      ],
      correct: "B",
    },
    {
      id: "toct-q2",
      category: "mundial",
      text: "¿Qué selección tiene más títulos mundiales?",
      options: [
        { letter: "A", text: "Alemania" },
        { letter: "B", text: "Argentina" },
        { letter: "C", text: "Italia" },
        { letter: "D", text: "Brasil" },
      ],
      correct: "D",
    },
    {
      id: "toct-q3",
      category: "mundial",
      text: "¿Cuál de estos jugadores ha sido campeón del mundo?",
      options: [
        { letter: "A", text: "Cristiano Ronaldo" },
        { letter: "B", text: "Neymar" },
        { letter: "C", text: "Luka Modric" },
        { letter: "D", text: "Lionel Messi" },
      ],
      correct: "D",
    },
    {
      id: "toct-q4",
      category: "oautos",
      text: "¿Qué pasa con tu dinero mientras avanzas en tu plan?",
      options: [
        {
          letter: "A",
          text: "Está protegido, registrado a tu nombre y siempre disponible",
        },
        { letter: "B", text: "Se mezcla con otros usuarios" },
        { letter: "C", text: "Se pierde si pausas" },
        { letter: "D", text: "Solo se usa al final" },
      ],
      correct: "A",
    },
    {
      id: "toct-q5",
      category: "oautos",
      text: "¿Cuál es el plazo mínimo de aportaciones en Oautos?",
      options: [
        { letter: "A", text: "3 meses" },
        { letter: "B", text: "6 meses" },
        { letter: "C", text: "12 meses" },
        { letter: "D", text: "24 meses" },
      ],
      correct: "B",
    },
  ],
};

export default trivia;
