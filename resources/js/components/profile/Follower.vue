<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn text color="white" dark v-on="on">
          Followers
        </v-btn>
      </template>
      <v-card
        max-width="400"
      >
        <v-list subheader>
          
          <v-list-item
            v-for="follower in followers"
            :key="follower.id"
          >
            <v-list-item-avatar color="red" size="40">
              <v-img 
                v-if="follower.dp != 'default.gif'" 
                :src="`./storage/pics/${follower.dp}`"
              ></v-img>
            <v-icon v-else dark>mdi-account-circle</v-icon>

            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="follower.name"></v-list-item-title>
            </v-list-item-content>

           <v-btn v-if="!isFollowing(follower.id) > 0" @click="follow(follower.id)" value="left" color="white">
              <span class="hidden-sm-and-down" color="red">Follow</span>
            </v-btn>

            <v-btn v-else @click="unfollow(follower.id)" value="left" color="white">
              <span class="hidden-sm-and-down" color="red">Unfollow</span>
            </v-btn>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  //props: ['user'],

  data: () => ({
      dialog: false,
  }),

  computed: {
    ...mapGetters({
      user: 'user/getAuthUser'
    }),

    followers() {
      return this.user.followers
    }
  },

  methods: {
    ...mapActions({
      followUser: 'user/followUser',
      unfollowUser: 'user/unfollowUser',
    }),

    follow(followerId) {
      this.followUser(followerId)
    },

    unfollow(followerId) {
      this.unfollowUser(followerId)
    },

    isFollowing(followerId) {
      const isFollowing = this.user.followings.filter(following => following.id === followerId)
      return isFollowing.length
    }
  }
}
</script>



