import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const port = parseInt(process.env.PORT || '3000', 10)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port,
    host: '0.0.0.0',
    strictPort: true,
    open: false,
  },
})
