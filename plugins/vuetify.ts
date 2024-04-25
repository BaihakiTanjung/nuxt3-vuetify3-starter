// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    primary: "#2196f3",
    secondary: "#03a9f4",
    accent: "#00bcd4",
    error: "#e91e63",
    warning: "#ffeb3b",
    info: "#607d8b",
    success: "#4caf50",
    slate: "8797AD",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
