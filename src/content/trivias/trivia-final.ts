import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-final",
  name: "TRIVIA_FINAL",
  title: "La Final",
  typeLabel: "Mundial + Oautos",
  availableFrom: "2026-07-17T00:00:00-06:00",
  questions: [
    {
      id: "tfin-q1",
      category: "mundial",
      text: "¿Qué selección ha jugado más finales Mundialistas?",
      options: [
        { letter: "A", text: "Alemania" },
        { letter: "B", text: "Argentina" },
        { letter: "C", text: "Italia" },
        { letter: "D", text: "Brasil" },
      ],
      correct: "A",
    },
    {
      id: "tfin-q2",
      category: "mundial",
      text: "¿Qué jugador levantó la Copa del Mundo en 2022 como capitán?",
      options: [
        { letter: "A", text: "Kylian Mbappé" },
        { letter: "B", text: "Antoine Griezmann" },
        { letter: "C", text: "Lionel Messi" },
        { letter: "D", text: "Cristiano Ronaldo" },
      ],
      correct: "C",
    },
    {
      id: "tfin-q3",
      category: "mundial",
      text: "¿Qué selección ganó el Mundial de 2018?",
      options: [
        { letter: "A", text: "Croacia" },
        { letter: "B", text: "Brasil" },
        { letter: "C", text: "Argentina" },
        { letter: "D", text: "Francia" },
      ],
      correct: "D",
    },
    {
      id: "tfin-q4",
      category: "mundial",
      text: "¿Quién fue campeón del Mundial 1990?",
      options: [
        { letter: "A", text: "Italia" },
        { letter: "B", text: "Brasil" },
        { letter: "C", text: "Argentina" },
        { letter: "D", text: "Alemania" },
      ],
      correct: "A",
    },
    {
      id: "tfin-q5",
      category: "mundial",
      text: "¿Qué selección ganó el Mundial en Sudáfrica 2010?",
      options: [
        { letter: "A", text: "Alemania" },
        { letter: "B", text: "España" },
        { letter: "C", text: "Inglaterra" },
        { letter: "D", text: "Países Bajos" },
      ],
      correct: "B",
    },
    {
      id: "tfin-q6",
      category: "oautos",
      text: "¿Cuál es el siguiente paso recomendado si quieres avanzar con Oautos?",
      options: [
        { letter: "A", text: "Crear tu plan" },
        { letter: "B", text: "Realizar tus aportaciones" },
        { letter: "C", text: "Dar seguimiento desde la app" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "tfin-q7",
      category: "oautos",
      text: "¿Qué busca Oautos para sus usuarios?",
      options: [
        { letter: "A", text: "Ayudarlos a alcanzar su meta" },
        { letter: "B", text: "Darles herramientas para avanzar" },
        { letter: "C", text: "Mantener un acompañamiento constante" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "tfin-q8",
      category: "oautos",
      text: "¿Qué puede ayudarte a obtener puntos adicionales?",
      options: [
        { letter: "A", text: "Referidos" },
        { letter: "B", text: "Aportaciones" },
        { letter: "C", text: "Dinámicas" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
  ],
};

export default trivia;
