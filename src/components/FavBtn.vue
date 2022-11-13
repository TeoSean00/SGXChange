<template>
  <button
    v-if="favourited == true"
    class="btn btn-danger btn-sm text-white d-flex align-items-center p-2"
    v-on:click="addToFav()"
    style="font-size:0.75rem;"
  >
    Added <i class="fa fa-heart px-1" style="color: white"></i>
  </button>
  <button
    v-else
    class="btn btn-outline-danger d-flex align-items-center p-2 text-danger"
    v-on:click="addToFav()"
    id="fav"
    style="font-size:0.75rem;"
  >
    <span id="favText">Favourite<i class="fa fa-heart-o px-1"></i></span>
  </button>

  <!-- Favorite button validation -->
  <!-- <div
    v-if="isLoggedIn == true && favMsg != '' && favourited == false"
    class="alert alert-danger p-2 my-3"
  >
    {{ favMsg }}
  </div>
  <div
    v-if="isLoggedIn == true && favMsg != '' && favourited == true"
    class="alert alert-success p-2 my-3"
  >
    {{ favMsg }}
  </div> -->
  <div
    v-if="isLoggedIn == false && favLog != ''"
    class="alert alert-danger m-0 p-1"
  >
    {{ favLog }}
  </div>
</template>
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fireStore } from "@/service/Firebase/firebaseInit";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

export default {
  name: "FavBtn",
  props: ["uniName"],
  data() {
    return {
      isLoggedIn: false,
      user: "",
      userId: "",
      favourited: false,
      onHover: false,
      favMsg: "",
      favLog: "",
    };
  },
  computed: {},
  mounted() {
    this.checkForUser();
  },
  methods: {
    checkForUser() {
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          this.user = user.auth.currentUser.email;
          this.isLoggedIn = true;
          const getUsers = await getDocs(collection(fireStore, "UserProfiles"));
          getUsers.forEach(async (document) => {
            if (document.data().Email == this.user) {
              const docRef = doc(fireStore, "UserProfiles", document.id);
              var temp = document.data().Favourites;
              if (temp.includes(this.uniName)) {
                this.favourited = true;
              }
            }
          });
        }
      });
    },
    async addToFav() {
      if (this.isLoggedIn) {
        let university = this.uniName;
        const getUsers = await getDocs(collection(fireStore, "UserProfiles"));
        getUsers.forEach(async (document) => {
          if (document.data().Email == this.user) {
            const docRef = doc(fireStore, "UserProfiles", document.id);
            var temp = document.data().Favourites;
            if (!temp.includes(this.uniName)) {
              temp.push(this.uniName);
              await updateDoc(docRef, {
                Favourites: temp,
              });
              this.favourited = true;
              favMsg = `Added ${university} to favourites!`;
              //   alert(`Thank you for adding ${university} to your favourites!`);
            } else {
              temp.splice(temp.indexOf(this.uniName));
              await updateDoc(docRef, {
                Favourites: temp,
              });
              this.favourited = false;
              favMsg = `Removed ${university} from favourites!`;
              //   alert(`Removed ${university} from your favourites list!`);
            }
          }
        });
      } else {
        this.favLog = "Please log in to add to favourites!";
        // alert("Log In First!");
      }
    },
  },
};
</script>
<style scoped>
#fav:hover > span,
#fav:hover > span > i {
  color: white;
  outline: white;
}
</style>