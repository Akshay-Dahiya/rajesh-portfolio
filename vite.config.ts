import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const repoBase = "/rajesh-portfolio/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const isGitHubPagesBuild = env.GITHUB_ACTIONS === "true";

  return {
    plugins: [react()],
    base: isGitHubPagesBuild ? repoBase : "/",
    build: {
      chunkSizeWarningLimit: 2200,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;

            if (id.includes("gsap")) {
              return "gsap";
            }

            if (id.includes("@dimforge/rapier3d-compat")) {
              return "rapier";
            }

            if (id.includes("@react-three/rapier")) {
              return "react-three-rapier";
            }

            if (
              id.includes("@react-three/") ||
              id.includes("@react-three/drei") ||
              id.includes("camera-controls") ||
              id.includes("maath") ||
              id.includes("meshline") ||
              id.includes("stats-gl") ||
              id.includes("suspend-react") ||
              id.includes("three-mesh-bvh") ||
              id.includes("troika-")
            ) {
              return "react-three-stack";
            }

            if (id.includes("three-stdlib")) {
              return "three-stdlib";
            }

            if (id.includes("/three/")) {
              return "three-core";
            }

            if (
              id.includes("/react/") ||
              id.includes("react-dom") ||
              id.includes("scheduler")
            ) {
              return "react-vendor";
            }
          },
        },
      },
    },
  };
});
