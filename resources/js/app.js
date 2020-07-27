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
		component: () => import('./views/Welcome.vue'),
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
		component: () => import('./components/auth/SignIn.vue'),
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
		component: () => import('./components/auth/SignUp.vue'),
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
		component: () => import('./views/Home.vue'),
		beforeEnter: auth
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () => import('./views/Profile.vue'),
		beforeEnter: auth
	},
	{
		path: '/friend-profile',
		name: 'FriendProfile',
		props: true,
		component: () => import('./views/friend_profile.vue'),
		beforeEnter: auth
	},
	{
		path: '/messages',
		name: 'Messages',
		props: true,
		component: () => import('./views/Messages.vue'),
		beforeEnter: auth
	},
	{
		path: '/messages/user',
		name: 'Message',
		props: true,
		component: () => import('./views/Messages.vue'),
		beforeEnter: auth
	},
	{
		path: '/following',
		name: 'Following',
		component: () => import('./views/Following.vue'),
		beforeEnter: auth
	},
	{
		path: '/notifications',
		name: 'Notifications',
		component: () => import('./views/Notifications.vue'),
		beforeEnter: auth
	},
	{
		path: '/settings',
		name: 'Settings',
		component: () => import('./views/Settings.vue'),
		beforeEnter: auth
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('./views/About.vue')
	},
	{
		path: '/contact-us',
		name: 'ContactUs',
		component: () => import('./views/ContactUs.vue')
	},
	{
		path: '/terms-and-conditions',
		name: 'Terms',
		component: () => import('./views/Terms.vue')
	},
	{
		path: '/privacy-policy',
		name: 'Privacy',
		component: () => import('./views/Privacy.vue')
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
