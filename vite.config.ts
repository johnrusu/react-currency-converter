import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

// App metadata configuration
import { appMetadata } from "./src/constants/index.ts";

// https://vite.dev/config/
export default defineConfig({
  base: "/react-currency-converter/", // GitHub Pages repository name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          ...appMetadata,
        },
      },
    }),
  ],
});
