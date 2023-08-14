import './assets/main.css'
import 'element-plus/dist/index.css'
import router from "./router";
 
import chriszj from "chriszj";
import "chriszj/style.css";

import { createApp } from 'vue'
import App from './App.vue'



const app = createApp(App)

app.use(chriszj)
app.use(router);


app.mount('#app')
