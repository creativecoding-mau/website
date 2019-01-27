<template>
    <div>
        <section>
            <div class="innerDiv">
                <div v-masonry transition-duration="1s" item-selector=".userCard">
                  <div v-masonry-tile v-for="(user, index) in users" :key=index fit-width="true">
                    <div class="userCard">
                    <div class="innerDiv">
                    <h3 class="userName">{{ user.displayName }}</h3>
                        <div class="userWebsite" @click="goToLink(user.website)" >{{ user.website }}</div>
                        <i class="fab fa-github projectGithub" @click="goToLink(user.github)" style="font-size: 75px;"></i>
                    </div>
                    </div>
                    <a class="projects"></a>
                  </div>
                </div> 
        </div>
        </section>
    </div>
</template>

<script>
const axios = require("axios")
export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
        getUsers() {
            axios.get("https://website-7b764.firebaseio.com/Users.json")
            .then(response => {
                const resultArray = [];
                for (let key in response) {
                    resultArray.push(response[key])
                }
                console.log(resultArray[0])
                this.users = resultArray[0]
            })
        },
        goToLink(link) {
            window.open(link, "_blank" )
        }
    },
    created() {
        this.getUsers()
    }
}
</script>

<style scoped>
.userCard {
  width: 25%;
  height: 250px;
  margin: 0 auto;
  color: #ED5181;
  overflow: hidden;
  background-color: #000;
}
.innerDiv {
  min-height: 300px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  
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
@media only screen and (max-width: 1000px) {
  .projectCard {
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