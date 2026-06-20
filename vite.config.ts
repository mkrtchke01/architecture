import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Не «разыменовывать» симлинки/junction — нужно для запуска через ASCII-путь
  // на системах, где исходники лежат в каталоге с пробелами/кириллицей (напр. OneDrive\Рабочий стол).
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    port: 5173,
  },
})
