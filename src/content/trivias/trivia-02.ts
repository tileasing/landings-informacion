import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-02",
  name: "TRIVIA_02",
  title: "Leyendas y Campeones",
  typeLabel: "Mundial + Oautos",
  availableFrom: "2026-06-09T00:00:00-06:00",
  questions: [
    {
      id: "t2-q1",
      category: "mundial",
      text: "¿Quién es el máximo goleador en la historia de la Copa Mundial de la FIFA (16 goles)?",
      options: [
        { letter: "A", text: "Pelé (Brasil)" },
        { letter: "B", text: "Ronaldo Nazário (Brasil)" },
        { letter: "C", text: "Miroslav Klose (Alemania)" },
        { letter: "D", text: "Lionel Messi (Argentina)" },
      ],
      correct: "C",
    },
    {
      id: "t2-q2",
      category: "mundial",
      text: "¿Qué jugador anotó 13 goles en un solo mundial (Suecia 1958)?",
      options: [
        { letter: "A", text: "Just Fontaine (Francia)" },
        { letter: "B", text: "Gerd Müller (Alemania)" },
        { letter: "C", text: "Sándor Kocsis (Hungría)" },
        { letter: "D", text: "Eusebio (Portugal)" },
      ],
      correct: "A",
    },
    {
      id: "t2-q3",
      category: "mundial",
      text: "¿Qué selección ganó el primer Mundial de la historia en 1930?",
      options: [
        { letter: "A", text: "Argentina" },
        { letter: "B", text: "Brasil" },
        { letter: "C", text: "Uruguay" },
        { letter: "D", text: "Italia" },
      ],
      correct: "C",
    },
    {
      id: "t2-q4",
      category: "oautos",
      text: "¿Cómo funciona el sistema de aportaciones de Oautos?",
      options: [
        { letter: "A", text: "Vas construyendo tu meta paso a paso" },
        { letter: "B", text: "Debes pagar el auto completo desde el inicio" },
        { letter: "C", text: "Solo puedes pagar en una sola exhibición" },
        { letter: "D", text: "Debes esperar años sin seguimiento" },
      ],
      correct: "A",
    },
    {
      id: "t2-q5",
      category: "oautos",
      text: "¿Qué sucede cuando activas tu plan?",
      options: [
        { letter: "A", text: "Obtienes beneficios y puntos adicionales" },
        { letter: "B", text: "Puedes comenzar tus aportaciones" },
        { letter: "C", text: "Ya formas parte de Copa Oautos" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
  ],
};

export default trivia;
