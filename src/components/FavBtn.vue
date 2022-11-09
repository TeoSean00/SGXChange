<template>
    <button class="btn btn-outline-danger d-flex align-items-center p-2" v-on:click="addToFav()">
        <i v-if="favourited" class="bi bi-heart-filled bg-danger fs-6 mx-1"></i>
        <i v-else class="bi bi-heart fs-6 mx-1"></i>
    Favourite</button>
</template>
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {fireStore} from "@/service/Firebase/firebaseInit"
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

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