<template>
  <div class="mt-0">
    <div class="ribon elevation-5"></div>
    <v-footer absolute height="auto" color="primary">
      <v-layout justify-center row wrap>
        <v-btn color="primary" depressed x-small>Settings</v-btn>
        <v-btn color="primary" depressed x-small>Terms & Conditions</v-btn>
        <v-btn color="primary" depressed x-small>Privacy Policy</v-btn>
        <v-btn color="primary" depressed x-small>About Us</v-btn>
        <v-btn color="primary" depressed x-small>Contact Us</v-btn>
        <v-flex primary text-center white--text xs12>
          <small>&copy; 2020 redrosse</small>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>
<script>
export default {
	name: 'FooterBar',
	components: {
	}
}
</script>
