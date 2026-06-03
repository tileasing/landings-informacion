// Catálogo de trivias de la Copa Oautos 2026.
//
// Para editar las preguntas o respuestas de una trivia específica, abre el
// archivo correspondiente en esta misma carpeta (ej. `trivia-03.ts`). El orden
// del array de abajo define cómo se calcula el `closesAt` de cada trivia (cada
// una cierra cuando se abre la siguiente). Aquí ya están en orden cronológico
// según `availableFrom`, pero el page también aplica un sort defensivo.

import type { CopaTriviaItem } from "../copa-oautos-2026-app";

import trivia01 from "./trivia-01";
import trivia02 from "./trivia-02";
import triviaMexico01 from "./trivia-mexico-01";
import trivia03 from "./trivia-03";
import triviaMexico02 from "./trivia-mexico-02";
import trivia04 from "./trivia-04";
import triviaMexico03 from "./trivia-mexico-03";
import triviaOctavos from "./trivia-octavos";
import triviaCuartos from "./trivia-cuartos";
import triviaSemis from "./trivia-semis";
import triviaFinal from "./trivia-final";
import cuestionarioFinal from "./cuestionario-final";

export const trivias: CopaTriviaItem[] = [
  trivia01,
  trivia02,
  triviaMexico01,
  trivia03,
  triviaMexico02,
  trivia04,
  triviaMexico03,
  triviaOctavos,
  triviaCuartos,
  triviaSemis,
  triviaFinal,
  cuestionarioFinal,
];
