import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows access from the local network
    port: 3000, // Or any port you prefer
  },
})

// export default {
//   server: {
//     host: true, // This allows access from the local network
//     port: 3000, // Or any port you prefer
//   },
// };