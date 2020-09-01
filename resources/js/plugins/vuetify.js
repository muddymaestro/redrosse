import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default new Vuetify({
	icons: {
		//iconfont: 'mdi', // default - only for display purposes
	},

	theme: {
		themes: {
			light: {
				primary: '#ED1B24',
				secondary: '#8E0E0F',
				accent: '#f6851f',
				error: '#E98581',
				anchor: '#8c9eff',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107'
			}
		}
	}
})
