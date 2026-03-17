import { defineConfig } from 'vite'

export default defineConfig({
  base: '/o-mille-et-un-Caprices/',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
