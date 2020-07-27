<template>
  <v-card
    max-width="450"
    class="mx-auto"
  >
    <v-list three-line>
      <v-text-field
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			></v-text-field>
      <!-- <div v-if="Object.keys(threads).length > 0"> -->
        <v-list-item @click="getMessages(thread.id)">
          <v-list-item-avatar color="red">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ thread.user_to.uname }}</v-list-item-title>
            <v-list-item-subtitle>{{ thread.message }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      <!-- </div> -->
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  data: () => ({}),

  mounted() {
    if (this.messageThreads && this.messageThreads.length > 0) return; // already fetched.
    this.fetchThreads()
  },

  computed: {
    ...mapState({
      messageThreads: state => state.message.threads
    }),

    ...mapGetters({
      thread: 'message/getThreads'
    })
  },

  methods: {
    ...mapActions({
      fetchThreads: 'message/fetchThreads'
    }),

    getMessages(id) {
      this.$router.push({name: 'Message', params: {threadId: id}})
    }
  }
}
</script>


    



