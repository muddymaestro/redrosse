<template>
  <div>
    <nav-bar />
    <div class="mt-12"></div>
    <div class="ribon"></div>
    <v-row>
      <v-col dense cols="12" lg="3" md="3" sm="6">
        <profileCard />
        <v-card tile>
          <v-list dense>
            <template>
              <!-- Profile link -->
              <v-list-item to="/profile" link>
                <!-- link icon -->
                <v-list-item-action>
                  <v-icon color="primary">mdi-account-circle</v-icon>
                </v-list-item-action>
                <!-- link text -->
                <v-list-item-content>
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <!-- Home link -->
              <v-list-item link to="/home">
                <!-- link icon -->
                <v-list-item-action>
                  <v-icon color="primary">mdi-home</v-icon>
                </v-list-item-action>
                <!-- link text -->
                <v-list-item-content>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <!-- Messages link -->
              <v-list-item to="/messages" link>
                <!-- link icon -->
                <v-list-item-action>
                  <v-icon color="primary">mdi-email</v-icon>
                </v-list-item-action>
                <!-- link text -->
                <v-list-item-content>
                  <v-list-item-title>Messages</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <!-- link dropdown with it's link option -->
              <v-list-group>
                <v-icon slot="prependIcon" color="primary">mdi-cog</v-icon>
                <!-- link dropdown -->
                <template v-slot:activator>
                  <!-- link text -->
                  <v-list-item-title>Settings</v-list-item-title>
                </template>

                <!-- drop down options -->
                <v-list-item to="/settings" link>
                  <!-- dropdown option icon -->
                  <v-list-item-action>
                    <v-icon color="primary"></v-icon>
                  </v-list-item-action>
                  <!-- dropdown option text -->
                  <v-list-item-content>
                    <v-list-item-title>Change Password</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item to="/settings" link>
                  <!-- dropdown option icon -->
                  <v-list-item-action>
                    <v-icon color="primary"></v-icon>
                  </v-list-item-action>
                  <!-- dropdown option text -->
                  <v-list-item-content>
                    <v-list-item-title>Delete Account</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>

              <v-list-item @click.prevent="signOut" link>
                <!-- dropdown option icon -->
                <v-list-item-action>
                  <v-icon color="primary">mdi-logout </v-icon>
                </v-list-item-action>
                <!-- dropdown option text -->
                <v-list-item-content>
                  <v-list-item-title>Sign Out</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>

      <v-col class="py-0" cols="12" lg="9" md="9" sm="6">
        <router-view :key="$route.path"></router-view>
      </v-col>
      <footer-bar />
    </v-row>
  </div>
</template>

<script>
import NavBar from '@/components/layouts/NavBar'
import FooterBar from '@/components/layouts/FooterBar'
import profileCard from '@/components/layouts/profileCard'
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
