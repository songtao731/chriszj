import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
//自动导出
import AutoImport from "unplugin-auto-import/vite";
//按需引入
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";
// https://vitejs.dev/config/
import dts from "vite-plugin-dts";
import viteCompression from "vite-plugin-compression"; // 静态资源压缩

export default defineConfig({
  base: "./",
  server: {
    open: false, //启动项目自动弹出浏览器
    hmr: true, //开启热加载
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "https://zyn.zhidianjh.com",
        changeOrigin: true,
        rewrite: (path: any) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [
    vue(),
    dts(),
    vueJsx(),
    viteCompression({
      verbose: true,
      disable: false, // 不禁用压缩
      deleteOriginFile: false, // 压缩后是否删除原文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: "gzip", // 压缩算法
      ext: ".gz", // 文件类型
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      $: fileURLToPath(new URL("./packages", import.meta.url)),
    },
  },
  build: {
    outDir: "lib", //输出文件名称
    lib: {
      entry: path.resolve(__dirname, "/packages/index.ts"), //指定组件编译入口文件
      name: "chris-ui",
      fileName: "chris-ui",
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "vue",
        "vue-router",
        "element-plus",
        "element-plus/lib/theme-chalk/index.css",
        "element-plus/dist/index.css",
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "element-plus": "elementPlus",
        },
      },
      treeshake: false,
    }, // rollup打包配置
  },
  css: {
    // // cssModules配置
    modules: {
      // 连字符会被转为大小写，且只会存在大小写
      localsConvention: "camelCaseOnly",
    },
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/var.scss";',
        javascriptEnabled: true,
      },
    },
  },
});
