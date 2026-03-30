// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url'; 
import vue from '@astrojs/vue';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
        //'@': path.resolve('./src'), // Maps '@' to your 'src' folder
      },
    },

    plugins: [tailwindcss()],
  },
});
