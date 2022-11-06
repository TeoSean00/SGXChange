<template>
    <button class="btn btn-primary" v-on:click="addToFav()">Favourite</button>
</template>
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {fireStore} from "@/service/Firebase/firebaseInit"
import { collection, getDocs, where, query, arrayUnion, setDoc, doc, updateDoc } from "firebase/firestore";

export default {
    name: 'FavBtn',
    props: ['uniName'],
    data() {
        return{
            isLoggedIn: false,
            user: '',
            userId:''
        }
    },
    computed:{

    },
    mounted() {
        this.checkForUser()
    },
    methods: {
        checkForUser(){
            onAuthStateChanged(getAuth(), (user) => {
                if(user) {
                    this.user = user.auth.currentUser.email
                    this.isLoggedIn = true
                }
            })
        },
        async addToFav(){
            if (this.isLoggedIn){
                const getUsers = await getDocs(collection(fireStore, "UserProfiles"));
                getUsers.forEach(async (document) => {
                    if(document.data().Email == this.user){
                        const docRef = doc(fireStore, 'UserProfiles' ,document.id);
                        var temp = document.data().Favourites
                        if (!temp.includes(this.uniName)){
                            temp.push(this.uniName)
                            await updateDoc(docRef, {
                                Favourites: temp
                            });
                        }
                    }
                });
            }
            else{
                alert('Log In First!')
            }
        }
    }
}
</script>