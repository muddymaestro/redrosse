<template>
    <v-list-item three-line>

      <v-list-item-avatar color="red" size="30" class="mt-8">
        <v-img 
          v-if="user.dp != 'default.gif'" 
          :src="`http://localhost/redrosse/api/public/storage/pics/${user.dp}`"
        ></v-img>
        <v-icon dark>mdi-account-circle</v-icon>
      </v-list-item-avatar>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        
        <v-list-item-content>

          <v-layout justify="start" fluid>
            <v-textarea
              v-model="comment"
              :rules="commentRules"
              :auto-grow="autoGrow"
              :rows="rows"
              :placeholder="placeholder"
              required
            ></v-textarea>

            <v-btn text color="red" @click="submit" class="mt-5">
              <v-icon color="red" size="25" left>mdi-send</v-icon>
            </v-btn>

          </v-layout>
    
        </v-list-item-content>

      </v-form>
    </v-list-item>
  
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    props: {
        postId: {
          type: Number,
          required: true
        }
    },
    data: () => ({
      valid: true,
      comment: '',
      commentRules: [
        v => !!v || 'Comment is required'
      ],
      placeholder: 'Add Comment',
      autoGrow: true,
      rows: 1
    }),

    computed: {
      ...mapGetters({
        user: 'auth/user'
      }),
    },

    methods: { 
      ...mapActions({
        commentPost: 'wall_post/commentPost'
      }),

      // submittng form data 
      submit() {
        this.$refs.form.validate()

        if(this.valid) {
          let formData = new FormData();
          formData.append('comment', this.comment);
          const post_id = this.postId
          console.log(...formData)
          this.commentPost({post_id, formData})

          this.$refs.form.reset()
        }
      }
    }
  }
</script>

<style scoped>
  
</style>


          
    


