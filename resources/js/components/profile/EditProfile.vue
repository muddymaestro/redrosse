<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
          <v-btn tile color="primary" dark v-on="on">
            <v-icon left>mdi-pencil</v-icon> Edit Profile
          </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
            <v-container>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
              <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Fullname*" v-model="user.name" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Username*" v-model="user.uname"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Email*" v-model="user.email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Bio" v-model="user.bio" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Home Town" v-model="user.home_town"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Current City" v-model="user.current_city" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="Picker in dialog"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker 
                    v-model="date" 
                    scrollable
                    min="1916-06-15"
                    max="2018-03-20"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="6">
                <v-radio-group v-model="radios">
                  <template v-slot:label>
                    <div>Gender</div>
                  </template>
                  <v-radio value="m">
                    <template v-slot:label>
                      <div>Male</div>
                    </template>
                  </v-radio>
                  <v-radio value="f">
                    <template v-slot:label>
                      <div>Female</div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            </v-form>
            </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="submit()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
      userProfile: {
          type: Object,
          required: true
      }
  },

  data: function () {
      
      return {
          user: { ...this.userProfile },
          valid: true,
          nameRules: [
          v => !!v || 'Name is required'
          ],
          unameRules: [
          v => !!v || 'Username is required'
          ],
          dialog: false,
          date: new Date().toISOString().substr(0, 10),
          modal: false,
          radios: ''
      }
  },

  methods: {
    ...mapActions({
    updateProfile: 'user/updateProfile'
    }),

        // submittng form data 
    submit() {
        const formData = {...this.user, dob: this.date, gender: this.radios}
        this.updateProfile(formData)
        this.$refs.form.reset()
        this.dialog = false
    }
  }
}
</script>
