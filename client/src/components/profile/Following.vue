<template>
<v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn text color="white" dark v-on="on">
          Following
        </v-btn>
      </template>
      <v-card
        max-width="400"
      >
        <v-list subheader>
          
          <v-list-item
            v-for="following in followings"
            :key="following.id"
          >
            <v-list-item-avatar>
              <v-icon dark>mdi-account-circle</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="following.name"></v-list-item-title>
            </v-list-item-content>

           <v-btn @click="unfollow(following.id)" value="left" color="white">
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
  data: () => ({
    dialog: false,
  }),

  computed: {
    ...mapGetters({
      user: 'user/getAuthUser'
    }),

    followings() {
      return this.user.followings
    }
  },

  methods: {
    ...mapActions({
      unfollowUser: 'user/unfollowUser'
    }),
    
    unfollow(followingId) {
      this.unfollowUser(followingId)
    }
  }
}
</script>



