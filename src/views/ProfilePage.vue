<template>
  <!-- template code for profile page -->
  <div v-if="isLoggedIn">
    <section class="section about-section gray-bg" id="about">
      <div class="container">
        <div class="row align-items-end flex-row mb-5">
          <div class="col-lg-6 d-flex">
            <div class="about-avatar my-4 img-fluid">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                title=""
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-text go-to">
              <h3 class="dark-color">{{ name }}</h3>
              <h6 class="theme-color">
                {{ userDetails.School }}
              </h6>
              <p>{{ userDetails.FirstDegree }} Student</p>
              <div class="row about-list">
                <div class="col-md-6">
                  <div class="media my-2">
                    <label>Birthday</label>
                    <p>4th April 1999</p>
                  </div>
                  <div class="media my-2">
                    <label>Age</label>
                    <p>23 Yr</p>
                  </div>
                  <div class="media my-2">
                    <label>Country</label>
                    <p>Singapore</p>
                  </div>
                  <div class="media my-2">
                    <label>Address</label>
                    <p>Singapore</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="media my-2">
                    <label>E-mail</label>
                    <p>{{ email }}</p>
                  </div>
                  <div class="media my-2">
                    <label>Phone</label>
                    <p>96767765</p>
                  </div>
                  <div class="media my-2">
                    <label>1st Major</label>
                    <p>{{ userDetails.FirstDegree }}</p>
                  </div>
                  <div class="media my-2">
                    <label>2nd Degree</label>
                    <p>{{ secondDegree }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="counter mt-2 mb-4">
          <div class="row">
            <div class="col-6 col-lg-6">
              <div class="count-data text-center">
                <h6 class="count h2">{{ userFavDetails.length }}</h6>
                <p class="m-0px font-w-600">Favorites</p>
              </div>
            </div>
            <div class="col-6 col-lg-6">
              <div class="count-data text-center">
                <h6 class="count h2">{{ userReviewDetails.length }}</h6>
                <p class="m-0px font-w-600">Reviews</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Add the favorited universities here and the reviews -->
        <div class="container-fluid">
          <div v-if="userFavDetails.length > 0" class="">
            <h6 class="theme-color lead mt-5">Your Favorites</h6>
            <!-- MY VERSION OF THE UNI CARD -->
            <div class="d-flex flex-wrap">
              <div
                v-for="(fav, index) in userFavDetails"
                :key="index"
                class="m-2"
                style="width: 300px"
              >
                <div
                  class="package-item bg-white fav-card"
                  style="height: 100%"
                >
                  <img
                    class="img-fluid card-img-top"
                    :src="fav.UniImageLink1"
                    alt=""
                  />
                  <div class="pt-2 px-2 pb-2">
                    <a
                      class="h5 text-decoration-none"
                      style="
                        color: #002766;
                        display: flex;
                        align-items: center;
                        height: 5rem;
                        font-weight: 600;
                      "
                      >{{ fav.HostUniversity }}</a
                    >
                    <div class="d-flex justify-content mb-2">
                      <span class="mx-2" style="color: black"
                        ><p
                          class="fa fa-map-marker-alt mr-2"
                          style="color: black"
                        ></p>
                        {{ fav.Country }}</span
                      >
                      <span class="mx-2" style="color: black"
                        ><p
                          class="fa-solid fa-earth-americas mr-2"
                          style="color: black"
                        ></p>
                        {{ fav.Region }}</span
                      >
                    </div>
                    <div class="mb-2">
                      <span class="mx-2" style="color: black"
                        ><p class="fa fa-user mr-2" style="color: black"></p>
                        Min GPA: {{ fav.gpaReq }}</span
                      >
                    </div>
                    <div class="mb-2 mx-2" style="color: #096dd9">
                      <router-link :to="`/universityInfo/` + fav.HostUniversity"
                        ><p class="fa-sharp fa-solid fa-school mr-2"></p>
                        Go to university
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h6 class="mt-5 theme-color lead mb-5">Your Favourites</h6>
            <p class="text-muted">
              You do not have any favourited universities yet!
            </p>
            <h6>
                <router-link class="btn btn-success" style="background-color:#2fc78a;border:none;" :to="`/UniversityPage/`">Explore universities</router-link>
            </h6>
          </div>
        </div>
        <div class="container-fluid">
          <!-- Review Section -->
          <div v-if="userReviewDetails.length > 0">
            <h6 class="theme-color lead my-5">Your Reviews</h6>
            <div class="d-flex flex-wrap">
              <div
                v-for="(review, index) in userReviewDetails"
                :key="index"
                style="width: 30rem;"
                class="m-2"
              >
                <div class="">
                  <div class="card my-3 package-item">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <h5 class="card-title mb-2">{{ review.UniName }}</h5>
                        <div>
                          <i
                            class="fa fa-thumbs-up text-muted"
                            style="font-size: 15px; margin-right: px"
                          ></i>
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
                        <router-link :to="`/universityInfo/` + review.UniName"
                          >Go to review</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h6 class="mt-5 theme-color lead my-5">Your Reviews</h6>
            <p class="text-muted">
              You have not left any university a review yet!
            </p>
            <h6>
                <router-link class="btn btn-success" style="background-color:#2fc78a;border:none;" :to="`/UniversityPage/`">Explore universities</router-link>
            </h6>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else style="text-align: center; justify-content: space-between">
    <h2>
      You need to be signed in to access the profile page, would you like to
      sign in?
    </h2>
    <div class="mt-4">
      <h4>
        Have an account?
        <router-link to="/SignInPage" class="redirect">Sign In Here</router-link>
      </h4>
      <h4>
        Don't have an account?
        <router-link to="/RegisterPage" class="redirect">Register Here</router-link>
      </h4>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { fireStore } from "@/service/Firebase/firebaseInit";
import { collection, getDocs, query, Firestore } from "firebase/firestore";
import Modal from "../components/Modal.vue";

const auth = getAuth();
const user = auth.currentUser;
var router = useRouter();

export default {
  name: "Profile",
  components: {
    Modal,
  },
  data() {
    return {
      name: "",
      isLoggedIn: false,
      user: auth.currentUser,
      reviews: [],
      uniName: "",
      email: "",
      info: "",
      likes: 0,
      userName: "",
      isModalOpen: false,
      userDetails: {},
      userReviewDetails: [],
      userFavDetails: [],
    };
  },

  methods: {
    async checkForUser() {
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          this.isLoggedIn = true;
          // console.log("logged in user is", user);

          const name = user.email.split("@")[0];
          const firstLetter = name.charAt(0);
          const firstLetterCap = firstLetter.toUpperCase();
          const remainingLetters = name.slice(1);
          this.name = firstLetterCap + remainingLetters;
          this.email = user.email;
          // console.log("email retrieved", this.email);

          // To query user details based on unique email
          let q = query(collection(fireStore, "UserProfiles"));
          let userInfo = await getDocs(q);
          userInfo.forEach((doc) => {
            let tempEmail = doc.data().Email;
            if (tempEmail == this.email) {
              this.userDetails = doc.data();
            }
          });
          // console.log("user details retrieved and saved", this.userDetails);

          // To get nested user review collection with unique user email
          let targetEmail = this.email;
          let userReviewCollection = `UserProfiles/${targetEmail}/userReviews`;
          let q2 = query(collection(fireStore, userReviewCollection));
          let userReviewInfo = await getDocs(q2);
          userReviewInfo.forEach((doc) => {
            this.userReviewDetails.push(doc.data());
          });
          // console.log(this.userReviewDetails);

          // To get uni details for the favourited unis
          // console.log("favourites", this.userDetails.Favourites);
          let favourites = this.userDetails.Favourites;
          for (let fav of favourites) {
            // console.log(fav);
            let q3 = query(collection(fireStore, "Universities2"));
            let userFavInfo = await getDocs(q3);
            userFavInfo.forEach((doc) => {
              if (fav == doc.id) {
                this.userFavDetails.push(doc.data());
              }
            });
          }
          // console.log("userFavDetails is", this.userFavDetails);
        }
      });
    },
  },
  created() {
    this.checkForUser();
  },
  computed: {
    secondDegree() {
      if (this.userDetails.SecondDegree == "default") {
        return "NA";
      }
    },
  },
};
</script>

<style scoped>
.redirect{
  color: #1890ff;
}

.profile-page {
  min-height: 70vh;
}

body {
  color: #6f8ba4;
  margin-top: 20px;
}
.section {
  padding: 100px 0;
  position: relative;
}

img {
  max-width: 100%;
}
img {
  vertical-align: middle;
  border-style: none;
}
/* About Me
---------------------*/
.about-text h3 {
  font-size: 45px;
  font-weight: 700;
  margin: 0 0 6px;
}
@media (max-width: 767px) {
  .about-text h3 {
    font-size: 35px;
  }
}
.about-text h6 {
  font-weight: 600;
  margin-bottom: 15px;
}
@media (max-width: 767px) {
  .about-text h6 {
    font-size: 18px;
  }
}
.about-text p {
  font-size: 18px;
  max-width: 450px;
}
.about-text p mark {
  font-weight: 600;
  color: #002766;
}

.about-list {
  padding-top: 10px;
}
.about-list .media {
  padding: 5px 0;
}
.about-list label {
  color: #20247b;
  font-weight: 600;
  width: 88px;
  margin: 0;
  position: relative;
}

.about-list p {
  margin: 0;
  font-size: 15px;
}

@media (max-width: 991px) {
  .about-avatar {
    margin-top: 30px;
  }
}

.about-section .counter {
  padding: 22px 20px;
  background: #f5f5f5;
}
.about-section .counter .count-data {
  margin-top: 10px;
  margin-bottom: 10px;
}
.about-section .counter .count {
  font-weight: 700;
  color: #20247b;
  margin: 0 0 5px;
}
.about-section .counter p {
  font-weight: 600;
  margin: 0;
}

.theme-color {
  color: #1890ff;
}
.dark-color {
  color: #20247b;
}

.card-img-top {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.package-item {
  border: 1px solid #e6f7ff;
  transition: 0.5s;
}

.package-item:hover {
  box-shadow: 0 0 30px #e6f7ff;
}
</style>