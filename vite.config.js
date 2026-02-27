import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        assignment: resolve(__dirname, 'assignment/index.html'),
        curriculum: resolve(__dirname, 'curriculum/index.html'),
      },
    },
  },
})
