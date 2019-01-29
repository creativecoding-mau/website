<template>
  <v-container text-xs-center class="navContainer">
    <v-layout row wrap>
      <v-flex xs12>
        <ul class="navList">
            <router-link to="/" tag="li" active-class="active" exact class="navListItem"><a class="navLink">About</a></router-link>
            <router-link to="/projects" tag="li" active-class="active" class="navListItem"><a class="navLink">Projects</a></router-link>
            <router-link to="/profile" tag="li" active-class="active" class="navListItem"><a class="navLink">Profile</a></router-link>
            <router-link to="/members" tag="li" active-class="active" class="navListItem"><a class="navLink">Members</a></router-link>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ["currentUser"]
}
</script>

<style scoped>

    .navContainer {
        background: #ff7f50;
        max-width: 100%;
    }

    .navList {
        width: 100%;
        display: inline-block;
    }

    .navListItem {
        display: inline-block;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: .1rem;
        padding-bottom: .1rem;
        font-size: 1.8rem;
    }

    .navLink {
        color: #FFF;
        text-decoration: none;
    }
</style>
