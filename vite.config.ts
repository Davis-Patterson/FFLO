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
      Admin: path.resolve(__dirname, 'src/Components/Admin'),
      Svgs: path.resolve(__dirname, 'src/Assets/Svgs'),
      FFLO: path.resolve(__dirname, 'src/Assets/FFLO'),
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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          dndkit: ['@dnd-kit/core', '@dnd-kit/modifiers', '@dnd-kit/sortable'],
          mui: ['@mui/material'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
