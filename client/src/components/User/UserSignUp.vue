<template>
    <div>
        <p>
            {{ emailMessage }}
        </p>
        <p>
            <input type="text" name="" v-model="userEmail">
        </p>
        <p>
            {{ passwordMessage }}
        </p>
        <p>
            <input type="text" name="" v-model="userPassword">
        </p>
        <p>
            <button @click="createNewUser">Submit</button>
        </p>
    </div>
</template>

<script>
import fireBaseKey from "../../config.js"
const firebase = require("firebase")

export default {
    data: function() {
        return {
            userEmail: "felixmorau@gmail.com",
            userPassword: "felix123",
            isPasswordInvalid: true,
            isEmailInvalid: true,
            emailMessage: "Enter a valid email!",
            passwordMessage: "Enter a valid password!"
        }
    },
    methods: {
        createNewUser() {
            let email = this.userEmail
            let password = this.userPassword

            if (this.validateEmail(email)) {
                console.log("email is vaild!")
                if (this.validatePassword(password)) {
                    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                });
                } else {
                    console.log("password is to short")
                }
            } else {
                console.log("bad Email try again")
            }
        },
        validateEmail(email) {
            // Method for validating the email
            var validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return validation.test(String(email).toLowerCase());
        },
        validatePassword(password) {
            if (password.length < 6) {
                return false
            } else {
                return true
            }
        },
        realTimeEmailCheck() {
            setInterval(() => {
                let email = this.userEmail
                if (this.validateEmail(email)) {
                    this.emailMessage = "Valid Email!"
                    this.isEmailInvalid = false
                } else {
                    this.emailMessage = "Enter an email in the format name@example.com"
                    this.isEmailInvalid = true
                }
            }, 1*1000)
        },
        realTimePasswordCheck() {
            setInterval(() => {
                let password = this.userPassword
                if (this.validatePassword(password)) {
                    this.passwordMessage = "Valid password!"
                    this.isPasswordInvalid = false
                } else {
                    this.passwordMessage = "The password needs to be longer than 5 characters!"
                    this.isPasswordInvalid = true
                }
            }, 1*1000)
        }
    },
    created() {
        this.realTimeEmailCheck()
        this.realTimePasswordCheck()
    }
}
</script>

<style scoped>
input {
    border: 1px solid black;
}

</style>
