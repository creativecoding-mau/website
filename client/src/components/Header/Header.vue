<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
          <h1 class="mainHeader"> Creative Coding </h1>
          <h3 class="subHeader"> Malmö University Society of Computer Science and Media Technology </h3>
          <img class="logo" src="../../assets/cc_icon.png" alt="Creative Coding Logo">
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
    .mainHeader {
        color: #FF7F1F;
        font-size: 5rem;
        font-weight: 200;
        text-transform: uppercase;
    }

    .subHeader {
        font-size: 1.3rem;
        font-weight: 200;
    }

    .logo {
        width: 17rem;
    }
</style>