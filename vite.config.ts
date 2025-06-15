import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: "/exoplanets",
  plugins: [react()],
  server: {
    proxy: {
      // any request to /api/* will be forwarded
      "/api": {
        target: "https://exoplanetarchive.ipac.caltech.edu",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
}));
