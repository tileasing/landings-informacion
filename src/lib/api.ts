/**
 * Configuración central de la API.
 *
 * Para agregar un nuevo servicio:
 *   1. Define su variable en .env (con prefijo PUBLIC_ si se usa en el cliente).
 *   2. Agrega una constante de base aquí.
 *   3. Agrega sus rutas en el objeto de endpoints correspondiente.
 */

// ─── Bases ────────────────────────────────────────────────────────────────────

export const API_BASE =
  import.meta.env.PUBLIC_API_BASE ?? "https://api.oautos.mx";

// ─── Endpoints por dominio ────────────────────────────────────────────────────

export const AUTH_ENDPOINTS = {
  loginUser: `${API_BASE}/api/auth/login/user`,
  magicTokenLogin: `${API_BASE}/api/auth/magic-token/login`,
  recoverPassword: `${API_BASE}/api/auth/recover-password`,
} as const;

// Agrega más grupos de endpoints aquí cuando los necesites, por ejemplo:
// export const COPA_ENDPOINTS = {
//   ranking: `${API_BASE}/api/copa/ranking`,
//   predictions: `${API_BASE}/api/copa/predictions`,
// } as const;
