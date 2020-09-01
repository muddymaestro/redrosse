<template>
    <v-list-item three-line>

      <v-list-item-avatar color="red" size="30" class="mt-8">
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
              v-model="message"
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
    data: () => ({
      valid: true,
      message: '',
      placeholder: 'Type a message',
      autoGrow: true,
      rows: 1
    }),

    computed: {
		  ...mapGetters({
			  user: 'user/getUserTo' 
		  })
	  },

    methods: {
      ...mapActions({
        sendMessage: 'message/sendMessage'
      }), 

      // submittng form data 
      submit() {
        this.$refs.form.validate()

        if(this.valid) {
          const formData = new FormData();
          const receiverId = this.user.id
          formData.append('message', this.message);
          this.sendMessage({receiverId, formData})
          this.$refs.form.reset()
        }
      }
    }
  }
</script>

<style scoped>
  
</style>


          
    


