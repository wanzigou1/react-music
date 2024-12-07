import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // 确保输出目录是 dist
    sourcemap: false, // 如果需要调试，可设置为 true
    minify: "esbuild", // 或 'terser'，控制压缩方式
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "./", // 设置资源的相对路径
});
