<template>
    Profile Page
    <h1 v-if="isLoggedIn">Welcome to SGXchange, {{name}}</h1>
    <div v-else style="text-align: center; justify-content: space-between">
        <h2>
            You need to be signed in to access the profile page, would you like to sign in?
        </h2>

        <div>
            <h4>
                Have an account?
                <router-link to="/SignInPage">Sign In</router-link>
            </h4>
        </div>

        <div>
            <h4>
                Don't have an account?
                <router-link to="/RegisterPage">Register Here</router-link>
            </h4>
        </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router'

const auth = getAuth();
const user = auth.currentUser;
var router = useRouter()

export default {
    name: 'Profile',
    data() {
        return {
            name: '',
            isLoggedIn: false,
            user: auth.currentUser
        }
    },
    methods: {
        checkForUser(){
            onAuthStateChanged(getAuth(), (user) => {
                if(user) {
                    this.isLoggedIn = true
                    console.log('logged in user from previous page is', user)

                    const name = user.email.split('@')[0]
                    const firstLetter = name.charAt(0)
                    const firstLetterCap = firstLetter.toUpperCase()
                    const remainingLetters = name.slice(1)
                    this.name = firstLetterCap + remainingLetters
                }
            })
        }
    },
    mounted() {
        this.checkForUser()
    }      
}

</script>