/**
 * Configuración central de la API.
 *
 * Para agregar un nuevo servicio agrega su base y sus rutas aquí.
 */

// ─── Bases ────────────────────────────────────────────────────────────────────

export const API_BASE = "https://api.oautos.mx";

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
