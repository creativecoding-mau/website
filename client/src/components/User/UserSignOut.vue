<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <button class="generalButton" @click="signOut">Sign out</button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const firebase = require("firebase")
export default {
    data: function() {
        return {

        }
    },
    methods: {
        signOut() {
            firebase.auth().signOut().then(() => {
            console.log('Signed Out');
            this.$emit("userSignedOut")
            });
            // }, (error) => {
            // console.error('Sign Out Error', error);
            // }
            // )}
            location.reload()
        }
    }
}
</script>

<style>

</style>
