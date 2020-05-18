<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import AppLayout from '@/components/layouts/AppLayout'
import GuestLayout from '@/components/layouts/GuestLayout'
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			layout: 'auth/layout'
		})
	},
	components: {
		'app-layout': AppLayout,
		'guest-layout': GuestLayout
	}
}
</script>
