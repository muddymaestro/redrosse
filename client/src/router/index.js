import Vue from 'vue'
import store from '@/store'
import VueRouter from 'vue-router'
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
		component: () => import('@/views/Welcome.vue'),
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
		component: () => import('@/components/auth/SignIn.vue'),
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
		component: () => import('@/components/auth/SignUp.vue'),
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
		component: () => import('@/views/Home.vue'),
		beforeEnter: auth
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () => import('@/views/Profile.vue'),
		beforeEnter: auth
	},
	{
		path: '/friend-profile',
		name: 'FriendProfile',
		props: true,
		component: () => import('@/views/friend_profile.vue'),
		beforeEnter: auth
	},
	{
		path: '/messages',
		name: 'Messages',
		props: true,
		component: () => import('@/views/Messages.vue'),
		beforeEnter: auth
	},
	{
		path: '/messages/user',
		name: 'Message',
		props: true,
		component: () => import('@/views/Messages.vue'),
		beforeEnter: auth
	},
	{
		path: '/following',
		name: 'Following',
		component: () => import('@/views/Following.vue'),
		beforeEnter: auth
	},
	{
		path: '/notifications',
		name: 'Notifications',
		component: () => import('@/views/Notifications.vue'),
		beforeEnter: auth
	},
	{
		path: '/settings',
		name: 'Settings',
		component: () => import('@/views/Settings.vue'),
		beforeEnter: auth
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/About.vue')
	},
	{
		path: '/contact-us',
		name: 'ContactUs',
		component: () => import('@/views/ContactUs.vue')
	},
	{
		path: '/terms-and-conditions',
		name: 'Terms',
		component: () => import('@/views/Terms.vue')
	},
	{
		path: '/privacy-policy',
		name: 'Privacy',
		component: () => import('@/views/Privacy.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
