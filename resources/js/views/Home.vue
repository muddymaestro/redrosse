<template>
  <v-row>
    <v-col cols="12" lg="8" md="6" sm="4">
      <v-content>
        <PostForm />

        <h3>News Feed</h3>
        <PostCard />
      </v-content>
    </v-col>

    <v-col cols="12" md="4">
      <v-content>
        <Following />
      </v-content>
    </v-col>
  </v-row>
</template>

<script>
import PostForm from '../components/post/PostForm';
import PostCard from '../components/post/PostCard';
import Following from '../components/following/Following';

export default {
  name: 'Home',
  components: {
    PostForm,
    PostCard,
    Following
  }
}
</script>
