import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  base: '/viba-financial-services/',
  plugins: [react(), commonjs()],
  optimizeDeps: {
    include: ['framer-motion'],
  },
})
