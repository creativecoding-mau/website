<template>
    <div>
        <p>
            Email: 
        </p>
        <p>
            <input type="text" id="email" v-model="signInEmail">
        </p>
        <p>
            Password: 
        </p>
        <p>
            <input type="text" id="password" v-model="signInPassword">
        </p>
        <p>
            <button @click="signIn">Sign In</button>
        </p>
    </div>
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
