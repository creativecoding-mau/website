<template>
    <div>
        <user-sign-up />
        <user-sign-in @userIsLoggedIn="setCurrentUser" />
        <user-bio :currentUser="currentUser" />
    </div>
</template>

<script>
import UserSignUp from "./UserSignUp.vue"
import UserSignIn from "./UserSignIn.vue"
import UserBio from "./UserBio.vue"

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
            currentUser: null,
        }
    },
    methods: {
        setCurrentUser(email) {
            this.currentUser = email
            console.log(this.currentUser)
        }
    },
    components: {
        UserSignUp,
        UserSignIn,
        UserBio
    }
}
</script>

<style>

</style>
