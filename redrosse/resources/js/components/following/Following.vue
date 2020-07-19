<template>
  <v-card
    max-width="450"
    class="mx-auto"
  >
    <v-list three-line>
      <div v-for="user in users" :key="user.id">
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="items.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle v-if="!isFollowing(user.followers) > 0" @click="follow(user.id)">Follow</v-list-item-subtitle>
            <v-list-item-subtitle v-else @click="unfollow(user.id)">Unfollow</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data: () => ({
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        }
      ]
    }),

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
