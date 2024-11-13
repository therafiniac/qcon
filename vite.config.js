import { resolve } from "path";
import purgecss from "vite-plugin-purgecss";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  plugins: [
    purgecss({
      content: ["./**/*.html", "./src/**/*.js"], // Paths to check for used classes
    }),
  ],
  server: {
    port: 8080,
  },
};
