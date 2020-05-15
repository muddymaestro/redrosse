import axios from 'axios'
import router from '@/router'
export default {
	namespaced: true,
	state: {
		token: null,
		user: null,
		layout: 'guest-layout'
	},

	getters: {
		authCheck (state) {
			return state.token && state.user
		},

		user (state) {
			return state.user
		},

		layout (state) {
			return state.layout
		}
	},

	mutations: {
		SET_TOKEN (state, token) {
			state.token = token
		},

		SET_USER (state, user) {
			state.user = user
		},

		SET_LAYOUT (state, payload) {
			state.layout = payload
		}
	},

	actions: {
		// signup user
		async signUp ({ dispatch }, formData) {
			// send user data to api
			const response = await axios.post('sign-up', formData)
			dispatch('attempt', response.data.token)
		},

		// signin user
		async signIn ({ dispatch }, formData) {
			// send signin in request to api with email and password
			const response = await axios.post('sign-in', formData)

			// dispatch attemp to commit the token to state
			dispatch('attempt', response.data.token)
		},

		async attempt ({ commit, state }, token) {
			// commit token to state
			if (token) {
				commit('SET_TOKEN', token)
			}

			// check token before sending a request
			if (state.token === null) {
				return
			}

			// get auth user
			try {
				// send get request to auth user to api with token in header
				const response = await axios.get('me')

				// commit user-data to state
				commit('SET_USER', response.data)
				commit('SET_LAYOUT', 'app-layout')
				router.push({
					name: 'Home'
				})
			} catch {
				// sign user out if token had problems in geting user-data from api
				commit('SET_TOKEN', null)
				commit('SET_USER', null)
			}
		},

		async signOut ({ commit }) {
			// signout request to api
			const feedback = await axios.post('sign-out')

			// delete token and user-data from state and localstorage if the api returns a 200 status code
			if (feedback.status === 200 || feedback.status === 401) {
				commit('SET_TOKEN', null)
				commit('SET_USER', null)

				// set layout
				commit('SET_LAYOUT', 'guest-layout')

				// redirect to signin page
				router.push({
					name: 'SignIn'
				})
			}
		}
	}
}
