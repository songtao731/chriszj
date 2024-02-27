import DefaultTheme from "vitepress/theme";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
// import locale from 'element-plus/lib/locale/lang/zh-cn'
// 图标并进行全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import { createWebHistory, createRouter } from "vue-router";

import { VPDemo } from "../vitepress";
// 基于element-plus二次封装基础组件

import Chriszj from "chriszj";
import "../../public/css/index.css";
import "chriszj/style.css";

// import "../../../packages/TableList/style/search.scss";

let router = null;
if (window) {
  router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes: [], // `routes: routes` 的缩写
  });
}

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    // 注册ElementPlus
    // ctx.app.use(ElementPlus, {
    //   locale, // 语言设置
    // })
    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component);
    }
    // 全局注册基础组件
    ctx.app.use(ElementPlus).use(Chriszj).use(router);

    ctx.app.component("Demo", VPDemo);
  },
};
