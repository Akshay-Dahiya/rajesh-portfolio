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
  };
});
