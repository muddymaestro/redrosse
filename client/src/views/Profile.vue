<template>
	<div>
		<v-row class="py-0 my-0">
			<v-col cols="12">
				<v-card class="mt-0" height="300px" tile>
					<v-img height="100%" :src='require(`@/assets/img/covers/${user.cover}`)'>
						<v-row align="end" class="fill-height">
							<v-col align-self="start" class="pa-0" cols="12">
								<v-avatar class="profile mx-8 my-8" color="grey" size="164" rounded>
									<v-img :src='require(`@/assets/img/dps/${user.dp}`)'></v-img>
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
						</v-row>
					</v-img>
				</v-card>
			</v-col>
		</v-row>

		<!-- posts -->
		<v-row>
			<v-col lg="8" class="py-0">
				<!-- posting area -->
				<div>
					posting area
				</div>

				<div>
					
				</div>
			</v-col>

			<v-row lg="4" class="py-0">
				some shit
			</v-row>
		</v-row>

	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	name: 'Profile',
	computed: {
		...mapGetters({
			user: 'auth/user',
			authCheck: 'auth/authCheck'
		})
	}
}
</script>
