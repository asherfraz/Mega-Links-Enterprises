import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true, // This is important
    port: 5173,
    allowedHosts: [
      "8bb8-39-33-235-100.ngrok-free.app", // 👈 Add this ngrok domain here
    ],
  },
})
