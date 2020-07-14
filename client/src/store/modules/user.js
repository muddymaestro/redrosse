import axios from 'axios'

export default {
	namespaced: true,
	state: {
		users: []
	},

	getters: {
		getAuthUser(state, getters, rooState, rootGetters) {
			const authUser = rootGetters['auth/user']
			return state.users.find(user => user.id == authUser.id)
		},

		getUser(state, getters, rootState) {
			if(rootState.route.path == "/friend-profile") {
				return state.users.find(user => user.id === rootState.route.params.id)
			}
		},

		getUserTo(state, getters, rootState) {
			if(rootState.route.path == "/messages") {
				return state.users.find(user => user.id === rootState.route.params.id)
			}
		},

		getUsers(state, getters, rootState, rootGetters) {
			const authUser = rootGetters['auth/user']
			return state.users.filter(user => user.id !== authUser.id)
		}
	},

	mutations: {
		FOLLOW_USER(state, payload) {
			const {userId, authUser} = payload
			const followingIndex = state.users.findIndex(user => user.id == userId)
			const authUserIndex = state.users.findIndex(user => user.id == parseInt(authUser.id))
			state.users[followingIndex].followers.push(authUser)
			state.users[authUserIndex].followings.push(state.users[followingIndex])
		},

		UNFOLLOW_USER(state, payload) {
			const {authUser, unfollowed} = payload		
		    const unfollowedIndex = state.users.findIndex(user => user.id == parseInt(unfollowed.id))
			const authUserIndex = state.users[unfollowedIndex].followers.findIndex(follower => follower.id == parseInt(authUser.id))
			const unfollowIndex = state.users[authUserIndex].followings.findIndex(following => following.id == parseInt(unfollowed.id))
			state.users[unfollowedIndex].followers.splice(authUserIndex, 1)
			state.users[authUserIndex].followings.splice(unfollowIndex, 1)
		},

		FETCH_USERS(state, users) {
			users.map(user => {
				state.users.push(user)
			})
		}
	},

	actions: {
		// follow a user
		async followUser({ commit }, id) {
			const response = await axios.get(`follow/${id}`)

			if(response.data.following) {
				const payload = {userId: id, authUser: response.data.following}
				commit('FOLLOW_USER', payload)
			}
			else {
				console.log(response.data.message)
			}			
		},

		// unfollow a user
		async unfollowUser({ commit, rootGetters }, id) {
			const response = await axios.get(`unfollow/${id}`)

			if(response.data.unfollowed) {
				const authUser = rootGetters['auth/user']
				const payload = {authUser, unfollowed: response.data.unfollowed}
				commit('UNFOLLOW_USER', payload)
			}
			else {
				console.log(response.data.message)
			}
		},

		// fetching users from the api
		async fetchUsers({ commit }) {
			const response = await axios.get('users')
			commit('FETCH_USERS', response.data.users)
		},

		// update user profile
		async updateProfile({ commit }, formData) {
			const response = await axios.put('update-profile', formData)
			console.log(response.data.user)
			//commit('EDIT_PROFILE', response.data.user)
		},

		// update user profile picture
		async updateProfilePicture({ commit }, formData) {
			const response = await axios.post('update-profile-picture', formData)
			console.log(response.data.user)
			//commit('EDIT_PROFILE', response.data.user)
		},

		// update user cover picture
		async updateCoverPicture({ commit }, formData) {
			const response = await axios.post('update-cover-picture', formData)
			console.log(response.data.user)
			//commit('EDIT_PROFILE', response.data.user)
		}
	}
}
