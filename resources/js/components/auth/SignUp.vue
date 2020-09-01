<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="7" lg="7" sm="12">
                <v-card class="pa-2 indigo lighten-5" outlined tile>
                    <Slider />
                </v-card>
            </v-col>
            <v-col  cols="12" md="5" lg="5" sm="12">
                <v-card class="pa-0" elevation="4" tile>
                    <SignUpStepper />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Slider from '../auth/Slider'
import SignUpStepper from '../auth/SignUpStepper'

export default {
	name: 'SignUp',
	components: {
		Slider,
		SignUpStepper
	}
}
</script>

<style>
</style>
