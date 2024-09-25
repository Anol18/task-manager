import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      "antd",

      "@iconify/react",

      "@reduxjs/toolkit",

      "react-spinners",

      "react-hook-form",

      "react-redux",
      "react",
      "react-dom",
    ],
  },
  build: {
    outDir: "build",
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        // manualChunks: {
        // 	vendor: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
        // 	tailwind: ["tailwindcss", "autoprefixer"],
        // },
        // chunkFileNames: "[name]-[hash].js",
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },

  plugins: [react()],
  server: {
    port: 9000,
    open: "/",
  },
});
