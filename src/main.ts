import { createSSRApp } from "vue";
import App from "./App.vue";
import './download (2)/font_310irbem5bp/iconfont.css'
import './download (2) (2)/font_nnk1caaundf/iconfont.css'
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
