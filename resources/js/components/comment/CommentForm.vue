<template>
  <v-container fluid ma-0 pa-0> 
    <v-list-item three-line>

      <v-list-item-avatar color="red" size="30" class="mt-8">
        <v-img 
            v-if="user.dp != 'default.gif'" 
            :src="`./storage/pics/${user.dp}`"
        ></v-img>
        <v-icon v-else dark>mdi-account-circle</v-icon>
      </v-list-item-avatar>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        style="width: 100%;"
      >
        
        <v-list-item-content>

          <v-layout justify="start">
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
  </v-container>
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
        user: 'user/getAuthUser'
      }),
    },

    methods: { 
      ...mapActions({
        commentPost: 'post/commentPost'
      }),

      // submittng form data 
      submit() {
        this.$refs.form.validate()

        if(this.valid) {
          let formData = new FormData();
          formData.append('comment', this.comment);
          const post_id = this.postId
          this.commentPost({post_id, formData})

          this.$refs.form.reset()
        }
      }
    }
  }
</script>

<style scoped>
  
</style>


          
    


