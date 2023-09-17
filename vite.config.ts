/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["dayjs"],
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              ssr: false,
              pure: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setup-tests.ts", "@vitest/web-worker"],
    include: ["./src/**/*.test.tsx", "./src/**/*.test.ts"],
    environmentOptions: {
      jsdom: {
        resources: "usable",
      },
    },
  },
});
