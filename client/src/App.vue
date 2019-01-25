<template>
  <div id="app">
    <vue-header />
    <navigation :currentUser="currentUser"/>
     <!-- <user @userLoggedIn="setUser" /> -->
     <transition name="fade">
      <router-view></router-view>
     </transition>
     <!-- <vue-footer /> -->
  </div>
</template>

<script>
import VueHeader from "./components/Header/Header.vue"
import VueFooter from "./components/Footer/Footer.vue"
import User from "./components/User/User.vue"
import Navigation from "./components/Navigation/Navigation.vue"

export default {
  name: 'app',
  data() {
    return {
      currentUser: null
    }
  },
  components: {
    VueHeader,
    VueFooter,
    User,
    Navigation
  },
  methods: {
    setUser(user) {
      this.currentUser = user;
    }
  }
}
</script> 

<style>

/*  
----------------------------------------
Style components for global styling
----------------------------------------
 */

 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}

/* Global button style for all buttons */

.generalButton {
    padding: .75em 2em;
    border: .15rem solid white;
    border-radius: .75rem;
    background: #ff4757;
    color: white;
    transition: all .4s;
}

.generalButton:hover {
    font-size: 1.1rem;
    background: white;
    border: .15rem solid #ff4757;
    color: #ff4757;
}

/* Global Form style for all input fields */

.formInnerContainer {
    padding: 6rem;
}

.formGroup {
    margin: 1rem;
}

.formLabel {
    color: grey;
    font-size: 1.4rem;
    font-weight: 200;
    margin-right: 11rem;
    margin-top: .7rem;
    display: block;
    transition: all .4s;
}

.formInput {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 2px;
    background-color: rgb(255, 255, 255, .2) !important;
    border-top: 2px solid #424242;
    border-bottom: 2px solid #424242;
}

.formInput:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(#424242, .1);
    border-bottom: 2px solid rgb(81, 177, 81);
}

.formInput:focus:invalid {
    border-bottom: 2px solid rgb(247, 128, 48);
}

.formInput::-webkit-input-placeholder {
    color: grey;
}

.formInput:placeholder-shown + .formLabel {
    opacity: 0;
    visibility: hidden;
    transform: translateY(3.5rem);
}

input-internal-autofill-selected {
    background-color: rgb(255, 255, 255, .2) !important;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    height: 0px;
}

</style>
