<template>
<div>
    <button @click="signOut">
        Sign out
    </button>
</div>
    
</template>

<script>
const firebase = require("firebase")
export default {
    data: function() {
        return {

        }
    },
    methods: {
        signOut() {
            firebase.auth().signOut().then(() => {
            console.log('Signed Out');
            this.$emit("userSignedOut")
            }, function(error) {
            console.error('Sign Out Error', error);
            }
            )}
    }
}
</script>

<style>

</style>
