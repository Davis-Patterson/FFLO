import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/Components'),
      assets: path.resolve(__dirname, 'src/assets'),
      contexts: path.resolve(__dirname, 'src/Contexts'),
      shared: path.resolve(__dirname, 'src/shared'),
      utilities: path.resolve(__dirname, 'src/Utilities'),
      styles: path.resolve(__dirname, 'src/Styles'),
      utils: path.resolve(__dirname, 'src/Components/Utils'),
    },
  },
  assetsInclude: [
    '**/*.png',
    '**/*.PNG',
    '**/*.avi',
    '**/*.jpg',
    '**/*.JPG',
    '**/*.jpeg',
    '**/*.JPEG',
    '**/*.webm',
    '**/*.mp3',
    '**/*.aac',
    '**/*.opus',
  ],
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
