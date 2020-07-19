<template>
  <v-row>
    <v-col cols="12" lg="8" md="6" sm="4">
      <v-content>
        <Following />
      </v-content>
    </v-col>
  </v-row>
</template>

<script>
import Following from '../components/profile/Following';

export default {
  name: 'following',
  components: {
    Following
  }
}
</script>
