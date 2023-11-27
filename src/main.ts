// import "./tailwind.css";

import "./assets/main.css";
import "element-plus/dist/index.css";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";

import chriszj from "chriszj";
import "chriszj/style.css";
//import './assets/tailMain.css'

import Schema from "async-validator";
// 设置报错提示信息
Schema.messages.required = () => {
  return "该项为必填项";
};
import { createApp } from "vue";
import App from "./App.vue";
// import { ElRate } from "element-plus";
// import { merge } from "lodash";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(chriszj);
app.use(router);

// app.component(
//   "ElRate",
//   merge(ElRate, {
//     props: {
//       validateEvent: {
//         default: true
//       }
//     }
//   })
// );

app.mount("#app");
