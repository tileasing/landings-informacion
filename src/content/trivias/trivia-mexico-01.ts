import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-mexico-01",
  name: "TRIVIA_MEXICO_01",
  title: "Leyendas de México",
  typeLabel: "México + Oautos",
  availableFrom: "2026-06-11T00:00:00-06:00",
  questions: [
    {
      id: "tm1-q1",
      category: "mexico",
      text: "¿Quiénes son los máximos goleadores de México en Mundiales (4 goles)?",
      options: [
        {
          letter: "A",
          text: 'Javier "Chicharito" Hernández y Luis Hernández',
        },
        { letter: "B", text: "Cuauhtémoc Blanco y Jared Borgetti" },
        { letter: "C", text: "Hugo Sánchez y Rafael Márquez" },
        { letter: "D", text: "Manuel Negrete y Javier Valdivia" },
      ],
      correct: "A",
    },
    {
      id: "tm1-q2",
      category: "mexico",
      text: "¿Cuáles han sido las dos mejores actuaciones de México en Mundiales (Cuartos de final)?",
      options: [
        { letter: "A", text: "1970 y 1994" },
        { letter: "B", text: "1986 y 2002" },
        { letter: "C", text: "1970 y 1986" },
        { letter: "D", text: "1998 y 2014" },
      ],
      correct: "C",
    },
    {
      id: "tm1-q3",
      category: "mexico",
      text: "¿Qué jugador mexicano disputó 5 Mundiales y es el autor de un gol histórico ante Bulgaria en 1986?",
      options: [
        { letter: "A", text: "Rafael Márquez" },
        { letter: "B", text: "Manuel Negrete" },
        { letter: "C", text: "Hugo Sánchez" },
        { letter: "D", text: "Guillermo Ochoa" },
      ],
      correct: "B",
    },
    {
      id: "tm1-q4",
      category: "oautos",
      text: "¿Qué puedes hacer desde la app de Oautos?",
      options: [
        { letter: "A", text: "Ver tus aportaciones" },
        { letter: "B", text: "Consultar tu avance" },
        { letter: "C", text: "Revisar tus beneficios y puntos" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "tm1-q5",
      category: "oautos",
      text: "¿Qué pasa si decides detener tu proceso en Oautos?",
      options: [
        {
          letter: "A",
          text: "Puedes solicitar la devolución de tu dinero conforme a contrato",
        },
        { letter: "B", text: "Pierdes automáticamente todo" },
        { letter: "C", text: "No puedes recuperar nada" },
        { letter: "D", text: "La cuenta se elimina" },
      ],
      correct: "A",
    },
  ],
};

export default trivia;
