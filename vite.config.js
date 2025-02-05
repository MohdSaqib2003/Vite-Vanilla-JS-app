import { defineConfig } from "vite";

export default defineConfig({
  server: {
      port: 3000, // Change default port
  },
  build: {
    outDir: "dist",
  },
});
