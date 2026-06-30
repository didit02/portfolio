import base44 from "@base44/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true
  },
  plugins: [
    base44(),
    react()
  ]
});