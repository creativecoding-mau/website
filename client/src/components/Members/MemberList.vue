<template>
    <div>
  <v-container text-xs-center class="memberContainer">
    <v-layout row wrap>
      <v-flex xs12>
        <section>
            <div class="innerDiv">
                <div class="innerDiv">
                <div v-masonry transition-duration="1s" item-selector=".memberCard">
                  <div v-masonry-tile class="item" v-for="(member, index) in members" :key=index fit-width="true">
                    <div class="memberCard" :style="{ 'background-image': 'url(' + member.image + ')' }">
                    <div class="innerDiv">
                        <div class="overlay">
                          <h3 class="memberName">{{ member.displayName }}</h3>
                          <h3 class="memberRole"> {{ member.role }}</h3>
                          <i class="fab fa-github projectGithub" style="font-size: 75px;" @click="goToLink(member.github)"></i>
                          <div class="projectDescription" @click="goToLink(member.website)">{{ member.website }}</div>
                        </div>
                    </div>
                    </div>
                    <a class="projects"></a>
                  </div>
                </div> 
                </div>
        </div>
        </section>
      </v-flex>
    </v-layout>
  </v-container>
    </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {};
  },
  methods: {
    goToLink(link) {
      window.open(link, "_blank");
    }
  },
  props: ["members"]
};
</script>

<style scoped>
.memberCard {
  width: 25%;
  height: 250px;
  margin: 0 auto;
  cursor: pointer;
  background-position: center top;
  color: #fff;
  transition: 1s;
  font-size: 1.5vw;
  overflow: hidden;
}
.outerDiv {
  background: #0a949f;
  background: -webkit-linear-gradient(to bottom, #ed5181, #009fff);
  background: linear-gradient(to bottom, #ed5181, #009fff);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.innerDiv {
  min-height: 300px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* padding-top: 150px;
  padding-bottom: 150px; */
}
h2 {
  margin: 0;
  font-size: 7vw;
}
h3 {
  margin: 0;
}
p {
  margin: 0;
}
.projectGithub {
  transition: 1s;
}
.overlay {
  opacity: 0;
  transition: 1s;
  overflow: hidden;
  background: -webkit-linear-gradient(
    to bottom right,
    rgba(255, 61, 37, 0.9) 50%,
    rgba(255, 99, 72, 0.9)
  );
  background: linear-gradient(
    to bottom right,
    rgba(255, 61, 37, 0.9) 50%,
    rgba(255, 99, 72, 0.9)
  );
  height: 100%;
}
.memberCard:hover .overlay {
  opacity: 1;
  transition: 1s;
  margin: 0 auto;
}
.memberCard:hover {
  color: #fff;
  transition: 1s;
}
.memberContainer {
  min-width: 100%;
    background: linear-gradient(to bottom,  rgba(255,61,37,.9) 50%, rgba(255, 99, 72, .9));
    -webkit-clip-path: polygon(0 0, 100% 11%, 100% 100%, 0 89%);
    clip-path: polygon(0 0, 100% 11%, 100% 100%, 0 89%);
    padding-right: 0;
    padding-left: 0;
    min-height: 600px;
}
section {
  padding-top: 50px;
  padding-bottom: 50px;
}
@media only screen and (max-width: 1000px) {
  .memberCard {
    width: 50%;
    font-size: 15px;
  }
  .innerDiv {
    padding-top: 0;
    padding-bottom: 0;
  }
  .projectName {
    font-size: 20px;
  }
}
</style>