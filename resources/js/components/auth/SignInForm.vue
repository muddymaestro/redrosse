<template>
	<v-card class="pa-2" outlined tile elevation="5">
		<v-list-item class="mb-6">
			<v-list-item-content>
				<v-list-item-title class="headline">Sign In Below...</v-list-item-title>
				<hr />
			</v-list-item-content>
		</v-list-item>
		<form class="px-4">
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
			<v-btn
				color="primary"
				rounded block class="mt-4 mb-4"
				@click="submit"
				:loading="loading5"
				:disabled="loading5">
				Sign In
				<template v-slot:loader>
					<span class="custom-loader">
						<v-progress-circular
							indeterminate
							color="primary"
						></v-progress-circular>
					</span>
				</template>
			</v-btn>
			<div class="mb-8">
				<router-link to="/signin" class="mt-2 mb-4 float-left">Forgot Password?</router-link>
				<router-link to="/signup" class="mt-2 mb-4 float-right">Need An Account?</router-link>
			</div>
			<div class="clear"></div>
		</form>
	</v-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
// import router from '@/router'
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
		...mapActions({
			signIn: 'auth/signIn'
		}),
		submit () {
			this.loader = 'loading5'
			this.$v.$touch()
			if (!this.$v.$invalid) {
				this.signIn({ email: this.email, 	password: this.password })
				this.clear()
			}
		},
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
