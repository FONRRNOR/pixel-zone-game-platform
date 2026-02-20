import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"

localStorage.removeItem("role")

createApp(App)
  .use(router)
  .mount("#app")