<template>
  <v-toolbar
    color="primary"
    dark
    >
        <v-toolbar-items class="hidden-sm-and-down mx-auto">
            
            <v-divider
                class="mx-4"
                color="white"
                inset
                vertical
            ></v-divider>

            <v-btn text>
                About
            </v-btn>

            <v-divider
                class="mx-4"
                color="white"
                inset
                vertical
            ></v-divider>

            <div class="my-auto">
                <v-layout justify="start">
                    <span class="mt-2" left>{{ this.followingCount }}</span>  <Following />
                </v-layout>
            </div>

            <v-divider
                class="mx-4"
                color="white"
                inset
                vertical
            ></v-divider>

            <div class="my-auto">
                <v-layout justify="start">
                    <span class="mt-2" left>{{ this.followersCount }}</span> <Follower />
                </v-layout>
            </div>

            <v-divider
                class="mx-4"
                color="white"
                inset
                vertical
            ></v-divider>

             <v-btn text>
                Posts
            </v-btn>

             <v-divider
                class="mx-4"
                color="white"
                inset
                vertical
            ></v-divider>
        </v-toolbar-items>

    </v-toolbar>
</template>

<script>
import Following from '../profile/Following'
import Follower from '../profile/Follower'
import { mapGetters } from 'vuex'

export default {
    
    components: {
        Following,
        Follower
    },

    computed: {
        ...mapGetters({
			user: 'user/getUser'
		}),

        followersCount() {	
			return this.user.followers.length
		},

		followingCount() {	
			return this.user.followings.length
		}
    }
}
</script>

<style scoped>
a {  
    text-decoration: none;
  }
</style>
