import axios from 'axios'

export default {
	namespaced: true,

	state: {
		user: null
	},

	getters: {
		authCheck (state) {
			return state.user
		},

		user (state) {
			return state.user
		}
	},

	mutations: {
		SET_USER (state, user) {
			state.user = user
		},

		DELETE_USER (state) {
			state.user = null
		}
	},

	actions: {
		// signup user
		async signUp ({ dispatch }, formData) {
			// send user data to api
			const response = await axios.post('sign-up', formData)

			if(response.data.success) {
				try{
					window.location.href = `https://redrosse.com/public`;
				}
				catch(error) {
					console.log(error.response.data.errors)
				}
			}
		},

		// signin user
		async signIn ({ commit }, formData) {
			// send signin in request to api with email and password
			const response = await axios.post('sign-in', formData)
			console.log(response.data.message)

			if(response.data.user) {
				try{
					commit('SET_USER', response.data.user)
					window.location.href = `https://redrosse.com/public/home`;
				}
				catch(error) {
					console.log(error.response.data.errors)
				}
			}
		},

		async signOut ({ commit }) {
			// signout request to api
			await axios.post('sign-out')
			commit('DELETE_USER')
			window.location.href = `https://redrosse.com/public`;
		}
	}
}
