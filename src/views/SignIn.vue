<template>
    <div class="page">
        <div class="container">
        <div class="left bg-light">
            <div class="login">Sign In</div>
            <div class="eula">
            Welcome to SGXchange!
            <p class="register">
                Don't have an account?
                <div
                ><router-link to="/RegisterPage">Register Here</router-link></div
                >
            </p>
            </div>
        </div>
        <div class="right">
            <svg viewBox="0 0 320 300">
            <defs>
                <linearGradient
                inkscape:collect="always"
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
                >
                <stop style="stop-color: #0047AB" offset="0" id="stop876" />
                <stop style="stop-color: #0093FF" offset="1" id="stop878" />
                </linearGradient>
            </defs>
            <path
                d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
            />
            </svg>
            <div class="form">
            <label for="email">Email</label>
            <input type="text" @click="onEmail" id="email"  v-model="email" />
            <label for="password">Password</label>
            <input type="password" @click="onPassword" v-model="password" />
            <input @click="onSubmit(); signIn();" type="submit" id="submit" value="Submit" />
            </div>
        </div>
        </div>
    </div>
<About></About>
  <!-- <h1>Sign in with your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signIn">Submit</button></p>
  <p>
    Don't have an account?
    <router-link to="/RegisterPage">Register Here</router-link>
  </p> -->

  
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import anime from "animejs/lib/anime.es.js";
// import About from "../components/About.vue";

export default {
    name: "SignIn",
    data() {
        return {
            email: "",
            password: "",
            router: useRouter(),
            current: null,
        };
    },
    methods: {
        signIn() {
            signInWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((user) => {
                alert("you have successfully signed in");
                console.log("successfully logged in user is", user);
                this.router.push("/ProfilePage");
            })
                .catch((error) => {
                console.log("error.code");
                alert(error.message);
            });
        },
        onEmail() {
            if (this.current)
                this.current.pause();
            this.current = anime({
                targets: "path",
                strokeDashoffset: {
                    value: 0,
                    duration: 700,
                    easing: "easeOutQuart",
                },
                strokeDasharray: {
                    value: "240 1386",
                    duration: 700,
                    easing: "easeOutQuart",
                },
            });
        },
        onPassword() {
            if (this.current)
                this.current.pause();
            this.current = anime({
                targets: "path",
                strokeDashoffset: {
                    value: -336,
                    duration: 700,
                    easing: "easeOutQuart",
                },
                strokeDasharray: {
                    value: "240 1386",
                    duration: 700,
                    easing: "easeOutQuart",
                },
            });
        },
        onSubmit() {
            if (this.current)
                this.current.pause();
            this.current = anime({
                targets: "path",
                strokeDashoffset: {
                    value: -730,
                    duration: 700,
                    easing: "easeOutQuart",
                },
                strokeDasharray: {
                    value: "530 1386",
                    duration: 700,
                    easing: "easeOutQuart",
                },
            });
        },
    },
    // components: {
    //     About,
    // },
};
</script>

<style scoped>
@import url("https://rsms.me/inter/inter-ui.css");
::selection {
  background: #2d2f36;
}
::-webkit-selection {
  background: #2d2f36;
}
::-moz-selection {
  background: #2d2f36;
}
body {
  background: white;
  font-family: "Inter UI", sans-serif;
  margin: 0;
  padding: 20px;
}
.page {
  /* background-color: #707075; */
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 40%;
  position: absolute;
  place-content: center;
  width: 100%;
}
@media (max-width: 767px) {
  .page {
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}

.register {
  padding-top: 20px;
}
.container {
  display: flex;
  height: 320px;
  margin: 0 auto;
  width: 640px;
}
@media (max-width: 767px) {
  .container {
    flex-direction: column;
    height: 630px;
    width: 320px;
  }
}
.left {
  height: calc(100% - 40px);
  top: 20px;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .left {
    height: 100%;
    left: 20px;
    width: calc(100% - 40px);
    max-height: 270px;
  }
}
.login {
  font-size: 50px;
  font-weight: 900;
  margin: 50px 40px 40px;
}
.eula {
  color: #999;
  font-size: 14px;
  line-height: 1.5;
  margin: 40px;
}
.right {
  background: #474a59;
  box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
  color: #f1f1f2;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .right {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    max-height: 350px;
  }
}
svg {
  position: absolute;
  width: 320px;
}
path {
  fill: none;
  stroke: url(#linearGradient);
  stroke-width: 4;
  stroke-dasharray: 240 1386;
}
.form {
  margin: 40px;
  position: absolute;
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
  background: transparent;
  border: 0;
  color: #f2f2f2;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
}
input::-moz-focus-inner {
  border: 0;
}
#submit {
  color: #707075;
  margin-top: 40px;
  transition: color 300ms;
}
#submit:focus {
  color: #f2f2f2;
}
#submit:active {
  color: #d0d0d2;
}
</style>
