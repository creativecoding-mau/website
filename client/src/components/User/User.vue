<template>
  <div>
    <div class="userSignUp buttonContainer" v-if="currentUser === null && userSigningUp">
      <button class="generalButton">Sign Up</button>
      <button class="generalButton" @click="signInOrUp">Already a member? Click here to sign in!</button>
      <user-sign-up/>
    </div>
    <div class="userSignIn" v-if="currentUser === null && userSigningIn">
      <button class="generalButton" @click="signInOrUp">Not a member? Click here to register!</button>
      <user-sign-in @userIsLoggedIn="setCurrentUser"/>
    </div>
    <div class="userChangeBio" v-else-if="currentUser != null">
      <button class="generalButton" @click="updateBio">Account settings</button>
      <user-bio :currentUser="currentUser" v-if="userUpdatingBio"/>
    </div>
    <user-sign-out @userSignedOut="userSignedOut" v-if="currentUser != null"/>
    <user-reset-password :currentUser="currentUser" v-if="currentUser != null"/>
  </div>
</template>



<script>
import UserSignUp from "./UserSignUp.vue";
import UserSignIn from "./UserSignIn.vue";
import UserBio from "./UserBio.vue";
import UserSignOut from "./UserSignOut.vue";
import UserResetPassword from "./UserResetPassword";

const firebase = require("firebase");
import fireBaseKey from "../../config.js";

// Initialize Firebase
const config = {
  apiKey: fireBaseKey,
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
      userSigningIn: true,
      userSigningUp: false,
      userUpdatingBio: false
    };
  },
  methods: {
    setCurrentUser(email) {
      this.currentUser = email;
      console.log(this.currentUser);
    },
    signInOrUp() {
      if (this.userSigningIn) {
        this.userSigningIn = false;
        this.userSigningUp = true;
      } else if (!this.userSigningIn) {
        this.userSigningUp = false;
        this.userSigningIn = true;
      }
    },
    updateBio() {
      if (this.userUpdatingBio) {
        this.userUpdatingBio = false;
      } else {
        this.userUpdatingBio = true;
      }
    },
    userSignedOut() {
      this.currentUser = null;
      console.log(this.currentUser)
      this.userSigningUp = false;
      console.log(this.userSigningUp)
      this.userSigningIn = true;
      console.log(this.userSigningIn)
      this.userUpdatingBio = false;
      console.log(this.userUpdatingBio)
    }
  },
  components: {
    UserSignUp,
    UserSignIn,
    UserBio,
    UserSignOut,
    UserResetPassword
  }
};
</script>

<style>

</style>
