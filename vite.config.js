import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './', // Relative base for GitHub Pages and local preview
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'safari15', // iPad Safari compatibility
    chunkSizeWarningLimit: 1200,
  },
  server: {
    host: true,
    port: 3000,
  },
});
