import react from '@vitejs/plugin-react';
// import { createEsbuildPlugin } from "@vitejs/plugin-esbuild";
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // createEsbuildPlugin(),
    // {
    //   name: "postcss",
    //   config: () => ({
    //     plugins: [tailwindcss(), autoprefixer()],
    //   }),
    // },
  ],
});
