<template>
	<!-- <v-card class="pa-2" outlined tile elevation="5">
		<v-list-item class="mb-6">
			<v-list-item-content>
				<v-list-item-title class="headline">Sign In Below...</v-list-item-title>
				<hr />
			</v-list-item-content>
		</v-list-item>
		<v-form class="px-4" id="check-login-form">
			<v-text-field
				solo-inverted
				clearable densed
				v-model="email"
				:error-messages="emailErrors"
				label="E-mail Address"
				required
				@input="$v.email.$touch()"
				@blur="$v.email.$touch()"/>
			<v-text-field
				solo-inverted
				clearable densed
				type="password"
				v-model="password"
				:error-messages="passwordErrors"
				label="Password"
				required
				@input="$v.password.$touch()"
				@blur="$v.password.$touch()">
			</v-text-field>
			<button
				@click.native="submit"
			>
				Sign In
			</button>
			<div class="mb-8">
				<a class="mt-2 mb-4 float-left">Forgot Password?</a>
				<a class="mt-2 mb-4 float-right">Need An Account?</a>
			</div>
			<div class="clear"></div>
		</v-form>
	</v-card> -->

	<button @click="submit">Click Me!</button>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
	name: 'SignInForm',
	mixins: [validationMixin],
	validations: {
		email: { required, email },
		password: { required }
	},

	data: () => ({
		password: '',
		email: '',
		loading5: false,
		loader: null
	}),

	mounted: function () {
		console.log('mounted')
  		// window.addEventListener('click', function(event) {
		// 	if(event.target.id == 'btn') {
		// 		this.submit
		// 	}
		// })
	},

	watch: {
		loader () {
			const l = this.loader
			this[l] = !this[l]

			setTimeout(() => (this[l] = false), 10000)

			this.loader = null
		}
	},

	computed: {
		passwordErrors () {
			const errors = []
			if (!this.$v.password.$dirty) return errors
			!this.$v.password.required && errors.push('Password is required.')
			return errors
		},

		emailErrors () {
			const errors = []
			if (!this.$v.email.$dirty) return errors
			!this.$v.email.email && errors.push('Must be valid e-mail')
			!this.$v.email.required && errors.push('E-mail is required')
			return errors
		}
	},

	methods: {
		submit: function() {
			console.log("I'm the shit")
		},
		// async submit () {
		// 	//this.loader = 'loading5'
		// 	this.$v.$touch()
		// 	console.log('before entering...')
		// 	if (!this.$v.$invalid) {
		// 		const formData = new FormData
		// 		formData.append('email', this.email)
		// 		formData.append('password', this.password)
		// 		console.log('hello')
		// 		const response = await axios.post('sign-in', formData)
		// 		console.log(response.data.message)
		// 		this.clear()
		// 	}
		// },

		clear () {
			this.$v.$reset()
			this.email = ''
			this.password = ''
		}
	}
}
</script>

<style>
.clear {
	clear: both;
}
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
