<template>
  <v-app-bar app elevate-on-scroll color="primary" light dense tile>
    <div class="d-flex align-center">
      <router-link to="/">
      <v-img  alt="redrosse Logo"  class="shrink mr-2" contain  src="@/assets/newlogo.jpg" transition="scale-transition" width="100"/>
      </router-link>
    </div>

    <template v-if="authCheck">
      <v-btn color="primary" depressed small to="/home">Home</v-btn>
      <v-btn color="primary" depressed small to="/profile">Profile</v-btn>
      <v-btn color="primary" depressed small to="/messages">Messages</v-btn>
      <v-btn color="primary" depressed small to="/notifications">Notifications</v-btn>
    </template>

    <v-spacer></v-spacer>
    <template v-if="!authCheck">
      <v-btn color="primary" right depressed small to="/signin">Sign In</v-btn>
      <v-btn color="primary" depressed small right to="/signup">Sign Up</v-btn>
    </template>
    <template v-else>
        <div class="text-right">
          <v-menu offset-y nudge-top close-on-click transition="fade-transition">
            <template v-slot:activator="{ on }">
              <v-btn  dark color="primary" v-on="on" x-small dense depressed height="30" width="auto" class="my-0 py-0">
                <v-avatar size="30px">
                  <v-img :src='require(`@/assets/img/dps/${user.dp}`)'></v-img>
                </v-avatar>
              </v-btn>
            </template>
            <v-list color="primary" dense>
              <v-list-item to="/profile"><v-list-item-title class="white--text">Profile</v-list-item-title></v-list-item>
              <v-list-item to="/settings"><v-list-item-title class="white--text">Account Settings</v-list-item-title></v-list-item>
              <v-list-item to="/settings"><v-list-item-title class="white--text">Other Settings</v-list-item-title></v-list-item>
              <v-list-item @click.prevent="signOut"><v-list-item-title class="white--text">Sign Out</v-list-item-title></v-list-item>
            </v-list>
          </v-menu>
        </div>
    </template>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	name: 'NavBar',
	components: {
	},
	computed: {
		...mapGetters({
			authCheck: 'auth/authCheck',
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
