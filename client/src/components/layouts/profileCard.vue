<template>
  <v-card max-width="100%" class="mx-auto" tile>
    <v-list-item :to="{path: '/profile', params: {}}" link>
      <v-list-item-avatar size="45px">
        <v-img :src='require(`@/assets/img/dps/${user.dp}`)'></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline accent--text">@ {{user.uname}}</v-list-item-title>
        <v-list-item-subtitle class="text-capitalize font-weight-medium caption" color="accent accent-10">{{user.name}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img :src='require(`@/assets/img/covers/${user.cover}`)' height="194"></v-img>

    <v-card-text>
      {{ user.bio }}
    </v-card-text>

    <v-card-actions>
      <v-btn text color="accent accent-10">Follow</v-btn>
      <v-btn text color="accent accent-10">Message</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'profileCard',
	computed: {
		...mapGetters({
			user: 'auth/user',
			authCheck: 'auth/authCheck'
		})
	}
}
</script>
