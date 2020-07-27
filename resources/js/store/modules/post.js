import axios from 'axios'

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
		},

		ADD_COMMENT(state, payload) {
			const {comment, postId} = payload
			const postIndex = state.posts.findIndex(post => post.id == parseInt(postId))
			state.posts[postIndex].comments.push(comment)
		},

		LIKE_COMMENT(state, payload) {
			const {like, postId, commentId} = payload
			const postIndex = state.posts.findIndex(post => post.id == parseInt(postId))
			const commentIndex = state.posts[postIndex].comments.findIndex(comment => comment.id == parseInt(commentId))
			state.posts[postIndex].comments[commentIndex].likes.push(like)
		},

		UNLIKE_COMMENT(state, payload) {
			const {likeId, postId, commentId} = payload
			const postIndex = state.posts.findIndex(post => post.id == parseInt(postId))
			const commentIndex = state.posts[postIndex].comments.findIndex(comment => comment.id == parseInt(commentId))
			const likeIndex = state.posts[postIndex].comments[commentIndex].likes.findIndex(like => like.id == parseInt(likeId))
			state.posts[postIndex].comments[commentIndex].likes.splice(likeIndex, 1)
		},
	},

	actions: {
		// sending post data to the api
		async sendPost({ commit }, formData) {
			const response = await axios.post('post', formData)
			commit('ADD_POST', response.data.post)
		},

		// fetching posts from the api
		async fetchPosts({ commit }) {
			const response = await axios.get('posts')
			commit('FETCH_POSTS', response.data.posts)
		},

		// // liking the post
		// async likePost({ commit, rootState }, postId) {
		// 	const response = await axios.get(`like-post/${postId}`)
		// 	const payload = {like: response.data.postLike, postId: response.data.postId}
		// 	commit('LIKE_POST', payload)
		// },

		// unliking the post
		async unlikePost({ commit }, postId) {
			const response = await axios.get(`unlike-post/${postId}`)
			const payload = {likeId: response.data.likeId, postId: response.data.postId}
			commit('UNLIKE_POST', payload)
		},
		
		// commenting on the post
		async commentPost({ commit }, {post_id, formData}) {
			const response = await axios.post(`comment/${post_id}`, formData)
			const payload = {comment: response.data.comment, postId: response.data.postId}
			commit('ADD_COMMENT', payload)
		},

		// liking the comment
		async likeComment({ commit }, {commentId, postId}) {
			const response = await axios.get(`like-comment/${commentId}`)
			const payload = {like: response.data.commentLike, postId, commentId}
			commit('LIKE_COMMENT', payload)
		},

		// unliking the comment
		async unlikeComment({ commit }, {commentId, postId}) {
			const response = await axios.get(`unlike-comment/${commentId}`)
			const payload = {likeId: response.data.likeId, postId, commentId}
			commit('UNLIKE_COMMENT', payload)
		}
	}
}
