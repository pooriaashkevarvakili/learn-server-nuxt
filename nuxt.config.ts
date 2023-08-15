// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/tailwind.css"],
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
