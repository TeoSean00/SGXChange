<template>
    <h1>Sign in with your Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signIn">Submit</button></p>
    <p>Don't have an account?
    <router-link to="/RegisterPage">Register Here</router-link>
    </p>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router'

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: '',
            router: useRouter()
        }
    },
    methods: {
        signIn(){
            signInWithEmailAndPassword(getAuth(), this.email, this.password)
            .then((user) => {
                alert('you have successfully signed in')
                console.log('successfully logged in user is', user)
                this.router.push('/ProfilePage')
            })
            .catch((error) => {
                console.log('error.code')
                alert(error.message)
            })
        }
    }
}

</script>