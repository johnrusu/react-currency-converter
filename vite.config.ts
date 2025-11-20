import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from "vite-plugin-html";

// App metadata configuration
const appMetadata = {
  title: "Rusu Ionut - Notes",
  author: "Rusu Ionut",
  description:
    "A simple and fast currency converter application built with React and TypeScript. Convert currencies with ease and get real-time exchange rates.",
  keywords:
    "currency converter, react, material-ui, tailwindcss, typescript, ionut rusu, productivity",
};

// https://vite.dev/config/
export default defineConfig({
  base: "/react-currency-converter/", // GitHub Pages repository name
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
