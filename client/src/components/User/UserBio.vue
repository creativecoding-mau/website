<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
            <p> logged in user {{ currentUser }} </p>
            <p> Display Name </p>
            <input type="text" name="" v-model="userDisplayName">
      </v-flex>
      <v-flex xs12>
            <p> User Website </p>
            <p> <input type="text" name="" v-model="userWebsite"> </p>
      </v-flex>
      <v-flex xs12>
            <p> User Github </p>
            <p> <input type="text" name="" v-model="userGithub"> </p>
      </v-flex>
      <v-flex xs12>
            <p> User Image </p>
            <p> <input type="text" name="" v-model="userImage"> </p>
      </v-flex>
      <v-flex xs12>
            <p> <button class="generalButton" @click="changeUserBio">Save</button> </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
const firebase = require("firebase")
const axios = require("axios")

export default {
    data: function() {
        return {
            userDisplayName: "",
            userWebsite: "",
            userGithub: "",
            id: this.$route.params.id,
            userImage: ""
        }
    },
    methods: {
        changeUserBio() {
            const user = firebase.auth().currentUser
            user.updateProfile({
            displayName: this.userDisplayName,
            }).then(() => {
                this.$emit("userDisplayName", user.displayName)
            }, function(error) {
            console.log(error)
            });
            let userBio = {
                email: this.currentUser,
                displayName: this.userDisplayName,
                website: this.userWebsite,
                github: this.userGithub,
                image: this.userImage,
                role: "Member"
            }
            axios
          .put(
            "https://website-7b764.firebaseio.com/Users/ +" + user.uid + ".json", userBio)
        }
    },
    props: ["currentUser"]
}
</script>

<style scoped>
input {
    border: 1px solid black;
}

</style>
