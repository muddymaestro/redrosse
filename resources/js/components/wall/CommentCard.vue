<template>
    <div v-if="comments">
        <v-list three-line v-for="comment in comments" :key="comment.id" class="mb-2">
            <v-list-item>

                <v-list-item-avatar color="red" size="30">
                    <v-img 
                        v-if="user.dp != 'default.gif'" 
                        :src="`./storage/pics/${user.dp}`"
                    ></v-img>
                    <v-icon dark>mdi-account-circle</v-icon>
                </v-list-item-avatar>

                <v-list-item-content class="caption">
                    <v-list-item-title> {{ comment.user.name }} </v-list-item-title>
                    <v-list-item-subtitle> {{ comment.body }} </v-list-item-subtitle>
                    
                    <v-layout justify="start">
                        <div v-if="comment.likes.length > 0">

                            <v-btn text v-if="isCommentLiked(comment.likes)" @click="unlike(comment.id, comment.commentable_id)" value="left" color="white">
                                <v-icon color="red" left>{{ comment.likes.length }} mdi-heart</v-icon>
                                <span class="hidden-sm-and-down" color="red">{{ comment.likes.length }} Unlike</span>
                            </v-btn>

                            <v-btn text v-else @click="like(comment.id, comment.commentable_id)" value="left" color="white">
                                <v-icon color="red" left>mdi-heart-outline</v-icon>
                                <span class="hidden-sm-and-down" color="red">{{ comment.likes.length }} Like</span>
                            </v-btn>
                            
                        </div>

                        <v-btn text v-else @click="like(comment.id, comment.commentable_id)" value="left" color="white">
                            <v-icon color="red" left>{{ comment.likes.length }} mdi-heart-outline</v-icon>
                            <span class="hidden-sm-and-down" color="red">Like</span>
                        </v-btn>
                    </v-layout>

                    <v-divider
                        style="width: 100%;"
                        class="mx-4"
                        color="white"
                        horizontal
                    ></v-divider>
                    
                </v-list-item-content>

            </v-list-item>
        </v-list>
        
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    props: {
        comments: Array
    },

    data: function() {
        return {
            icon: 'justify'
        } 
    },
    
    computed: {
        ...mapGetters({
            user: 'user/getAuthUser'
        })
    },

    methods: {
        ...mapActions({
            likeComment: 'wall_post/likeComment',
            unlikeComment: 'wall_post/unlikeComment',
        }),

        isCommentLiked(commentlikes) {
            return commentlikes.filter(like => like.user_id === this.user.id)
        },

        like(commentId, postId) {
            this.likeComment({commentId, postId})
        },

        unlike(commentId, postId) {
            this.unlikeComment({commentId, postId})
        }
    }
}
</script>

<style scoped>
#avatar {
    height: 5px;
}
</style> 
