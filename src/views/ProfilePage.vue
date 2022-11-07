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

<!-- Review component -->
<div class="container-fluid px-4 mt-5">
    <div class="row mb-0">
        <div class="col d-flex align-items-center">
            <h2 class="mb-0">Reviews</h2>
        </div>
        <div class="col d-flex align-items-center justify-content-end">
            <h5 class="text-muted mb-0 me-2">Add a review</h5>
            <button @click="showModal()" type="button" class="btn btn-light py-0 px-2 border-2">
                <h4 class="mb-0">+</h4>
            </button>
            <Modal v-show="isModalOpen" @close="closeModal()" />
        </div>
    </div>

    <div class="row d-flex">
        <div class='col-sm-12 col-md-6 col-lg-4 flex-grow-1 flex-shrink-1' v-for="(review,index) in reviews"
            :key="index">
            <!-- <div class="col-lg-4"> -->
            <div class="card my-4">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title mb-2">{{review.userName}}</h5>
                        <div>
                            <i class="fa fa-thumbs-up text-muted" style="font-size:15px; margin-right:2px"></i>
                            {{review.likes}}
                        </div>
                    </div>
                    <h6 class="card-subtitle mb-2 text-muted">Reviewed University: {{review.uniName}}</h6>
                    <p class="card-text">
                        {{review.info}}
                    </p>
                    <div class="d-flex justify-content-between">
                        <p class="card-text mb-0"><small class="text-muted">{{review.currentTime}}</small></p>
                        <a href="#" class="card-link me-3 mb-0">more info</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router';
import { fireStore } from "@/service/Firebase/firebaseInit"
import { collection, collectionGroup, getDocs, orderBy, query, where } from "firebase/firestore";
import Modal from '../components/Modal.vue';

const auth = getAuth();
const user = auth.currentUser;
var router = useRouter()

// To work on backend next, if no reviews display would u like to add? else display reviews
// Implement add and delete review function, have delete button if current user auth matches with any review email but if no time nvm for delete
// Implement the like ability and update db too if have time
// Settle design and responsiveness of it

export default {
    name: 'Profile',
    components: {
        Modal
    },
    data() {
        return {
            name: '',
            isLoggedIn: false,
            user: auth.currentUser,
            reviews: [],
            uniName: 'Waseda University',
            email: '',
            info: '',
            likes: 0,
            userName: '',
            isModalOpen: false
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
        },

        async getReviewInfo() {
            const name = this.uniName
            const review = `${name} Reviews`
            console.log(name, review)

            let q = query(collectionGroup(fireStore, review))
            let getUniReviews = await getDocs(q)
            getUniReviews.forEach((doc) => {
                console.log(`${name} review info is`, doc.data())
                let review = {}
                review['email'] = doc.data().Email
                review['likes'] = doc.data().Likes
                review['info'] = doc.data().ReviewInfo
                review['uniName'] = doc.data().UniName
                review['userName'] = doc.data().UserName
                review['currentTime'] = doc.data().currentTime
                this.reviews.push(review)
                console.log(review, this.reviews)
            });
        },

        addReview(){
            console.log('add review start')
        },

        like() {
            console.log('like start')
        },

        showModal() {
            console.log('modal opened')
            this.isModalOpen = true;
        },

        closeModal() {
            console.log('modal closed')
            this.isModalOpen = false;
        }
    },
    mounted() {
        this.checkForUser()
    },
    created() {
        this.getReviewInfo()
    }
}

</script>