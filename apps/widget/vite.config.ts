import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: "/widget/",
  build: {
    lib: {
      formats: ["umd"],
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "widget",
      fileName: () => `index.js`,
    },
    outDir: "../../build/widget",
    emptyOutDir: true,
  },
});
