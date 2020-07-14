import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { sync } from 'vuex-router-sync'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
require('@/store/subscriber')

axios.defaults.baseURL = 'http://localhost/redrosse/api/public/api'
Vue.config.productionTip = false
sync(store, router)

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
	new Vue({
		router,
		store,
		vuetify,
		render: h => h(App)
	}).$mount('#app')
})
