import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Split large data files into separate chunks so they load on demand
        manualChunks(id) {
          if (id.includes('equationsData')) return 'data-equations';
          if (id.includes('constantsData')) return 'data-constants';
          if (id.includes('symbolsData'))   return 'data-symbols';
          if (id.includes('unitsData'))     return 'data-units';
          if (id.includes('calculatorData'))return 'data-calculator';
        }
      }
    }
  }
});
