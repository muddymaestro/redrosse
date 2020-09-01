<template>
  <div>
    <nav-bar />
    <div class="mt-12"></div>
    <div class="ribon"></div>
    <v-row>
      <v-col class="mx-auto" cols="12" lg="9" md="9" sm="6">
        <router-view :key="$route.fullPath"></router-view>
      </v-col>
      <footer-bar />
    </v-row>
  </div>
</template>

<script>
import NavBar from '../layouts/NavBar'
import FooterBar from '../layouts/FooterBar'
import profileCard from '../layouts/profileCard'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'AppLayout',
	components: {
		profileCard,
		'nav-bar': NavBar,
		'footer-bar': FooterBar
	},
	data: () => ({
	}),
	computed: {
		...mapGetters({
			user: 'auth/user'
		})
	},
	methods: {
		...mapActions({
			signOutAction: 'auth/signOut'
		}),

		signOut () {
			this.signOutAction()
		}
	}
}
</script>

<style lang="css">
  .ribon{
    background-color: #f6851f;
    padding: 0px;
    margin: 0;
    border: none;
    width: 100vw;
  }
</style>
