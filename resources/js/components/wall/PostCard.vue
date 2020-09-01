<template>
    <div v-if="posts">
        <v-card max-width="550" class="mt-7" v-for="post in posts" :key="post.id">
            <v-list-item>

                <v-list-item-avatar color="red">
                    <v-icon dark>mdi-account-circle</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="headline">{{ post.user_from.name }}</v-list-item-title>
                    <v-list-item-subtitle>@{{ post.user_from.uname }}</v-list-item-subtitle>
                </v-list-item-content>

            </v-list-item>

            <v-img 
                v-if="post.image" :src=" 'http://localhost/redrosse/api/public/storage/pics/' + post.image "
                height="500" width="100%"
            ></v-img>

            <v-layout class="ml-12 pl-2">
                <v-card-text>
                    {{ post.body }}
                </v-card-text>
            </v-layout>

            <v-layout class="ml-12 pl-2">
                <div v-if="post.likes.length > 0">

                    <v-btn text v-if="isPostLiked(post.likes)" @click="unlike(post.id)" value="left" color="white">
                        <v-icon color="red" size="25" left>mdi-heart</v-icon>
                        <span class="hidden-sm-and-down" color="red">{{ post.likes.length }}</span>
                    </v-btn>

                    <v-btn text v-else @click="like(post.id)" value="left" color="white">
                        <v-icon color="red" size="25" left>mdi-heart-outline</v-icon>
                        <span class="hidden-sm-and-down" color="red">{{ post.likes.length }}</span>
                    </v-btn>
                    
                </div>

                <v-btn text v-else @click="like(post.id)" value="left" color="white">
                    <v-icon color="red" size="25" left>mdi-heart-outline</v-icon>
                </v-btn>

                <v-btn text value="center" color="white">
                    <v-icon color="red" size="20" left>mdi-message-text</v-icon>
                    <span class="hidden-sm-and-down">{{ post.comments.length }}</span>
                </v-btn>
            </v-layout>

            <v-divider></v-divider>

            <!-- Post comments -->
            <v-layout class="ml-12 pl-2"> 
                <CommentCard v-if="post.comments" :comments="post.comments" />
            </v-layout>

            <!-- Form for posting comments -->
            <CommentForm :post-id="post.id" />

        </v-card>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import CommentForm from "../wall/CommentForm";
import CommentCard from "../wall/CommentCard";

export default {
    components: {
        CommentForm,
        CommentCard
    },

    data: function() {
        return {
            icon: 'justify'
        } 
    },

    created() {
        if (this.posts && this.posts.length > 0) return; // already fetched.
        this.fetchPosts()
    },

    computed: {
        ...mapState({
            posts: state => state.wall_post.posts
        }),

        ...mapGetters({
            user: 'auth/user'
        }),
    },

    methods: {
        ...mapActions({
            fetchPosts: 'wall_post/fetchPosts',
            likePost: 'wall_post/likePost',
            unlikePost: 'wall_post/unlikePost',
        }),

        isPostLiked(postlikes) {
            return postlikes.filter(like => like.user_id === this.user.id)
        },

        like(postId) {
            this.likePost(postId)
        },

        unlike(postId) {
            this.unlikePost(postId)
        }
    }
}
</script>

<style scoped>
    .disable-events {
        pointer-events: none
    }
</style>
