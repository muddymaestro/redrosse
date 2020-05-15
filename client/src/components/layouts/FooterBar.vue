<template>
  <div>
    <div class="ribon elevation-5"></div>
    <v-footer height="auto" color="primary">
      <v-layout justify-center row wrap>
        <v-btn color="primary" depressed x-small to="/settings">Settings</v-btn>
        <v-btn color="primary" depressed x-small to="/terms">Terms & Conditions</v-btn>
        <v-btn color="primary" depressed x-small to="/privacy-policy">Privacy Policy</v-btn>
        <v-btn color="primary" depressed x-small to="/about-us">About Us</v-btn>
        <v-btn color="primary" depressed x-small to="/contact-us">Contact Us</v-btn>
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
