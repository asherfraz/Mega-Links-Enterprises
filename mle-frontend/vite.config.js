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
      "quiet-bluegill-normal.ngrok-free.app", // Add this ngrok domain here
      // ngrok http --url=quiet-bluegill-normal.ngrok-free.app 5173
    ],
  },
})
