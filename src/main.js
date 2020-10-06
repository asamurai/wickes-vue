import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { install } from "./plugins/is-in-view-directive";

import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

Vue.use(install);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
