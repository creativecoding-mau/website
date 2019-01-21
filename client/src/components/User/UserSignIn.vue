<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
            <p> Email: </p>
            <p> <input type="text" id="email" v-model="signInEmail"> </p>
      </v-flex>
      <v-flex xs12>
            <p> Password: </p>
            <p> <input type="text" id="password" v-model="signInPassword"> </p>
      </v-flex>
      <v-flex xs12>
            <button @click="signIn">Sign In</button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import fireBaseKey from "../../config.js"
const firebase = require("firebase")

export default {
    data: function() {
        return {
            signInEmail: "felixmorau@gmail.com",
            signInPassword: "felix123",
            userObject: firebase.auth().currentUser
        }
    },
    methods: {
        signIn() {
            let email = this.signInEmail
            let password = this.signInPassword

            firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            }).then(() => {
                const user = firebase.auth().currentUser
                if (user.emailVerified) {
                this.$emit("userIsLoggedIn", email)
                } else {
                    this.verifyUserEmail()
                }
            });
        },
        verifyUserEmail() {
            firebase.auth().currentUser.sendEmailVerification()
            .then(function() {
            console.log("email sent")
            })
            .catch(function(error) {
            console.log(error)
            });
        }
    },
}
</script>

<style scoped>
input {
    border: 1px solid black;
}
</style>
