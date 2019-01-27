import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from "vue-router"
import { routes } from "./routes.js";
import {VueMasonryPlugin} from "vue-masonry"

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: "history"
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
