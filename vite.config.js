import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// assetsDir is "static" so build output never mixes with the public/assets folder (your CV)
export default defineConfig({
  plugins: [react()],
  build: { assetsDir: "static" },
});
