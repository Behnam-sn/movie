import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueClazyLoad from "vue-clazy-load";

Vue.config.productionTip = false;
Vue.use(VueClazyLoad);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
