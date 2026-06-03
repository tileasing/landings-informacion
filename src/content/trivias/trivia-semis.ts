import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-semis",
  name: "TRIVIA_SEMIS",
  title: "Semifinales",
  typeLabel: "Mundial + Oautos",
  availableFrom: "2026-07-14T00:00:00-06:00",
  questions: [
    {
      id: "tsem-q1",
      category: "mundial",
      text: "¿En qué año Argentina ganó su tercer título mundial en Qatar?",
      options: [
        { letter: "A", text: "2014" },
        { letter: "B", text: "2018" },
        { letter: "C", text: "2022" },
        { letter: "D", text: "2026" },
      ],
      correct: "C",
    },
    {
      id: "tsem-q2",
      category: "mundial",
      text: '¿Cuál es el momento conocido como "Maracanazo" (1950)?',
      options: [
        { letter: "A", text: "La victoria de Francia sobre Brasil" },
        { letter: "B", text: "El triunfo de Uruguay sobre Brasil en la final" },
        { letter: "C", text: "El gol de mano de Maradona" },
        { letter: "D", text: "La goleada de Alemania a Brasil" },
      ],
      correct: "B",
    },
    {
      id: "tsem-q3",
      category: "mundial",
      text: "¿Cuál fue la final del mundial 2022?",
      options: [
        { letter: "A", text: "Argentina vs Francia" },
        { letter: "B", text: "España vs Argentina" },
        { letter: "C", text: "España vs Inglaterra" },
        { letter: "D", text: "Croacia vs Francia" },
      ],
      correct: "A",
    },
    {
      id: "tsem-q4",
      category: "oautos",
      text: "¿Qué hace diferente a Oautos frente a otros sistemas tradicionales?",
      options: [
        { letter: "A", text: "Todo el proceso es digital" },
        { letter: "B", text: "Existe acompañamiento humano" },
        { letter: "C", text: "Puedes avanzar paso a paso" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "tsem-q5",
      category: "oautos",
      text: "¿Cuál es uno de los objetivos principales de Oautos?",
      options: [
        { letter: "A", text: "Ayudarte a construir una meta real" },
        { letter: "B", text: "Darte herramientas para avanzar" },
        { letter: "C", text: "Crear hábitos financieros positivos" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "tsem-q6",
      category: "oautos",
      text: "¿Qué puedes consultar desde la app?",
      options: [
        { letter: "A", text: "Avance" },
        { letter: "B", text: "Puntos" },
        { letter: "C", text: "Próximos pagos" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
  ],
};

export default trivia;
