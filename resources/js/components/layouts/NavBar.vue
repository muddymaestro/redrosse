<template>
  <v-app-bar app elevate-on-scroll color="primary" light dense tile>
    <div class="d-flex align-center">
      <div>
      <v-img  alt="redrosse Logo"  class="shrink mr-2" contain  src="../../assets/newlogo.jpg" transition="scale-transition" width="100"/>
      </div>
    </div>

    <template v-if="authCheck">  
      <v-btn color="primary" depressed small href="/home">Home</v-btn>
      <v-btn color="primary" depressed small href="/profile">Profile</v-btn>
      <v-btn color="primary" depressed small>Messages</v-btn>
      <v-btn color="primary" depressed small>Notifications</v-btn>
    </template>

    <v-spacer></v-spacer>
    <template v-if="!authCheck">
      <v-btn color="primary" right depressed small href="/">Sign In</v-btn>
      <v-btn color="primary" depressed small righ href="/signup">Sign Up</v-btn>
    </template>
    <template  v-else>
        <div class="text-right">
          <v-menu offset-y nudge-top close-on-click transition="fade-transition">
            <template v-slot:activator="{ on }">
              <v-btn  dark color="primary" v-on="on" x-small dense depressed height="30" width="auto" class="my-0 py-0">
                <v-avatar size="30px">
                  <v-img 
                    v-if="user.dp != 'default.gif'" 
                    :src="'./storage/pics/' + user.dp"
                  ></v-img>
                  <v-icon v-else dark>mdi-account-circle</v-icon>
                </v-avatar>
              </v-btn>
            </template>
            <v-list color="primary" dense>
              <v-list-item><v-list-item-title class="white--text">Profile</v-list-item-title></v-list-item>
              <v-list-item><v-list-item-title class="white--text">Account Settings</v-list-item-title></v-list-item>
              <v-list-item><v-list-item-title class="white--text">Other Settings</v-list-item-title></v-list-item>
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
  props: ['authUser'],

  mounted() {
    console.log(this.authUser)
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
