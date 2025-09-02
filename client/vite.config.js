import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
//yeh mai tailwind css ko add krne k eliye kiya hu...vite+tailwind daalne pr aa jata hai
//tailwind css neeche bhi add kya hai
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
