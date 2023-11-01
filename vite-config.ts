import { defineConfig } from 'vite';

export default defineConfig({
  // ... other Vite configuration options

  build: {
    // ... other build options
    rollupOptions: {
      external: ['backbone'], // Prevent Backbone from being bundled
    },
  },
});