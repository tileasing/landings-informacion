import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-cuartos",
  name: "TRIVIA_CUARTOS",
  title: "Cuartos de Final",
  typeLabel: "Mundial + Oautos",
  availableFrom: "2026-07-08T00:00:00-06:00",
  questions: [
    {
      id: "tcua-q1",
      category: "mundial",
      text: "¿Quién es el único jugador en la historia que ha anotado un triplete (hat-trick) en una final de la Copa del Mundo?",
      options: [
        { letter: "A", text: "Geoff Hurst" },
        { letter: "B", text: "Kylian Mbappé" },
        { letter: "C", text: "Pelé" },
        { letter: "D", text: "Zinedine Zidane" },
      ],
      correct: "A",
    },
    {
      id: "tcua-q2",
      category: "mundial",
      text: "¿Quién fue el primer jugador en la historia de los Mundiales en disputar cinco torneos de la Copa del Mundo?",
      options: [
        { letter: "A", text: "Rafael Márquez" },
        { letter: "B", text: "Antonio Carbajal" },
        { letter: "C", text: "Lothar Matthäus" },
        { letter: "D", text: "Andrés Guardado" },
      ],
      correct: "B",
    },
    {
      id: "tcua-q3",
      category: "mundial",
      text: "¿Qué país africano hizo historia al convertirse en el primero de su continente en clasificar a las semifinales de una Copa del Mundo?",
      options: [
        { letter: "A", text: "Camerún (1990)" },
        { letter: "B", text: "Senegal (2002)" },
        { letter: "C", text: "Ghana (2010)" },
        { letter: "D", text: "Marruecos (2022)" },
      ],
      correct: "D",
    },
    {
      id: "tcua-q4",
      category: "oautos",
      text: "¿Los puntos Oautos pueden ayudarte a?",
      options: [
        { letter: "A", text: "Reducir costos relacionados con tu auto" },
        { letter: "B", text: "Obtener beneficios adicionales" },
        { letter: "C", text: "Acceder a promociones y dinámicas" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "tcua-q5",
      category: "oautos",
      text: "¿Cómo puedes ganar más puntos en Oautos?",
      options: [
        { letter: "A", text: "Haciendo aportaciones puntuales" },
        { letter: "B", text: "Participando en dinámicas" },
        { letter: "C", text: "Invitando amigos" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
  ],
};

export default trivia;
