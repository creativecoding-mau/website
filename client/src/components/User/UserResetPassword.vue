<template>
    <div>
        <button @click="resetPassword">
            RESET PASSWORD
        </button>
    </div>
</template>

<script>
const firebase = require("firebase")

export default {
    data: function() {

    },
    methods: {
        resetPassword(email) {
            const auth = firebase.auth();
            auth.sendPasswordResetEmail(this.currentUser).then(function() {
            // Email sent.
            }).catch(function(error) {
            // An error happened.
            });
        }
    },
    props: ["currentUser"]
}
</script>

<style>

</style>
