<template>
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
            data-validate="Password is required"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              v-model="confirm_password"
              placeholder=" "
              required
            />
            <span class="focus-input100"></span>
            <span class="label-input100">Confirm Password</span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="School is required"
          >
            <select
              class="input100 bootstrap-select"
              v-model="selectedUni"
              required
            >
              <option value="default" selected></option>
              <option value="Singapore Management University">
                Singapore Management University
              </option>
              <template v-for="uni in allUniversities" :key="uni">
                <option
                  v-if="uni != 'Singapore Management University'"
                  :value="uni"
                  disabled
                >
                  {{ uni }}
                </option>
              </template>
            </select>
            <span class="focus-input100"></span>

            <span v-if="selectedUni == 'default'" class="selectLabelInput100"
              >Select University</span
            >
            <span v-else class="label-input100">University</span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="First Degree is required"
          >
            <select
              class="input100"
              style="outline: none !important, border: none "
              v-model="selectedFirstDegree"
              required
            >
              <option value="default" selected></option>
              <option v-for="degree in degrees" :key="degree" :value="degree">
                {{ degree }}
              </option>
            </select>
            <span class="focus-input100"></span>

            <span
              v-if="selectedFirstDegree == 'default'"
              class="selectLabelInput100"
              >Select Your Degree</span
            >
            <span v-else class="label-input100">First Degree</span>
          </div>

          <div class="wrap-input100 validate-input">
            <select class="input100" v-model="selectedSecondDegree">
              <option value="default" selected></option>
              <template v-for="degree in degrees" :key="degree">
                <option v-if="degree != selectedFirstDegree" :value="degree">
                  {{ degree }}
                </option>
              </template>
            </select>
            <span class="focus-input100"></span>
            <span
              v-if="selectedSecondDegree == 'default'"
              class="selectLabelInput100"
              >Select Your Second Degree (Optional)</span
            >
            <span v-else class="label-input100">Second Degree</span>
          </div>

          <div class="container-login100-form-btn">
            <button @click="register()" class="login100-form-btn">
              Register
            </button>
          </div>

          <div
            v-if="password != confirm_password && confirm_password != ''"
            class="alert alert-danger p-2 my-3"
          >
            Passwords do not match!
          </div>
          <div v-if="password == confirm_password && confirm_password != ''" class="alert alert-success p-2 my-3">
            Passwords match!
          </div>

          <div v-if="invalidUni != ''" class="alert alert-danger p-2 my-3">
            {{ invalidUni }}
          </div>

          <div v-if="invalidDegree != ''" class="alert alert-danger p-2 my-3">
            {{ invalidDegree }}
          </div>

          <div v-if="signupError != ''" class="alert alert-danger p-2 my-3">
            {{ signupError }}
          </div>
        </div>
        <div class="login100-more"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { fireStore } from "@/service/Firebase/firebaseInit";
import {
  collection,
  getDocs,
  query,
  setDoc,
  doc,
} from "firebase/firestore";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirm_password: "",
      router: useRouter(),
      current: null,
      firstDegree: "",
      secondDegree: "",
      allUniversities: [],
      selectedUni: "default",
      degrees: [],
      selectedFirstDegree: "default",
      selectedSecondDegree: "default",
      selectLableClass: ".select-label-input100",
      name: "",
      invalidUni: "",
      invalidDegree: "",
      signupError: "",
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
      // console.log(this.degrees);
    },

    async getUniversities() {
      const getAllUni = await getDocs(collection(fireStore, "Universities2"));
      getAllUni.forEach((doc) => {
        this.allUniversities.push(doc.data().HostUniversity);
      });
    },
    register() {
      if (this.selectedUni == "default") {
        this.invalidUni = "Please Select a University";
      }
      else{
        this.invalidUni = "";
      }
      if (this.selectedFirstDegree == "default") {
        this.invalidDegree = "Please Select a Degree";
      } 
      else{
        this.invalidDegree = "";
      }
      if (this.selectedFirstDegree != "default" && this.selectedUni != "default") {
        this.signupError = "";
        createUserWithEmailAndPassword(getAuth(), this.email, this.password)
          .then((user) => {
            setDoc(doc(fireStore, "UserProfiles", this.email), {
              UserName: this.email.split("@")[0],
              Email: this.email,
              FirstDegree: this.selectedFirstDegree,
              SecondDegree: this.selectedSecondDegree,
              School: this.selectedUni,
              Favourites: [],
              Reviews: [],
            })
              .then(() => {
                // console.log("User document has been added successfully");
              })
              .catch((error) => {
                // console.log(error);
              });

            const name1 = this.email.split("@")[0];
            const firstLetter = name1.charAt(0);
            const firstLetterCap = firstLetter.toUpperCase();
            const remainingLetters = name1.slice(1);
            let shavedName = firstLetterCap + remainingLetters;

            // console.log("successfully registered user is", user);
            setTimeout( () => this.router.push("/ProfilePage"), 2000);
          })
          .catch((error) => {
            // console.log("error.code");
            // console.log(error.message);
            if (
              error.message == "Firebase: Error (auth/email-already-in-use)."
            ) {
              this.signupError =
                "Registration failed. Email entered is already in use.";
            } else if (
              error.message == "Firebase: Error (auth/invalid-email)."
            ) {
              this.signupError =
                "Registration failed. You have entered an invalid email address.";
            }
          });
      }
    },
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
  background: rgba(0, 0, 0, 0);
}

.login100-form {
  width: 560px;
  min-height: 100vh;
  display: block;
  background-color: #f7f7f7;
  padding: 100px 55px 55px 25px;
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

.selectLabelInput100 {
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
  border: 1px solid #096dd9;
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
  background: #096dd9;
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
  background: #40a9ff;
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