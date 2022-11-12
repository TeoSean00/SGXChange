<template>
  <!-- Profile Page -->
<div v-if="isLoggedIn">
    <div class="container-fluid">
        <div class="row mt-2">
            <h1>Welcome to SGXchange, {{ name }}</h1>
        </div>

        <div class="row mt-3">
            <div class="col"><h2>Your Profile Page:</h2></div>
        </div>

        <div class="row mt-4">
            <h3 class="mb-2">Your Details:</h3>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">School:</h5>
                        <h5 class="card-text" style="font-weight:normal">{{ userDetails.School }}</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">First Degree:</h5>
                        <h5 class="card-text" style="font-weight:normal">{{ userDetails.FirstDegree }}</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Second Degree:</h5>
                        <h5 style="font-weight:normal">{{ userDetails.SecondDegree }}</h5>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <h3 class="mb-2">Your Favourites:</h3>
            <div class="row">
                <div v-if="userFavDetails.length > 0">
                    <div v-for="(fav, index) in userFavDetails" :key="index">
                        <div class="col">
                            <div class="card">
                                <img class="card-img-top" style="width: 100%; height: 12rem; object-fit: cover;"
                                :src="fav.UniImageLink1" alt="">
                                <div class="card-body">
                                    <h6 style="height:2.5rem;color:black;display:flex;align-items: center;"> {{ fav.HostUniversity }} </h6>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item uniitem">Country: {{ fav.Country }}</li>
                                        <li class="list-group-item uniitem">Region: {{ fav.Region }}</li>
                                        <li class="list-group-item uniitem">
                                            Minimum gpa: {{ fav.gpaReq }}
                                        </li>
                                    </ul>
                                    <div class="pull-right">
                                        <router-link :to="`/universityInfo/` + fav.HostUniversity">
                                            Go to university
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h5 style="font-weight: normal">You do not have any favourited universities yet!</h5>
                    <h6 style="font-weight: normal">
                        Click <router-link :to="`/UniversityPage/`">here</router-link> to go to the universities page to find a university to favourite!
                    </h6>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <h3 class="mb-2">Your Reviews:</h3>
            <div v-if="userReviewDetails.length > 0">
                <div v-for="(review, index) in userReviewDetails" :key="index">
                    <div class="col">
                        <div class="card my-3">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title mb-2">{{ review.UniName }}</h5>
                                    <div>
                                        <i class="fa fa-thumbs-up text-muted" style="font-size:15px; margin-right:2px"></i>
                                        {{ review.Likes }}
                                    </div>
                                </div>
                                <h6 class="card-text" style="font-weight: normal">
                                    {{ review.ReviewInfo }}
                                </h6>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text mb-0">
                                        <small class="text-muted">{{
                                                review.currentTime
                                        }}</small>
                                    </p>
                                    <router-link :to="`/universityInfo/` + review.UniName">Go to university</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h5 style="font-weight: normal">You have not left any university a review yet!</h5>
                    <h6 style="font-weight: normal">
                        Click <router-link :to="`/UniversityPage/`">here</router-link> to go to the universities page to find a university to leave a review for!
                    </h6>
            </div>
        </div>
    </div>
</div>

  <div v-else style="text-align: center; justify-content: space-between">
    <h2>
      You need to be signed in to access the profile page, would you like to
      sign in?
    </h2>
    <div class="mt-4">
      <h4>
        Have an account?
        <router-link to="/SignInPage">Sign In Here</router-link>
      </h4>
      <h4>
        Don't have an account?
        <router-link to="/RegisterPage">Register Here</router-link>
      </h4>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router';
import { fireStore } from "@/service/Firebase/firebaseInit"
import { collection, collectionGroup, getDocs, orderBy, query, where, documentId } from "firebase/firestore";
import Modal from '../components/Modal.vue';

const auth = getAuth();
const user = auth.currentUser;
var router = useRouter();

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
            uniName: '',
            email: '',
            info: '',
            likes: 0,
            userName: '',
            isModalOpen: false,
            userDetails: {},
            userReviewDetails: [],
            userFavDetails: [],
        }
      },

    methods: {
        async checkForUser() {
            onAuthStateChanged(getAuth(), async (user) => {
                if (user) {
                    this.isLoggedIn = true
                    console.log('logged in user is', user)

                    const name = user.email.split('@')[0]
                    const firstLetter = name.charAt(0)
                    const firstLetterCap = firstLetter.toUpperCase()
                    const remainingLetters = name.slice(1)
                    this.name = firstLetterCap + remainingLetters
                    this.email = user.email
                    console.log('email retrieved', this.email)

                    // To query user details based on unique email
                    let q = query(
                        collection(fireStore, "UserProfiles")
                    );
                    let userInfo = await getDocs(q);
                    userInfo.forEach((doc) => {
                        let tempEmail = doc.data().Email
                        if(tempEmail == this.email){
                            this.userDetails = doc.data()
                        }
                    })
                    console.log('user details retrieved and saved', this.userDetails)

                    // To get nested user review collection with unique user email
                    let targetEmail = this.email
                    let userReviewCollection = `UserProfiles/${targetEmail}/userReviews`
                    let q2 = query(
                        collection(fireStore, userReviewCollection)
                    );
                    let userReviewInfo = await getDocs(q2);
                    userReviewInfo.forEach((doc) => {
                        this.userReviewDetails.push(doc.data())
                    })
                    console.log(this.userReviewDetails)

                    // To get uni details for the favourited unis
                    console.log('favourites', this.userDetails.Favourites)
                    let favourites = this.userDetails.Favourites
                    for(let fav of favourites){
                        console.log(fav)
                        let q3 = query(
                        collection(fireStore, 'Universities2')
                        );
                        let userFavInfo = await getDocs(q3);
                        userFavInfo.forEach((doc) => {
                            if(fav == doc.id){
                                this.userFavDetails.push(doc.data())
                            }
                        })
                    }
                    console.log('userFavDetails is', this.userFavDetails)
                }
            })
        },
    },
    created() {
        this.checkForUser()
    }
};
</script>
