import './assets/main.css'
import 'element-plus/dist/index.css'
 
import chriszj from "chriszj";
//import '@/packages/TableList/style/search.scss'

import "../node_modules/chriszj/style.css";

import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)
app.use(chriszj)


app.mount('#app')
