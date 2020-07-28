/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import App from '../js/App.vue'
import axios from 'axios'
import store from './store'
import { sync } from 'vuex-router-sync'

// Components
import Welcome from './views/Welcome.vue'
import SignIn from './components/auth/SignIn.vue'
import SignUp from './components/auth/SignUp.vue'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import FriendProfile from './views/friend_profile.vue'
import Messages from './views/Messages.vue'
import Message from './views/Messages.vue'
import Following from './views/Following.vue'
import Notifications from './views/Notifications.vue'
import Settings from './views/Settings.vue'
import About from './views/About.vue'
import ContactUs from './views/ContactUs.vue'
import Terms from './views/Terms.vue'
import Privacy from './views/Privacy.vue'

require('./store/subscriber')
Vue.use(VueRouter)

const auth = (to, from, next) => {
	if (store.getters['auth/authCheck']) {
		next()
	} else {
		next({
			name: 'SignIn'
		})
	}
}

const routes = [
	{
		path: '/',
		name: 'Welcome',
		component: Welcome,
		beforeEnter: (to, from, next) => {
			if (store.getters['auth/authCheck']) {
				return next({
					name: 'Home'
				})
			}
			next()
		}
	},
	{
		path: '/signin',
		name: 'SignIn',
		component: SignIn,
		beforeEnter: (to, from, next) => {
			if (store.getters['auth/authCheck']) {
				return next({
					name: 'Home'
				})
			}
			next()
		}
	},
	{
		path: '/signup',
		name: 'SignUp',
		component: SignUp,
		beforeEnter: (to, from, next) => {
			if (store.getters['auth/authCheck']) {
				return next({
					name: 'Home'
				})
			}
			next()
		}
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		beforeEnter: auth
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile,
		beforeEnter: auth
	},
	{
		path: '/friend-profile',
		name: 'FriendProfile',
		props: true,
		component: FriendProfile,
		beforeEnter: auth
	},
	{
		path: '/messages',
		name: 'Messages',
		props: true,
		component: Messages,
		beforeEnter: auth
	},
	{
		path: '/messages/user',
		name: 'Message',
		props: true,
		component: Message,
		beforeEnter: auth
	},
	{
		path: '/following',
		name: 'Following',
		component: Following,
		beforeEnter: auth
	},
	{
		path: '/notifications',
		name: 'Notifications',
		component: Notifications,
		beforeEnter: auth
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings,
		beforeEnter: auth
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/contact-us',
		name: 'ContactUs',
		component: ContactUs
	},
	{
		path: '/terms-and-conditions',
		name: 'Terms',
		component: Terms
	},
	{
		path: '/privacy-policy',
		name: 'Privacy',
		component: Privacy
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

require('./bootstrap');

axios.defaults.baseURL = 'https://redrosse.com/app/public/api'
sync(store, router)

//store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
	new Vue({
		router,
		store,
		vuetify,
		render: h => h(App)
	}).$mount('#app')
//})

export default router
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });
