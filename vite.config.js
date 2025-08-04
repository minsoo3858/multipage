import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sidea: resolve(__dirname, "sidea/index.html"),
        sideb: resolve(__dirname, "sideb/index.html"),
      },
    },
  },
});
