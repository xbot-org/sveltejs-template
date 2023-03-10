import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    preprocessorOptions: {
      less: {
        // 括号内才使用数学计算
        math: "always",
        globalVars: {
          // 全局变量
          "primary-color": "#5D6BBA",
        },
      },
    },
  },
});
