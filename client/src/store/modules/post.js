import axios from 'axios'
import router from '@/router'

export default {
	namespaced: true,
	state: {
		posts: []
	},

	getters: {
		
	},

	mutations: {
		ADD_POST (state, post) {
			state.posts.unshift(post)
		}
	},

	actions: {
		// sending post
		async sendPost({ commit }, formData) {
			// send post data to api
			const response = await axios.post('post', formData)
			console.log(response.data.post)
			commit('ADD_POST', response.data.post)
		}
	}
}
