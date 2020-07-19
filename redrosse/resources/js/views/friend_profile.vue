<template>
	<div>
		<v-row class="mb-12">
			<v-col cols="12">
				<v-card class="mt-0" height="300px" tile>
					<v-img height="100%" :src='require(`../assets/img/covers/${user.cover}`)'>
						<v-row align="end" class="fill-height">
							<v-col align-self="start" class="pa-0" cols="12">
								<v-avatar class="profile mx-8 my-8" color="grey" size="164" rounded>
									<v-img :src='require(`../assets/img/dps/${user.dp}`)'></v-img>
								</v-avatar>
							</v-col>
							<v-col lg="6" md="8" sm="10" class="py-0">
								<v-alert color="rgba(42,59,77, .8)" dark border="top" tile dense>
									<v-list-item color="rgba(0, 0, 0, .4)" dark>
										<v-list-item-content class="py-0">
											<v-list-item-title class="title py-0">{{ user.name }}</v-list-item-title>
											<v-list-item-subtitle>@ {{ user.uname }}</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</v-alert>
							</v-col>
							<v-spacer></v-spacer>

							<div class="mb-7 mr-10">
								<v-btn v-if="!isFollowing(user.followers) > 0" @click="follow(user.id)" class="mr-4" tile color="primary" dark>
									Follow
								</v-btn>
								<v-btn v-else @click="unfollow(user.id)" class="mr-4" tile color="primary" dark>
									Unfollow
								</v-btn>
								<router-link :to="{ name: 'Messages', params: { id: user.id }}">
									Send Message
								</router-link>
								<!-- <v-btn tile color="primary" dark @click="sendMessage(user.id)">
									Send Message
								</v-btn> -->
							</div>

						</v-row>
					</v-img>
					<ToolBar />
				</v-card>
			</v-col>
		</v-row>

		<!-- posts -->
		<v-row>
			<v-col lg="8" class="pt-1 mt-6">
				<PostForm :user-id="authUser.id" />
				<PostCard /> 
			</v-col>

			<v-row lg="4" class="pt-1 mt-6">
				
			</v-row>
		</v-row>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostForm from '../components/wall/PostForm'
import PostCard from '../components/wall/PostCard'
import ToolBar from '../components/friend_profile/ToolBar'

export default {
	name: 'FriendProfile',
	data: () => ({

	}),

	components: {
		PostForm,
		PostCard,
		ToolBar
	},

	computed: {
		...mapGetters({
			authUser: 'auth/user',
			user: 'user/getUser'
		})
	},

	methods: {
		...mapActions({
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
	  },
	  
	  sendMessage(userId) {
		this.$router.push({name: 'Messages', params: {id: userId}})  
	  }
	}
}
</script>
