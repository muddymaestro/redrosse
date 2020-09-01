<template>
  <v-app>
    <NavBar />
    <v-content class="indigo lighten-5">
      <div class="ribon elevation-2"></div>
      <router-view :key="$route.path"/>
    </v-content>
    <FooterBar />
  </v-app>
</template>

<script>
import NavBar from '../layouts/NavBar'
import FooterBar from '../layouts/FooterBar'
import { mapGetters } from 'vuex'

export default {
	name: 'GuestLayout',
	comouted: {
		...mapGetters({
			authCheck: 'auth/authCheck',
			user: 'auth/user'
		})
	},
	components: {
		NavBar,
		FooterBar
	},

	data: () => ({
		//
	})
}
</script>

<style lang="css">
  *{
    text-transform: none !important;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1d2129;
    background-color: #e9ebee;
    background: url("../../assets/img/body_bg.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .ribon{
  background-color: #f6851f;
  height: 5px;
  margin: 0;
  border: none;
  width: 100vw;
  }
</style>
