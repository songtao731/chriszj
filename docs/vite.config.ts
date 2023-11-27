import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";

import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
export default defineConfig({
  plugins: [vueJsx(), vueSetupExtend()],
  server: {
    host: '0.0.0.0',
    port: 2222,
    open: true,
    https: false,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("../src", import.meta.url)),
    },
  },
})
