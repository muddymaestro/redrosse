<template>
    <div>
        <v-card max-width="550" class="mt-7" v-for="post in posts" :key="post.id">
            <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                <v-list-item-subtitle>by {{ post.user.name }}</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

            <v-img
                :src=" 'http://localhost/redrosse/api/public/storage/pics/' + post.image "
                height="500" width="100%"
            ></v-img>

            <v-card-text>
                {{ post.body }}
            </v-card-text>

            <v-card-actions>
            <v-btn
                text
                color="deep-purple accent-4"
            >
                Read
            </v-btn>
            <v-btn
                text
                color="deep-purple accent-4"
            >
                Bookmark
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
        posts: state => state.post.posts
      })
    }
}
</script>
