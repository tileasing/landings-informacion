import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-03",
  name: "TRIVIA_03",
  title: "Eliminatorias",
  typeLabel: "Mundial + Oautos",
  availableFrom: "2026-06-14T00:00:00-06:00",
  questions: [
    {
      id: "t3-q1",
      category: "mundial",
      text: "¿Qué jugador anotó el gol de la final del Mundial 2014?",
      options: [
        { letter: "A", text: "Messi" },
        { letter: "B", text: "Götze" },
        { letter: "C", text: "Neymar" },
        { letter: "D", text: "Müller" },
      ],
      correct: "B",
    },
    {
      id: "t3-q2",
      category: "mundial",
      text: "¿Qué país será sede del Mundial 2026 junto con México?",
      options: [
        { letter: "A", text: "Brasil y Argentina" },
        { letter: "B", text: "Canadá y Estados Unidos" },
        { letter: "C", text: "España y Portugal" },
        { letter: "D", text: "Italia y Francia" },
      ],
      correct: "B",
    },
    {
      id: "t3-q3",
      category: "mundial",
      text: "¿Qué selección ganó el Mundial de 2010?",
      options: [
        { letter: "A", text: "Alemania" },
        { letter: "B", text: "Brasil" },
        { letter: "C", text: "España" },
        { letter: "D", text: "Argentina" },
      ],
      correct: "C",
    },
    {
      id: "t3-q4",
      category: "oautos",
      text: "¿Qué ocurre cuando completas correctamente tu perfil dentro de la app?",
      options: [
        { letter: "A", text: "Obtienes puntos adicionales" },
        { letter: "B", text: "Facilitas tu proceso" },
        { letter: "C", text: "Mejoras tu experiencia en Oautos" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "t3-q5",
      category: "oautos",
      text: "¿Cuál es una de las ventajas de tener acompañamiento humano en Oautos?",
      options: [
        { letter: "A", text: "Resolver dudas" },
        { letter: "B", text: "Recibir ayuda personalizada" },
        { letter: "C", text: "Sentirte acompañado durante el proceso" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
  ],
};

export default trivia;
