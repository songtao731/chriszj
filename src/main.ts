import './assets/main.css'
import 'element-plus/dist/index.css'
 
import chriszj from "../packages";
import "chriszj/style.css";

import { createApp } from 'vue'
import App from './App.vue'



const app = createApp(App)

app.use(chriszj)


app.mount('#app')
