import type { CopaTriviaItem } from "../copa-oautos-2026-app";

const trivia: CopaTriviaItem = {
  id: "trivia-04",
  name: "TRIVIA_04",
  title: "Sorpresas Mundialistas",
  typeLabel: "Mundial + Oautos",
  availableFrom: "2026-06-22T00:00:00-06:00",
  questions: [
    {
      id: "t4-q1",
      category: "mundial",
      text: "¿Cuál fue el primer país latinoamericano en ganar un Mundial?",
      options: [
        { letter: "A", text: "México" },
        { letter: "B", text: "Uruguay" },
        { letter: "C", text: "Brasil" },
        { letter: "D", text: "Argentina" },
      ],
      correct: "B",
    },
    {
      id: "t4-q2",
      category: "mundial",
      text: "¿Qué selección ganó el Mundial de Qatar 2022?",
      options: [
        { letter: "A", text: "Francia" },
        { letter: "B", text: "Croacia" },
        { letter: "C", text: "Argentina" },
        { letter: "D", text: "Brasil" },
      ],
      correct: "C",
    },
    {
      id: "t4-q3",
      category: "mundial",
      text: "¿Cuál es una de las mayores sorpresas históricas en un Mundial?",
      options: [
        { letter: "A", text: "Arabia Saudita venciendo a Argentina en 2022" },
        { letter: "B", text: "Brasil ganando en 2002" },
        { letter: "C", text: "Francia llegando a una final" },
        { letter: "D", text: "Alemania clasificando" },
      ],
      correct: "A",
    },
    {
      id: "t4-q4",
      category: "oautos",
      text: "¿Por qué es importante construir el hábito de aportar constantemente?",
      options: [
        { letter: "A", text: "Ayuda a organizar tus metas" },
        { letter: "B", text: "Genera disciplina financiera" },
        { letter: "C", text: "Te acerca más rápido a tu objetivo" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
    {
      id: "t4-q5",
      category: "oautos",
      text: "¿Cuál es una ventaja de comenzar con pequeñas aportaciones?",
      options: [
        { letter: "A", text: "Puedes avanzar sin afectar tanto tu flujo" },
        { letter: "B", text: "Construyes constancia" },
        { letter: "C", text: "Generas avance real hacia tu meta" },
        { letter: "D", text: "Todas las anteriores" },
      ],
      correct: "D",
    },
  ],
};

export default trivia;
