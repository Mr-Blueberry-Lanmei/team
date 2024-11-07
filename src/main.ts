import { createSSRApp } from "vue";
import App from "./App.vue";
import './download (2)/font_310irbem5bp/iconfont.css'
import * as Pinia from 'pinia';

export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  return {
    app,
  };
}
