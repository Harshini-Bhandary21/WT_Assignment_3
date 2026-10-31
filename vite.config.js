import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base "./" lets the build work on Netlify, Vercel and GitHub Pages (sub-folder URLs).
export default defineConfig({
  base: './',
  plugins: [react()],
})
