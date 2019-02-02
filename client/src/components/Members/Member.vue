<template>
    <div>
        <member-list :members="members" />
    </div>
</template>

<script>
import MemberList from "./MemberList.vue"
import axios from "axios"

export default {
  data() {
    return {
        members: []
    };
  },
  methods: {
    getUsers() {
      axios
        .get("https://website-7b764.firebaseio.com/Users.json")
        .then(response => {
          const resultArray = [];
          for (let key in response) {
            resultArray.push(response[key]);
          }
          console.log(resultArray[0]);
          this.members = resultArray[0];
        });
    },
  },
  created() {
    this.getUsers()
  },
  components: {
      MemberList
  }
};
</script>

<style>

</style>
