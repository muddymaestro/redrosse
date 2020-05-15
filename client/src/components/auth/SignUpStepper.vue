<template>
  <v-stepper v-model="e6" vertical outlined>
    <v-list-item class="pt-4">
        <v-list-item-content>
            <v-list-item-title class="headline mb-2">Sign Up Below...</v-list-item-title>
            <hr>
        </v-list-item-content>
    </v-list-item>

    <v-stepper-step :complete="e6 > 1" editable :rules="[() => !fnameErrors.length > 0 && !lnameErrors.length > 0]" step="1">
      Personal Details
      <small>Who are you?</small>
    </v-stepper-step>
    <v-stepper-content step="1">
        <v-card height="auto" flat>
            <v-text-field
                type="text"
                solo-inverted
                dense
                hide-details="auto"
                clearable
                v-model="fname"
                :counter="100"
                :error-messages="fnameErrors"
                label="First Name"
                required
                @input="$v.fname.$touch()"
                @blur="$v.fname.$touch()"
            ></v-text-field>

            <v-text-field
                type="text"
                solo-inverted
                dense
                hide-details="auto"
                clearable
                v-model="lname"
                :counter="100"
                :error-messages="lnameErrors"
                label="Last Name"
                required
                @input="$v.lname.$touch()"
                @blur="$v.lname.$touch()"
            ></v-text-field>
      </v-card>
      <v-btn small v-if="!fnameErrors.length > 0 && !lnameErrors.length > 0" color="primary" @click="e6 = 2" rounded>Continue</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" editable :rules="[() => !emailErrors.length > 0 && !phoneErrors.length > 0]" step="2">Your Contacts</v-stepper-step>
    <v-stepper-content step="2">
      <v-card height="auto" flat>
            <v-text-field
                type="email"
                solo-inverted
                dense
                clearable
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail Address"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
            ></v-text-field>

            <v-text-field
                type="text"
                solo-inverted
                dense
                clearable
                v-model="phone"
                :error-messages="phoneErrors"
                label="Phone Number"
                @input="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
            ></v-text-field>
      </v-card>
      <v-btn small v-if="!emailErrors.length > 0 && !phoneErrors.length > 0" color="primary" @click="e6 = 3" rounded>Continue</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" editable :rules="[() => (!password_confirmationErrors.length > 0 && !unameErrors.length > 0) && !passwordErrors.length > 0]" step="3">Account Details</v-stepper-step>
    <v-stepper-content step="3">
      <v-card height="auto" flat>
            <v-text-field
                type="text"
                solo-inverted
                dense
                hide-details="auto"
                clearable
                v-model="uname"
                :counter="15"
                :error-messages="unameErrors"
                label="Username"
                required
                @input="$v.uname.$touch()"
                @blur="$v.uname.$touch()"
            ></v-text-field>

            <v-text-field
                solo-inverted
                dense
                v-model="password"
                :error-messages="passwordErrors"
                label="Password"
                counter
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
                clearable
            ></v-text-field>

            <v-text-field
                solo-inverted
                dense
                v-model="password_confirmation"
                :error-messages="password_confirmationErrors"
                label="Password confirmation"
                counter
                required
                @input="$v.password_confirmation.$touch()"
                @blur="$v.password_confirmation.$touch()"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
                clearable
            ></v-text-field>
      </v-card>
      <v-btn small v-if="(!password_confirmationErrors.length > 0 && !unameErrors.length > 0) && !passwordErrors.length > 0" color="primary" @click="e6 = 4" rounded>Continue</v-btn>
    </v-stepper-content>

    <v-stepper-step editable step="4">Terms & Conditions</v-stepper-step>
    <v-stepper-content :complete="e6 == 1" step="4">
      <v-card height="auto" class="mb-4 " flat>
        <!-- <v-alert
            border="left"
            color="indigo"
            dark
            >
            By clicking Sign Up I agree to the terms and conditions of using redrosse
        </v-alert> -->
        <v-alert
            border="left"
            colored-border
            color="indigo accent-4"
            elevation="4"
            >
            By clicking Sign Up I agree to the terms and conditions of using redrosse.
        </v-alert>
      </v-card>
      <div v-if="!$v.$invalid">
            <v-btn color="primary" @click="submit" rounded>Sign Up</v-btn>
            <v-btn text>Cancel</v-btn>
      </div>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email, sameAs } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
	name: 'SignUpStepper',

	mixins: [validationMixin],

	validations: {
		fname: { required, maxLength: maxLength(100) },
		lname: { required, maxLength: maxLength(100) },
		uname: { required, maxLength: maxLength(15), minLength: minLength(3) },
		email: { required, email },
		phone: { required },
		password: { required, minLength: minLength(6) },
		password_confirmation: { required, sameAs: sameAs('password') }
	},

	data () {
		return {
			e6: 1,
			value: true,
			uname: '',
			fname: '',
			lname: '',
			email: '',
			password: '',
			phone: '',
			password_confirmation: ''
		}
	},

	computed: {
		fnameErrors () {
			const errors = []
			if (!this.$v.fname.$dirty) return errors
			!this.$v.fname.maxLength && errors.push('First Name is too long (use 100 charcters max)')
			!this.$v.fname.required && errors.push('First Name is required')
			return errors
		},

		lnameErrors () {
			const errors = []
			if (!this.$v.lname.$dirty) return errors
			!this.$v.lname.maxLength && errors.push('Last Name is too long (use 100 charcters max)')
			!this.$v.lname.required && errors.push('Last Name is required')
			return errors
		},

		unameErrors () {
			const errors = []
			if (!this.$v.uname.$dirty) return errors
			!this.$v.uname.maxLength && errors.push('Username can not have more than 15 characters')
			!this.$v.uname.minLength && errors.push('Username Must have more than 2 characters')
			!this.$v.uname.required && errors.push('Username is required')
			return errors
		},

		emailErrors () {
			const errors = []
			if (!this.$v.email.$dirty) return errors
			!this.$v.email.email && errors.push('Must be valid e-mail')
			!this.$v.email.required && errors.push('E-mail Address is required')
			return errors
		},

		phoneErrors () {
			const errors = []
			if (!this.$v.phone.$dirty) return errors
			!this.$v.phone.required && errors.push('Phone Number is required')
			return errors
		},

		passwordErrors () {
			const errors = []
			if (!this.$v.password.$dirty) return errors
			!this.$v.password.required && errors.push('Password is required.')
			!this.$v.password.minLength && errors.push('Password is too short.')
			return errors
		},

		password_confirmationErrors () {
			const errors = []
			if (!this.$v.password_confirmation.$dirty) return errors
			!this.$v.password_confirmation.required && errors.push('password confirmation is required.')
			!this.$v.password_confirmation.sameAs && errors.push('passwords must match.')
			return errors
		}
	},

	methods: {
		...mapActions({
			signUp: 'auth/signUp'
		}),

		submit (event) {
			this.$v.$touch()
			if (!this.$v.$invalid) {
				this.signUp({
					email: this.email,
					uname: this.uname,
					fname: this.fname,
					lname: this.lname,
					password: this.password,
					password_confirmation: this.password_confirmation,
					phone: this.phone
				}).then(() => {
					this.clear()
					this.$router.replace({
						name: 'Home'
					}).catch((err) => {
						throw new Error(`Problem handling something: ${err}.`)
					})
				}).catch((err) => {
					console.log(`sign-up error: ${err}.`)
				})
			}
		},

		clear () {
			this.$v.$reset()
			this.fname = ''
			this.fname = ''
			this.uname = ''
			this.email = ''
			this.phone = ''
			this.password = ''
			this.password_confirmation = ''
		}
	}
}
</script>
