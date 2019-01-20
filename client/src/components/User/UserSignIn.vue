<template>
    <div>
        <p>
            Email: 
        </p>
        <p>
            <input type="text" v-model="signInEmail">
        </p>
        <p>
            Password: 
        </p>
        <p>
            <input type="text" v-model="signInPassword">
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
            signInEmail: "",
            signInPassword: ""
        }
    },
    methods: {
        signIn() {
            let email = this.signInEmail
            let password = this.signInPassword

            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            });
        }
    }
}
</script>

<style scoped>
input {
    border: 1px solid black;
}
</style>
