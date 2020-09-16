<template>
	<div>
		<v-row class="mb-12">
			<v-col cols="12">
				<v-card class="mt-0" height="300px" tile>
					<v-img v-if="user.cover == 'cover.jpg'" height="100%" :src='require(`../../assets/img/covers/${user.cover}`)' @click.self="onCoverPhotoClick">
						<v-row align="end" class="fill-height">
							<v-col align-self="start" class="pa-0" cols="12">
								<v-avatar class="profile mx-8 my-8" color="grey" size="164" rounded @click.stop="onAvatarClick">
									<v-img v-if="user.dp == 'default.gif'" :src='require(`../../assets/img/dps/${user.dp}`)'></v-img>
									<v-img v-else :src="`./storage/pics/${user.dp}`"></v-img>
								</v-avatar>
								<input class="d-none" type="file" ref="dpChange" @change="onDpChange($event)" />
								<input class="d-none" type="file" ref="coverPhotoChange" @change="onCoverPhotoChange($event)" />
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
								<EditProfile :user-profile="user" />
							</div>

						</v-row>
					</v-img>
					<v-img v-else height="100%" :src="`./storage/pics/${user.cover}`" @click.self="onCoverPhotoClick">
						<v-row align="end" class="fill-height">
							<v-col align-self="start" class="pa-0" cols="12">
								<v-avatar class="profile mx-8 my-8" color="grey" size="164" rounded @click.stop="onAvatarClick">
									<v-img v-if="user.dp == 'default.gif'" :src='require(`../../assets/img/dps/${user.dp}`)'></v-img>
									<v-img v-else :src="`./storage/pics/${user.dp}`"></v-img>
								</v-avatar>
								<input class="d-none" type="file" ref="dpChange" @change="onDpChange($event)" />
								<input class="d-none" type="file" ref="coverPhotoChange" @change="onCoverPhotoChange($event)" />
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
								<EditProfile :user-profile="user" />
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
				<PostForm :user-id="user.id" />
				<PostCard />
			</v-col>

			<v-row lg="4" class="pt-1 mt-6">
				
			</v-row>
		</v-row>

	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PostForm from '../wall/PostForm'
import PostCard from '../wall/PostCard'
import ToolBar from './ToolBar'
import EditProfile from './EditProfile'

export default {
	name: 'Profile',

	data: () => ({
		image: '',
	}),

	components: {
		PostForm,
		PostCard,
		ToolBar,
		EditProfile
	},

	computed: {
		...mapGetters({
			user: 'user/getAuthUser'
		})
	},

	methods: {

		 ...mapActions({
			updateProfilePicture: 'user/updateProfilePicture',
			updateCoverPicture: 'user/updateCoverPicture'  
      	}),

		 onAvatarClick() {
      		this.$refs.dpChange.click()
   		 },

		// upload the image
		onDpChange(e) {
			this.image = e.target.files[0];
			let formData = new FormData();
			formData.append('image', this.image);	
			this.updateProfilePicture(formData)
		},

		onCoverPhotoClick() {
      		this.$refs.coverPhotoChange.click()
   		 },

		// upload the image
		onCoverPhotoChange(e) {
			this.image = e.target.files[0];
			let formData = new FormData();
			formData.append('image', this.image);	
			this.updateCoverPicture(formData)
		}
	}
}
</script>
