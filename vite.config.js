import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/d-and-d-5e-reference/',
  server: {
    proxy: {
      '/api': {
        target: 'https://www.dnd5eapi.co',
        changeOrigin: true
      }
    }
  }
})
