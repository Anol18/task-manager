import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  // 	optimizeDeps: {
	// 	include: [
	// 		"antd",
	// 		"@emotion/react",
	// 		"@emotion/styled",
	// 		"@mui/material",
	// 		"@iconify/react",
	// 		"jwt-decode",
	// 		"@reduxjs/toolkit",
	// 		"react-countdown-circle-timer",
	// 		"react-otp-input",
	// 		"react-spinners",
	// 		"react-countdown-circle-timer",
	// 		"react-hook-form",
	// 		"react-otp-input",
	// 		"react-redux",
	// 		"react",
	// 		"react-dom",
	// 		"react-lazy-load-image-component",
	// 		"jodit-react",
	// 		"react-to-print",
	// 		"react-csv",
	// 	],
	// },
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
