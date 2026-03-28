/**
 * Runtime configuration loader
 * Loads environment variables that are injected by the Docker entrypoint
 * Falls back to import.meta.env for development
 */

export const getRuntimeConfig = () => {
  // Try to use runtime config from Docker (injected into window)
  if (typeof window !== 'undefined' && window.__RUNTIME_CONFIG__) {
    return window.__RUNTIME_CONFIG__;
  }

  // Fallback to import.meta.env for local development
  return {
    VITE_GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || '',
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || '',
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  };
};
