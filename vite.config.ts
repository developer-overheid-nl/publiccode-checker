import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import yaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), yaml()],
  base: '/publiccode-checker/',
  build: {
    outDir: 'docs',
  },
});
