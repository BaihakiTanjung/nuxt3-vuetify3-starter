// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
// import type { NuxtConfig } from "@nuxt/types";

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },

  css: ["~/assets/css/main.css"],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  typescript: {
    typeCheck: false,
  },
});
