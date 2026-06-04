/**
 * Configuración central de la API.
 *
 * Para agregar un nuevo servicio agrega su base y sus rutas aquí.
 */

// ─── Bases ────────────────────────────────────────────────────────────────────

// export const API_BASE = "https://api-prod.oautos.mx";
export const API_BASE = "https://api.oautos.mx";

// ─── Endpoints por dominio ────────────────────────────────────────────────────

export const AUTH_ENDPOINTS = {
  loginUser: `${API_BASE}/api/auth/login/user`,
  magicTokenLogin: `${API_BASE}/api/auth/magic-token/login`,
  recoverPassword: `${API_BASE}/api/auth/recover-password`,
} as const;

export const QUINIELA_ENDPOINTS = {
  myPredictions: `${API_BASE}/api/quiniela/my-predictions`,
  bulkPredictions: `${API_BASE}/api/quiniela/predictions/bulk`,
  mvp: `${API_BASE}/api/quiniela/mvp`,
  goleador: `${API_BASE}/api/quiniela/goleador`,
  favoriteTeam: `${API_BASE}/api/quiniela/favorite-team`,
  championTeam: `${API_BASE}/api/quiniela/champion-team`,
} as const;

export const USER_ENDPOINTS = {
  basic: `${API_BASE}/api/user/basic`,
} as const;

export const COPA_OAUTOS_ENDPOINTS = {
  dashboard: `${API_BASE}/api/copa-oautos/dashboard`,
  ranking: `${API_BASE}/api/copa-oautos/ranking`,
} as const;

// Agrega más grupos de endpoints aquí cuando los necesites, por ejemplo:
// export const COPA_ENDPOINTS = {
//   ranking: `${API_BASE}/api/copa/ranking`,
//   predictions: `${API_BASE}/api/copa/predictions`,
// } as const;
