import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";
import FullReload from "vite-plugin-full-reload";
import { viteStaticCopy } from "vite-plugin-static-copy";

import pages from "./pages.config.js";

const pagesInput = {};

pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});

export default defineConfig({
  build: {
    target: "es2017",
    outDir: "build",
    rollupOptions: {
      input: {
        ...pagesInput,
      },
    },
  },

  server: {
    port: 3025,
    host: "0.0.0.0",
    hmr: true,
  },

  plugins: [
    handlebars({
      reloadOnPartialChange: true,
      partialDirectory: resolve(__dirname, "src/pages/partials"),
    }),

    FullReload("src/pages/partials/**/*", { delay: 0 }),

    viteStaticCopy({
      targets: [],
    }),
  ],
});
