<template>
    <div v-if="posts">
        <v-card max-width="550" class="mt-7" v-for="post in posts" :key="post.id">
            <v-list-item>      
                    
                <v-list-item-avatar color="red" size="40">
                    <v-img 
                        v-if="post.user.dp != 'default.gif'" 
                        :src="'./storage/pics/' + post.user.dp"
                    ></v-img>
                    <v-icon v-else dark>mdi-account-circle</v-icon>
                </v-list-item-avatar>

                <v-list-item-content v-if="post.user.id != user.id" @click="friendProfile(post.user.id)">
                    <v-list-item-title class="headline">{{ post.user.name }}</v-list-item-title>
                    <v-list-item-subtitle>@{{ post.user.uname }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content v-else @click="authUserProfile(post.user.id)">
                    <v-list-item-title class="headline">{{ post.user.name }}</v-list-item-title>
                    <v-list-item-subtitle>@{{ post.user.uname }}</v-list-item-subtitle>
                </v-list-item-content>

            </v-list-item>

            <v-img 
                v-if="post.image" :src="`./storage/pics/${post.image}`"
                height="500" width="100%"
            ></v-img>

            <v-layout class="ml-12 pl-2">
                <v-card-text>
                    {{ post.body }}
                </v-card-text>
            </v-layout>

            <v-layout class="ml-12 pl-2">
                <div v-if="post.likes.length > 0">

                    <v-btn text v-if="isPostLiked(post.likes) > 0" @click="unlike(post.id)" class="red--text" value="left" color="white">
                        <v-icon color="red" size="25" left>mdi-heart</v-icon>
                        <span class="hidden-sm-and-down">{{ post.likes.length }}</span>
                    </v-btn>

                    <v-btn text v-else @click="likePost(post.id)" class="red--text" value="left" color="white">
                        <v-icon color="red" size="25" left>mdi-heart-outline</v-icon>
                        <span class="hidden-sm-and-down">{{ post.likes.length }}</span>
                    </v-btn>
                    
                </div>

                <v-btn text v-else @click="likePost(post.id)" value="left" color="white">
                    <v-icon color="red" size="25" left>mdi-heart-outline</v-icon>
                </v-btn>

                <v-btn text value="center" class="red--text" color="white">
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
import axios from 'axios'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import CommentForm from "../comment/CommentForm";
import CommentCard from "../comment/CommentCard";

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
        console.log('created...')
        if (this.posts && this.posts.length > 0) return; // already fetched.
        this.fetchPosts()
    },

    computed: {
        ...mapState({
            posts: state => state.post.posts
        }),

        ...mapGetters({
            user: 'auth/user'
        }),
    },

    methods: {
        ...mapActions({
            fetchPosts: 'post/fetchPosts',
            //likePost: 'post/likePost',
            unlikePost: 'post/unlikePost',
        }),

        ...mapMutations({
            addLike: 'post/LIKE_POST'
        }),

        friendProfile(id) {
            this.$router.push({ name: 'FriendProfile', params: {id: id} })
        },

        authUserProfile(id) {
            this.$router.push({ name: 'Profile', params: {id: id} })
        },

        isPostLiked(postlikes) {
            const result = postlikes.filter(like => like.user_id === this.user.id)
            return result.length
        },

        // like(postId) {
        //     this.likePost(postId)
        // },

        // liking the post
		async likePost(postId) {
            const response = await axios.get(`like-post/${postId}`)

            if(response.data.message) {
                console.log(response.data.message)
            } else {
                const payload = {like: response.data.postLike, postId: response.data.postId}
			    this.addLike(payload)
            }
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

    .page-link {  
        text-decoration: none;
        padding: 0;
        margin: 0;
        outline: 0 none !important;
        border: 0;
    }
</style>

