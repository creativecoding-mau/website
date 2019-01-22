<template>
  <div id="app">
    <vue-header />
     <user />
     <vue-footer />
  </div>
</template>

<script>
import VueHeader from "./components/Header/Header.vue"
import VueFooter from "./components/Footer/Footer.vue"
import User from "./components/User/User.vue"

export default {
  name: 'app',
  components: {
    VueHeader,
    VueFooter,
    User
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
