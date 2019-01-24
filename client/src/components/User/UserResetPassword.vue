<template>
    <div>
        <button @click="resetPassword">
            RESET PASSWORD
        </button>
    </div>
</template>

<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
          <button class="generalButton" @click="resetPassword">RESET PASSWORD</button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const firebase = require("firebase")

export default {
    data: function() {

    },
    methods: {
        resetPassword(email) {
            const auth = firebase.auth();
            auth.sendPasswordResetEmail(this.currentUser).then(function() {
            // Email sent.
            }).catch(function(error) {
            // An error happened.
            });
        }
    },
    props: ["currentUser"]
}
</script>

<style>

</style>
