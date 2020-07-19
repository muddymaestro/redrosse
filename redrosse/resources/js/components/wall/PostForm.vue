<template>
  <v-card
    max-width="550"
    class="mb-10"
    outlined
  >
    <v-system-bar
    class="white--text"
    color="primary"
    >
    <span>Create New Post</span>
    </v-system-bar>

    <v-list-item three-line>

      <v-list-item-avatar color="red" class="mt-12">
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

          <div class="mb-1">
            <v-textarea
            v-model="post"
            :rules="postRules"
            :auto-grow="autoGrow"
            :rowHeight="rowHeight"
            :rows="rows"
            :placeholder="placeholder"
            required
            ></v-textarea>
          </div>

          <v-btn
            color="primary"
            class="text-none"
            rounded
            depressed
            @click="onButtonClick"
          >
            <v-icon left>
              camera
            </v-icon>
            <span color="white">Photo</span>
          </v-btn>

          <input class="d-none" type="file" ref="uploader" @change="onFileChange" /> 

        </v-list-item-content>
        
        <v-layout align-end justify-end>

          <v-card-actions>
            <v-btn
            color="primary"
            class="text-xs-right white--text"
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
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
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
      sendPost: 'wall_post/sendPost'
    }),

    onButtonClick() {
      this.$refs.uploader.click()
    },

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
        this.sendPost({id: this.userId, formData})
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

