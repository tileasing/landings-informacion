import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-01",
  name: "TRIVIA_01",
  title: "Mundialista Inicial",
  typeLabel: "Mundial + Oautos",
  // Habilitada desde antes para pruebas / preview anticipado.
  availableFrom: "2026-06-04T00:00:00-06:00",
  questions: [
    {
      id: "t1-q1",
      category: "mundial",
      text: "¿Qué selección ha ganado más Mundiales?",
      options: [
        { letter: "A", text: "Alemania" },
        { letter: "B", text: "Brasil" },
        { letter: "C", text: "Argentina" },
        { letter: "D", text: "Italia" },
      ],
      correct: "B",
    },
    {
      id: "t1-q2",
      category: "mundial",
      text: "¿Qué selección ganó el Mundial 2022?",
      options: [
        { letter: "A", text: "Francia" },
        { letter: "B", text: "Argentina" },
        { letter: "C", text: "España" },
        { letter: "D", text: "Croacia" },
      ],
      correct: "B",
    },
    {
      id: "t1-q3",
      category: "mundial",
      text: "¿En dónde se jugará el Mundial 2030?",
      options: [
        { letter: "A", text: "Italia, Francia y Bélgica" },
        { letter: "B", text: "México, USA y Canadá" },
        { letter: "C", text: "Uruguay, Argentina y Paraguay" },
        { letter: "D", text: "España, Portugal y Marruecos" },
      ],
      correct: "D",
    },
    {
      id: "t1-q4",
      category: "oautos",
      text: "¿Cuál es uno de los principales beneficios de Oautos?",
      options: [
        { letter: "A", text: "Puedes comenzar paso a paso" },
        { letter: "B", text: "Todo el proceso es digital" },
        {
          letter: "C",
          text: "Recibes acompañamiento durante el proceso",
        },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "t1-q5",
      category: "oautos",
      text: "¿Qué necesitas para comenzar en Oautos?",
      options: [
        { letter: "A", text: "Registrarte en la app" },
        { letter: "B", text: "Elegir tu plan" },
        { letter: "C", text: "Realizar tus aportaciones" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
  ],
};

export default trivia;
