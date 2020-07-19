import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import post from './modules/post'
import wall_post from './modules/wall_post'
import user from './modules/user'
import message from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth,
		post,
		user,
		message,
		wall_post
	}
})
