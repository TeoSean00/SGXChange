<template>
    <h1>Create a new Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p>Have an account?
    <router-link to="/SignInPage">Sign In</router-link>
    </p>

</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router'

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            router: useRouter()
        }
    },
    methods: {
        register(){
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
            .then((user) => {
                alert('Your account has been successfully created')
                console.log('successfully registered user is', user)
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