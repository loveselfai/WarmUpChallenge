#!/bin/sh

# Runtime configuration generator for Docker
# This script creates a config file with environment variables that can be loaded by the browser

CONFIG_FILE=/usr/share/nginx/html/config.js

cat > "$CONFIG_FILE" << EOF
window.__RUNTIME_CONFIG__ = {
  VITE_GEMINI_API_KEY: '${VITE_GEMINI_API_KEY:-}',
  VITE_SUPABASE_URL: '${VITE_SUPABASE_URL:-}',
  VITE_SUPABASE_ANON_KEY: '${VITE_SUPABASE_ANON_KEY:-}',
};
EOF

# Start nginx
exec nginx -g "daemon off;"
