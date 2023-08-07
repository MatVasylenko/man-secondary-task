import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'src': '/src',
      'src/shared': '/src/shared',
      'src/widgets': '/src/widgets',
      'src/entities': '/src/entities',
      'src/pages': '/src/pages',
    },
  },
})
