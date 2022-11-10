<template>
  Profile Page
  <h1 v-if="isLoggedIn">Welcome to SGXchange, {{ name }}</h1>
  <div v-else style="text-align: center; justify-content: space-between">
    <h2>
      You need to be signed in to access the profile page, would you like to
      sign in?
    </h2>

    <div>
      <h4>
        Have an account?
        <router-link to="/SignInPage">Sign In</router-link>
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
            isModalOpen: false
        }
      },
    
    methods: {
        async checkForUser() {
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    this.isLoggedIn = true
                    console.log('logged in user is', user)

                    const name = user.email.split('@')[0]
                    const firstLetter = name.charAt(0)
                    const firstLetterCap = firstLetter.toUpperCase()
                    const remainingLetters = name.slice(1)
                    this.name = firstLetterCap + remainingLetters
                    this.email = user.email
                }
            })
        },
        // Getting current logged in user info
        // async getUserInfo() {
        //     console.log(this.email)
        //     let q = query(
        //         collection(fireStore, "UserProfiles"),
        //         where("documentId", "==", this.email)
        //     );
        //     let userInfo = await getDocs(q);
        //     console.log(userInfo)
        // },
    },
    mounted() {
        this.checkForUser()
        // this.getUserInfo()
    },
    addReview() {
      console.log("add review start");
    },
    like() {
      console.log("like start");
    },
    showModal() {
      console.log("modal opened");
      this.isModalOpen = true;
    },
    closeModal() {
      console.log("modal closed");
      this.isModalOpen = false;
    },
  mounted() {
    this.checkForUser();
  },
  created() {
    this.getReviewInfo();
  },
};
</script>
