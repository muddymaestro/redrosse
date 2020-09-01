<template>
  <v-card
    max-width="450"
    class="mx-auto"
  >

    <v-system-bar
    class="white--text"
    color="primary"
    >
    <span>People you may know</span>
    </v-system-bar>

    <v-list three-line>
      <div v-for="user in users" :key="user.id">
        <v-list-item>
          <v-list-item-avatar color="red" size="40">
            <v-img 
                v-if="user.dp != 'default.gif'" 
                :src="`./storage/pics/${user.dp}`"
            ></v-img>
            <v-icon v-else dark>mdi-account-circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-btn small v-if="!isFollowing(user.followers) > 0" @click="follow(user.id)" tile class="red--text" color="white" dark>
							<span>Follow</span> 
						</v-btn>
            <v-btn small v-else @click="unfollow(user.id)" tile class="red--text" color="white" dark>
							<span>Unfollow</span> 
						</v-btn>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data: () => ({}),

    created() {
        if (this.users && this.users.length > 0) return; // already fetched.
        this.fetchUsers()
    },

    computed: {
        ...mapGetters({
          users: 'user/getUsers',
          authUser: 'auth/user' 
        })
    },

    methods: {
      ...mapActions({
        fetchUsers: 'user/fetchUsers',
        followUser: 'user/followUser',
        unfollowUser: 'user/unfollowUser',
      }),

      follow(userId) {
        this.followUser(userId)
      },

      unfollow(userId) {
        this.unfollowUser(userId)
      },

      isFollowing(followers) {
        const isFollowing = followers.filter(follower => follower.id === this.authUser.id)
        return isFollowing.length
      }
    }
  }
</script>
