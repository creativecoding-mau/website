<template>
  <div id="app">
    <navigation :currentUser="currentUser"/>
    <vue-header />
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
  margin-top: 0;
}

/* Global button style for all buttons */

.generalButton {
    font-size: 1.1rem;
    padding: .75em 2em;
    border: .15rem solid #FFF;
    border-radius: 2rem;
    background: linear-gradient(to right,  #c1212f, #ff6348, #ff9f43);
    color: #FFF;
    transition: all .4s;
    margin: .2rem;
    
}

.generalButton:hover {
    transform: translateY(-.4rem);
}

.generalButton:active {
    transform: translateY(.3rem);
}

/* Global Form style for all input fields */

.formInnerContainer {
    padding: 6rem;
}

.formGroup {
    margin: 1rem;
}

.formLabel {
    color: #424242;
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
    border-bottom: 2px solid #ff6348;
}

.formInput:focus:invalid {
    border-bottom: 2px solid rgb(247, 128, 48);
}

.formInput::-webkit-input-placeholder {
    color: #424242;
}

.formInput:placeholder-shown + .formLabel {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-3.5rem);
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
