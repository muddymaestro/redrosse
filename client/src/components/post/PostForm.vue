<template>
  <v-card
    max-width="550"
    class="mb-10 mt-5"
    outlined
  >
    <v-list-item three-line>

      <v-list-item-avatar color="red" class="mt-4">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-list-item-avatar>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

        <div id="preview">
          <img name="image" accept="image/*" v-if="imageUrl" :src="imageUrl" />
        </div>
        
        <v-list-item-content>

          <div class="overline mb-4"><v-textarea
            v-model="post"
            :rules="postRules"
            :auto-grow="autoGrow"
            :rowHeight="rowHeight"
            :rows="rows"
            :placeholder="placeholder"
            outlined
            required
            ></v-textarea></div>

            <input type="file" @change="onFileChange" /> 

        </v-list-item-content>
        
        <v-layout align-end justify-end>

          <v-card-actions>
            <v-btn
            color="red"
            class="text-xs-right"
            @click="submit"
            >
            Post
            </v-btn>
          </v-card-actions>
          
        </v-layout>

      </v-form>
    </v-list-item>
    
  </v-card>
  
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data: () => ({
      valid: true,
      post: '',
      postRules: [
        v => !!v || 'Post is required'
      ],
      placeholder: `What's on your mind?`,
      autoGrow: true,
      rowHeight: 20,
      rows: 2,
      image: '',
      imageUrl: null
    }),

    methods: { 
      ...mapActions({
        sendPost: 'post/sendPost'
      }),

      // upload the image
      onFileChange(e) {
        this.image = e.target.files[0];
        this.imageUrl = URL.createObjectURL(this.image);
      },

      // submittng form data 
      submit() {
        this.$refs.form.validate()

        if(this.valid) {
          let formData = new FormData();

          formData.append('post', this.post);
          formData.append('image', this.image);

          this.sendPost(formData)
          this.imageUrl = null;
          this.$refs.form.reset()
        }
      }
    }
  }
</script>

<style scoped>
  #preview {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
  }

  #preview img {
    max-width: 100%;
    max-height: 500px;
  }
</style>

