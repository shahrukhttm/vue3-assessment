// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  pages: true,
  modules: ['@pinia/nuxt'],
  build: {
    transpile: ['@headlessui/vue'],
  },
  app: {
    head: {
      title: 'Notes App',
    },
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

