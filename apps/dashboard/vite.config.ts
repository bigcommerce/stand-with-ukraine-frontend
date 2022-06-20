import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgLoader from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgLoader()],
  base: "/dashboard/",
  server: {
    proxy: {
      "/api": "http://localhost:9000",
    },
  },
  build: {
    outDir: "../../build/dashboard",
    emptyOutDir: true,
  },
});
