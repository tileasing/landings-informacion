import type { CopaTriviaItem } from "../copa-oautos-2026-app";

// Cuestionario final de satisfacción.
// A diferencia de las demás trivias, NO hay respuestas correctas:
//   - `isSurvey: true` indica que ninguna respuesta es "incorrecta".
//   - Hay 3 tipos de pregunta: multiple-choice, rating (1-5 estrellas) y
//     open-text (campo libre).
// El backend debe servir este cuestionario sin calcular aciertos: solo el
// bono de "trivia completada" (o el monto que se defina) y guardar las
// respuestas tal cual para el reporte de satisfacción.
const trivia: CopaTriviaItem = {
  id: "cuestionario-final",
  name: "Cuestionario Final",
  title: "Cuestionario Final",
  typeLabel: "Experiencia con Oautos",
  availableFrom: "2026-07-20T00:00:00-06:00",
  isSurvey: true,
  questions: [
    {
      id: "cf-q1",
      category: "oautos",
      text: "¿Qué fue lo que más te gustó de Copa Oautos?",
      options: [
        { letter: "A", text: "Quinielas" },
        { letter: "B", text: "Trivias" },
        { letter: "C", text: "Premios y ruletas" },
        { letter: "D", text: "Rankings" },
        { letter: "E", text: "Aprender más sobre Oautos" },
      ],
    },
    {
      id: "cf-q2",
      category: "oautos",
      text: "¿Qué dinámica te gustaría ver más seguido?",
      options: [
        { letter: "A", text: "Trivias" },
        { letter: "B", text: "Quinielas" },
        { letter: "C", text: "Ruletas" },
        { letter: "D", text: "Premios" },
        {
          letter: "E",
          text: "Correos con contenido variado sobre educación financiera",
        },
      ],
    },
    {
      id: "cf-q3",
      category: "oautos",
      text: "Después de participar en Copa Oautos, ¿cómo percibes a Oautos?",
      options: [
        { letter: "A", text: "Más confiable" },
        { letter: "B", text: "Más cercano" },
        { letter: "C", text: "Más interesante" },
        { letter: "D", text: "Entiendo mejor cómo funciona" },
        { letter: "E", text: "Todas las anteriores" },
      ],
    },
    {
      id: "cf-q4",
      category: "oautos",
      text: "¿Qué fue lo que más te ayudó a entender de Oautos?",
      options: [
        { letter: "A", text: "Las landings" },
        { letter: "B", text: "Las trivias" },
        { letter: "C", text: "Las notificaciones" },
        { letter: "D", text: "Los newsletters" },
        { letter: "E", text: "El chatbot" },
      ],
    },
    {
      id: "cf-q5",
      category: "oautos",
      text: "¿Actualmente en qué etapa te encuentras?",
      options: [
        { letter: "A", text: "Apenas conociendo Oautos" },
        { letter: "B", text: "Ya tengo cuenta" },
        { letter: "C", text: "Estoy pensando en sacar plan" },
        { letter: "D", text: "Ya tengo plan" },
        { letter: "E", text: "Quiero comenzar aportaciones" },
      ],
    },
    {
      id: "cf-q6",
      category: "oautos",
      text: "¿Qué te detiene hoy para avanzar más rápido hacia tu meta?",
      options: [
        { letter: "A", text: "Dinero" },
        { letter: "B", text: "Tiempo" },
        { letter: "C", text: "Dudas o confianza" },
        { letter: "D", text: "Necesito más información" },
        { letter: "E", text: "Estoy listo para comenzar" },
      ],
    },
    {
      id: "cf-q7",
      category: "oautos",
      text: "¿Te gustaría que un asesor te contacte personalmente?",
      options: [
        { letter: "A", text: "Sí por WhatsApp" },
        { letter: "B", text: "Sí por llamada" },
        { letter: "C", text: "Sí visita presencial" },
        { letter: "D", text: "No por ahora" },
      ],
    },
    {
      id: "cf-q8",
      category: "oautos",
      text: "¿Cómo calificarías tu experiencia en Copa Oautos?",
      kind: "rating",
      maxRating: 5,
    },
    {
      id: "cf-q9",
      category: "oautos",
      text: "¿Recomendarías Copa Oautos a otra persona?",
      options: [
        { letter: "A", text: "Sí" },
        { letter: "B", text: "Tal vez" },
        { letter: "C", text: "No" },
      ],
    },
    {
      id: "cf-q10",
      category: "oautos",
      text: "¿Qué te gustaría que mejoráramos?",
      kind: "open-text",
      placeholder:
        "Cuéntanos qué te gustaría que cambiáramos o agregáramos en próximas ediciones…",
      maxLength: 500,
    },
  ],
};

export default trivia;
