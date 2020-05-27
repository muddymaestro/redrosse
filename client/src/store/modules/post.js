import axios from 'axios'
import router from '@/router'

export default {
	namespaced: true,
	state: {
		posts: [],
	},

	getters: {
		
	},

	mutations: {
		ADD_POST(state, post) {
			state.posts.unshift(post)
		},

		FETCH_POSTS(state, posts) {
			posts.map(post => {
				state.posts.push(post)
			}) 
		},

		LIKE_POST(state, payload) {
			const {like, postId} = payload
			const postIndex = state.posts.findIndex(post => post.id == parseInt(postId))
			state.posts[postIndex].likes.push(like)
		},

		UNLIKE_POST(state, payload) {
			const {likeId, postId} = payload
			const postIndex = state.posts.findIndex(post => post.id == parseInt(postId))
			const likeIndex = state.posts[postIndex].likes.findIndex(like => like.id == parseInt(likeId))
			state.posts[postIndex].likes.splice(likeIndex, 1)
		}
	},

	actions: {
		// sending post data to the api
		async sendPost({ commit }, formData) {
			const response = await axios.post('post', formData)
			console.log(response.data.post)
			commit('ADD_POST', response.data.post)
		},

		// fetching posts from the api
		async fetchPosts({ commit }) {
			const response = await axios.get('posts')
			console.log(response.data.posts)
			commit('FETCH_POSTS', response.data.posts)
		},

		// liking the post
		async likePost({ commit }, postId) {
			const response = await axios.get(`like-post/${postId}`)
			const payload = {like: response.data.postLike, postId: response.data.postId}
			commit('LIKE_POST', payload)
		},

		// unliking the post
		async unlikePost({ commit }, postId) {
			const response = await axios.get(`unlike-post/${postId}`)
			const payload = {likeId: response.data.likeId, postId: response.data.postId}
			commit('UNLIKE_POST', payload)
		}
	}
}
