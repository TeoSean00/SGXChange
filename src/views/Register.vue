<template>
  <!-- <h1>Create a new Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p>Have an account?
    <router-link to="/SignInPage">Sign In</router-link>
    </p> -->

  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <!-- remove validateform -->
        <div class="login100-form">
          <span class="login100-form-title p-b-43"> Register </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input100"
              type="text"
              name="email"
              v-model="email"
              placeholder=" "
              required
            />
            <span class="focus-input100"></span>
            <span class="label-input100">Email</span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              v-model="password"
              placeholder=" "
              required
            />
            <span class="focus-input100"></span>
            <span class="label-input100">Password</span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="School is required"
          >
            <!-- <input class="input100" type="text" name="pass" v-model="school" placeholder=" " required/> -->
            <select
              class="input100 form-select bootstrap-select"
              v-model="selectedUni"
              required
            >
              <option value="default" selected>Select A University</option>
              <template v-for="uni in allUniversities" :key="uni">
                <option v-if="uni == 'Singapore Management University'" :value="uni">
                {{ uni }}
                </option>
                <option v-else :value="uni" class="bg-light" disabled>
                {{ uni }}
                </option>
              </template>
            </select>
            <span class="focus-input100"></span>
            <span class="label-input100">School</span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="First Degree is required"
          >
            <select
              class="input100 form-select"
              style="outline: none !important, border: none "
              v-model="selectedFirstDegree"
              required
            >
              <option value="default" selected>Select Your First Degree</option>
              <option v-for="degree in degrees" :key="degree" :value="degree">
                {{ degree }}
              </option>
            </select>
            <span class="focus-input100"></span>
            <span class="label-input100">First Degree</span>
          </div>

          <div class="wrap-input100 validate-input">
            <select class="input100 form-select" v-model="selectedSecondDegree">
              <option value="default" selected>
                Select Your Second Degree
              </option>
              <template v-for="degree in degrees" :key="degree">
                <option v-if="degree != selectedFirstDegree" :value="degree">
                  {{ degree }}
                </option>
              </template>
            </select>
            <span class="focus-input100"></span>
            <span class="label-input100">Second Degree</span>
          </div>

          <div class="container-login100-form-btn">
            <button @click="register()" class="login100-form-btn">Register</button>
          </div>
          <!-- <p class="register">
                Don't have an account?
                <div
                ><router-link to="/RegisterPage">Register Here</router-link></div
                >
            </p> -->
        </div>
        <div class="login100-more"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { fireStore } from "@/service/Firebase/firebaseInit";
import { collection, addDoc, getDocs, query, setDoc, Doc } from "firebase/firestore";
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      router: useRouter(),
      current: null,
      firstDegree: "",
      secondDegree: "",
      allUniversities: [],
      selectedUni: "default",
      degrees: [],
      selectedFirstDegree: "default",
      selectedSecondDegree: "default",
    };
  },
  mounted() {
    this.getUniversities();
    this.getDegree();
  },
  methods: {
    async getDegree() {
      let q = query(collection(fireStore, "DegreeToBaskets"));
      let getDegreeUni = await getDocs(q);
      getDegreeUni.forEach((doc) => {
        this.degrees.push(doc.id);
      });
      console.log(this.degrees);
    },

    async getUniversities() {
      const getAllUni = await getDocs(collection(fireStore, "Universities2"));
      getAllUni.forEach((doc) => {
        this.allUniversities.push(doc.data().HostUniversity);
      });
    },

    register() {
      if (this.selectedUni == "default") {
        alert("Please Enter a University");
      } else if (this.selectedFirstDegree == "default") {
        alert("Please Enter a First Degree");
      } else {
        createUserWithEmailAndPassword(getAuth(), this.email, this.password)
          .then((user) => {
            //Adding to db
            const dbRef = collection(fireStore, "UserProfiles");
            const data = {
              UserName: this.email.split("@")[0],
              Email: this.email,
              FirstDegree: this.selectedFirstDegree,
              SecondDegree: this.selectedSecondDegree,
              School: this.selectedUni,
              Favourites: [],
              Reviews: [],
            };
            addDoc(dbRef, data)
              .then((docRef) => {
                console.log("Document has been added successfully");
              })
              .catch((error) => {
                console.log(error);
              });

            alert("Your account has been successfully created");
            console.log("successfully registered user is", user);
            this.router.push("/ProfilePage");
          })
          .catch((error) => {
            console.log("error.code");
            alert(error.message);
          });
      }
    },
    // onEmail() {
    //     if (this.current)
    //         this.current.pause();
    //     this.current = anime({
    //         targets: "path",
    //         strokeDashoffset: {
    //             value: 0,
    //             duration: 700,
    //             easing: "easeOutQuart",
    //         },
    //         strokeDasharray: {
    //             value: "240 1386",
    //             duration: 700,
    //             easing: "easeOutQuart",
    //         },
    //     });
    // },
    // onPassword() {
    //     if (this.current)
    //         this.current.pause();
    //     this.current = anime({
    //         targets: "path",
    //         strokeDashoffset: {
    //             value: -336,
    //             duration: 700,
    //             easing: "easeOutQuart",
    //         },
    //         strokeDasharray: {
    //             value: "240 1386",
    //             duration: 700,
    //             easing: "easeOutQuart",
    //         },
    //     });
    // },
    // onSubmit() {
    //     if (this.current)
    //         this.current.pause();
    //     this.current = anime({
    //         targets: "path",
    //         strokeDashoffset: {
    //             value: -730,
    //             duration: 700,
    //             easing: "easeOutQuart",
    //         },
    //         strokeDasharray: {
    //             value: "530 1386",
    //             duration: 700,
    //             easing: "easeOutQuart",
    //         },
    //     });
    // },
  },
};
</script>


<style scoped>
.bootstrap-select {
  outline: none !important;
}

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
}

.wrap-login100 {
  width: 100%;
  background: #fff;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row-reverse;
  /* position: relative; */
}

.login100-more {
  width: calc(100% - 560px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  top: 0px;
  left: auto;
  z-index: 1;
  background-image: url("../assets/SMU_1.jpeg");
}

.sch-img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
}

/*==================================================================
[ Form ]*/

.login100-more::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
}

.login100-form {
  width: 560px;
  min-height: 100vh;
  display: block;
  background-color: #f7f7f7;
  padding: 173px 55px 55px 55px;
}

.login100-form-title {
  width: 100%;
  display: block;
  font-size: 30px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 22px;
}

/*------------------------------------------------------------------
[ Input ]*/

.wrap-input100 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 100%;
  height: 80px;
  position: relative;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 10px;
}

.label-input100 {
  font-size: 18px;
  color: #999999;
  line-height: 1.2;

  display: block;
  position: absolute;
  pointer-events: none;
  width: 100%;
  padding-left: 24px;
  left: 0;
  top: 30px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input100 {
  display: block;
  width: 100%;
  background: transparent;
  /* border-color: transparent; */
  font-size: 18px;
  color: #555555;
  line-height: 1.2;
  padding: 0 26px;
  border: 0px;
}

input.input100 {
  height: 100%;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

/*---------------------------------------------*/

.focus-input100 {
  position: absolute;
  display: block;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  top: -1px;
  left: -1px;
  pointer-events: none;
  border: 1px solid #6675df;
  border-radius: 10px;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  -webkit-transform: scaleX(1.1) scaleY(1.3);
  -moz-transform: scaleX(1.1) scaleY(1.3);
  -ms-transform: scaleX(1.1) scaleY(1.3);
  -o-transform: scaleX(1.1) scaleY(1.3);
  transform: scaleX(1.1) scaleY(1.3);
}

.input100:focus + .focus-input100 {
  visibility: visible;
  opacity: 1;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.input100:focus {
  height: 48px;
}

.input100:focus + .focus-input100 + .label-input100 {
  top: 14px;
  font-size: 13px;
}

.input100:not(:placeholder-shown) + .focus-input100 + .label-input100 {
  top: 14px;
  font-size: 13px;
}

.input100:not(:placeholder-shown) {
  height: 48px !important;
}

/*
.has-val {
  height: 48px !important;
}

.has-val + .focus-input100 + .label-input100 {
  top: 14px;
  font-size: 13px;
} */

/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 22px;
}

.login100-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: #6675df;
  border-style: none;

  font-size: 12px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login100-form-btn:hover {
  background: #333333;
}

/*------------------------------------------------------------------
[ Responsive ]*/

@media (max-width: 992px) {
  .login100-form {
    width: 50%;
    padding-left: 30px;
    padding-right: 30px;
  }

  .login100-more {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .login100-form {
    width: 100%;
  }

  .login100-more {
    display: none;
  }
}

@media (max-width: 576px) {
  .login100-form {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 70px;
  }
}

/*------------------------------------------------------------------
[ Alert validate ]*/

.validate-input {
  position: relative;
}

/* @media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
} */

.input100:focus + .focus-input100 {
  visibility: visible;
  opacity: 1;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

/* This is the original styling */

.register {
  padding-top: 20px;
}

label {
  color: #c2c2c5;
  display: block;
  font-size: 14px;
  height: 16px;
  margin-top: 20px;
  margin-bottom: 5px;
}

input {
  border: 0;
  outline: none !important;
}
</style>