import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/Components'),
      Assets: path.resolve(__dirname, 'src/Assets'),
      Contexts: path.resolve(__dirname, 'src/Contexts'),
      Utilities: path.resolve(__dirname, 'src/Utilities'),
      Styles: path.resolve(__dirname, 'src/Styles'),
      Utils: path.resolve(__dirname, 'src/Components/Utils'),
      Tools: path.resolve(__dirname, 'src/Components/Tools'),
      Svgs: path.resolve(__dirname, 'src/Assets/Svgs'),
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
