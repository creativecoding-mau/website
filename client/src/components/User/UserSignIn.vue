<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
          <div class="formOuterContainer">
              <div class="formInnerContainer">
                  <form action="#" class="formForm">
                      <div class="formGroup">
                        <input class="formInput" type="email" id="email" v-model="signInEmail" placeholder="Email" requierd>
                        <label for="email" class="formLabel">Email</label>
                      </div>
                      <div class="formGroup">
                        <input class="formInput" type="password" id="password" v-model="signInPassword" placeholder="Password" requierd>
                        <label for="password" class="formLabel">Password</label>
                      </div>
                  </form>
              </div>
          </div>
      </v-flex>
      <v-flex xs12>
            <button class="generalButton" @click="signIn">Sign In</button>
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
            signInEmail: "",
            signInPassword: "",
            userObject: firebase.auth().currentUser,
            userSignIn: false
        }
    },
    methods: {
        signIn() {
            let email = this.signInEmail
            let password = this.signInPassword

            this.userSignInFailed = false
            firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            if (error) {
                alert("Email or Password is invalid")
                this.userSignInFailed = true
            } 
            }).then(() => {
                const user = firebase.auth().currentUser
                if (user.emailVerified && !this.userSignInFailed) {
                this.$emit("userIsLoggedIn", email)
                } else if (!this.userSignInFailed) {
                    this.verifyUserEmail()
                    console.log("Verification Email sent!")
                    
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

</style>
