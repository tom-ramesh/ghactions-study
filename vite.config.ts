import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/devops-study/",
  // root: "src",
  build: {
    rollupOptions: { output: { dir: "build" } },
  },
  plugins: [react()],
});
