export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "notivue/nuxt",
    "nuxt-headlessui",
    "@unocss/nuxt",
    "@nuxt/eslint",
    "@formkit/auto-animate",
    "@nuxtjs/color-mode",
    "magic-regexp",
    "@vite-pwa/nuxt",
    "@artmizu/nuxt-prometheus",
  ],
  css: [
    "notivue/notification.css",
    "~/assets/css/uno.css",
    "@unocss/reset/tailwind-compat.css",
    "notivue/animations.css",
  ],
  notivue: {
    limit: 2,
  },
  devtools: { enabled: true },
});
