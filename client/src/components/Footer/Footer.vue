<template>
  <v-container text-xs-center class="footerContainer">
    <v-layout row wrap>
      <v-flex xs6>
          <div class="footerInfo">Creative Coding &copy; {{ new Date().getFullYear() }}</div>
      </v-flex>
      <v-flex xs2>
          <div class="footerInfo"><a class="footerLink" href="https://www.facebook.com/creativecodingmau" target="_blank">Facebook <i class="fab fa-facebook-square"></i></a></div>
      </v-flex>
      <v-flex xs2> 
          <div class="footerInfo"><a class="footerLink" href="https://github.com/creativecoding-mau" target="_blank">GitHub <i class="fab fa-github"></i></a></div>
      </v-flex>
      <v-flex xs2>
          <div class="footerInfo"><a class="footerLink" href="https://www.linkedin.com/company/creative-coding-malmo-university" target="_blank">LinkedIn <i class="fab fa-linkedin"></i></a></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    function() {
    }
}
</script>

<style scoped>
.footerContainer {
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    background-color: #ff6b81;
    max-width: 100%;
}

.footerInfo {
    color: #ffffff;
    font-size: 1.2rem;
}

.footerLink {
    color: #ffffff;
    text-decoration: none;
}



</style>