<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="8" lg="8" sm="12">
				<v-card class="pa-2 indigo lighten-5" outlined tile>
					<Slider />
				</v-card>
			</v-col>
			<v-col cols="12" md="4" lg="4" sm="12">
				<SignInForm />
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import Slider from '../auth/Slider'
import SignInForm from '../auth/SignInForm'
export default {
	name: 'SignIn',
	components: {
		Slider,
		SignInForm
	}
}
</script>
