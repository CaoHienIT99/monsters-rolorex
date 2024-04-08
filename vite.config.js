import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/CaoHienIT99/monsters-rolorex.git",
  plugins: [react()],
  server: {
    port: 3001,
  },
});
