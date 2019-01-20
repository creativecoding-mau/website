<template>
    <div>
        <user-sign-up />
        <user-sign-in />
    </div>
</template>

<script>
import UserSignUp from "./UserSignUp.vue"
import UserSignIn from "./UserSignIn.vue"
const firebase = require("firebase")
import fireBaseKey from "../../config.js"

// Initialize Firebase
  const config = {
    apiKey: fireBaseKey.fireBaseKey(),
    authDomain: "website-7b764.firebaseapp.com",
    databaseURL: "https://website-7b764.firebaseio.com",
    projectId: "website-7b764",
    storageBucket: "website-7b764.appspot.com",
    messagingSenderId: "1044121166234"
  };
  firebase.initializeApp(config);

export default {
    
    data: function() {
        return {

        }
    },
    methods: {

    },
    components: {
        UserSignUp,
        UserSignIn
    }
}
</script>

<style>

</style>
