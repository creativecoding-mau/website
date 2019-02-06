<template>
  <v-container fluid class="navContainer">
    <v-layout row>
      <v-flex shrink pa-1>
            <img class="navLogo" src="../../assets/cc_icon_white.png" alt="Creative Coding Logo">
      </v-flex>
      <v-flex grow pa-1>
        <ul class="navList">
            <router-link to="/" tag="li" active-class="active" exact class="navListItem"><a class="navLink"><i class="fas fa-home"></i> Home</a></router-link>
            <router-link to="/projects" tag="li" active-class="active" class="navListItem"><a class="navLink"><i class="fas fa-tasks"></i> Projects</a></router-link>
            <router-link to="/profile" tag="li" active-class="active" class="navListItem"><a class="navLink"><i class="fas fa-user-circle"></i> Profile</a></router-link>
            <router-link to="/members" tag="li" active-class="active" class="navListItem"><a class="navLink"><i class="fas fa-users"></i> Members</a></router-link>
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
        background: linear-gradient(to bottom right,  rgba(255,61,37,.9) 50%, rgba(255, 99, 72, .9));
        max-width: 100%;
        padding: .2rem;
        position: fixed;
        transition: all .5s;
    }

    .navContainer:hover {
        padding-bottom: 2.8rem;
    }

    .navList {
        width: 100%;
        display: inline-block;
    }

    .navListItem {
        display: inline-block;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .navLink {
        color: #FFF;
        text-decoration: none;
        transition: all 5s;
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    .navListItem:hover {
        text-decoration: underline;
    }

    .navLogo {
        width: 4rem;
    }
</style>
