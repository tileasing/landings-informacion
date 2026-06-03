import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-mexico-03",
  name: "TRIVIA_MEXICO_03",
  title: "Récords de México",
  typeLabel: "Mundial + Oautos",
  availableFrom: "2026-06-24T00:00:00-06:00",
  questions: [
    {
      id: "tm3-q1",
      category: "mexico",
      text: "¿Qué jugador mexicano ostenta el récord de haber anotado en tres mundiales distintos (2010, 2014 y 2018)?",
      options: [
        { letter: "A", text: "Hugo Sánchez" },
        { letter: "B", text: "Jared Borgetti" },
        { letter: "C", text: 'Javier "Chicharito" Hernández' },
        { letter: "D", text: "Oribe Peralta" },
      ],
      correct: "C",
    },
    {
      id: "tm3-q2",
      category: "mexico",
      text: "¿Quién es el jugador mexicano que ha disputado más partidos oficiales (19) en la historia de los Mundiales?",
      options: [
        { letter: "A", text: "Rafael Márquez" },
        { letter: "B", text: "Andrés Guardado" },
        { letter: "C", text: "Claudio Suárez" },
        { letter: "D", text: "Gerardo Torrado" },
      ],
      correct: "A",
    },
    {
      id: "tm3-q3",
      category: "mexico",
      text: "¿Quién es el único futbolista mexicano que ha logrado anotar gol en cuatro Copas del Mundo distintas?",
      options: [
        { letter: "A", text: "Cuauhtémoc Blanco" },
        { letter: "B", text: 'Javier "Chicharito" Hernández' },
        { letter: "C", text: "Rafael Márquez" },
        { letter: "D", text: "Luis Hernández" },
      ],
      correct: "A",
    },
    {
      id: "tm3-q4",
      category: "oautos",
      text: "¿Qué busca construir Oautos además de ayudar con tu meta?",
      options: [
        { letter: "A", text: "Comunidad" },
        { letter: "B", text: "Educación financiera" },
        { letter: "C", text: "Motivación constante" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "tm3-q5",
      category: "oautos",
      text: "¿Qué beneficios tiene participar activamente en Copa Oautos?",
      options: [
        { letter: "A", text: "Ganar premios" },
        { letter: "B", text: "Obtener puntos adicionales" },
        { letter: "C", text: "Mantenerte motivado" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
  ],
};

export default trivia;
