<template>
    <div v-if="posts">
        <v-card max-width="550" class="mt-7" v-for="post in posts" :key="post.id">
            <v-list-item>

                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-content>

                    <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                    <v-list-item-subtitle>by {{ post.user.name }}</v-list-item-subtitle>
                    
                </v-list-item-content>

            </v-list-item>

            <v-img 
                v-if="post.image" :src=" 'http://localhost/redrosse/api/public/storage/pics/' + post.image "
                height="500" width="100%"
            ></v-img>

            <v-card-text>
                {{ post.body }}
            </v-card-text>

            <v-card-actions>

                <div v-if="post.likes.length > 0">
                    
                    <v-btn v-if="isPostLiked(post.likes)" @click="unlike(post.id)" icon>
                        {{ post.likes.length }} Unlike
                    </v-btn>

                    <v-btn v-else @click="like(post.id)" icon>
                        {{ post.likes.length }} Like
                    </v-btn>
                    
                </div>

                <v-btn v-else @click="like(post.id)" icon>
                    Like
                </v-btn>

                <v-btn class="comment" icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
            
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    data: function() {
        return {
            
        } 
    },

    created() {
        if (this.posts && this.posts.length > 0) return; // already fetched.
        this.fetchPosts()
    },

    computed: {
        ...mapState({
            posts: state => state.post.posts
        }),

        ...mapGetters({
            user: 'auth/user'
        })
    },

    methods: {
        ...mapActions({
            fetchPosts: 'post/fetchPosts',
            likePost: 'post/likePost',
            unlikePost: 'post/unlikePost',
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
