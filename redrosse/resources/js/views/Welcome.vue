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
import Slider from '../components/auth/Slider'
import SignInForm from '../components/auth/SignInForm'
export default {
	name: 'Welcome',
	components: {
		Slider,
		SignInForm
	}
}
</script>

<style>
</style>
