<template>
  <div id="app">
    <vue-header />
    <navigation :currentUser="currentUser"/>
     <!-- <user @userLoggedIn="setUser" /> -->
     <router-view></router-view>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
