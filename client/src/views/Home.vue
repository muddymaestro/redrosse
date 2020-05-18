<template>
  <v-row>
    <v-col cols="12" lg="8" md="6" sm="4">
      <v-content>
        <h3>New Post</h3>
        <PostForm />

        <h3>News Feed</h3>
        <PostCard />
      </v-content>
    </v-col>

    <v-col cols="12" md="2">
      <v-content>
        Content
      </v-content>
    </v-col>
  </v-row>
</template>

<script>
import PostForm from '@/components/post/PostForm';
import PostCard from '@/components/post/PostCard';

export default {
  name: 'Home',
  components: {
    PostForm,
    PostCard
  }
}
</script>
