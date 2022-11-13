<template>
    <footer class="bg-white border border-top">
        <div class="container pt-5 pb-3 mt-5">
        <div class="row py-3">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 ps-5 "><img src="../assets/WebsiteLogo.png" alt="" width="100" class="mb-3 ms-5">
            <p class="font-italic text-muted ms-3">Change the way you Xchange</p>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4 blue">Socials</h6>
            <ul class="list-unstyled mb-0">
                <li class="mb-2"><a @click="fbs_click()" target="_blank" class="text-muted"><i class="fa fa-facebook pe-2"></i
                > Facebook</a></li>
                <li class="mb-2"><a @click="tbs_click()" target="_blank" class="text-muted"><i class="fa fa-twitter pe-2"></i
                > Twitter</a></li>
                <li class="mb-2"><a @click="lbs_click()" target="_blank" class="text-muted"><i class="fa fa-linkedin pe-2"></i
                > LinkedIn</a></li>
            </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4 blue">Account</h6>
            <ul class="list-unstyled mb-0">
                <li class="mb-2"><router-link to="/SignInPage" class="text-muted">Login</router-link></li>
                <li class="mb-2"><router-link to="/RegisterPage" class="text-muted">Register</router-link></li>
                <li class="mb-2"><router-link to="/ProfilePage" class="text-muted">Favourites</router-link></li>
            </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4 blue">Newsletter</h6>
            <p class="text-muted mb-4">
                Get the latest news & updates with regards to exchange
            </p>
            <div class="p-1 rounded border">
                <div class="input-group">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon1"
                    class="form-control border-0 shadow-0"
                />
                <div class="input-group-append">
                    <button id="button-addon1" type="submit" class="btn btn-link">
                    <i class="fa fa-paper-plane"></i>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- Copyrights -->
        <div class="bg-light py-4">
        <div class="container text-center">
            <p class="text-muted mb-0 py-2">
            © 2022 SGXchange All rights reserved.
            </p>
        </div>
        </div>
    </footer>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      router: useRouter(),
    };
  },
  methods: {
    fbs_click() {
      var pageLink = window.location.href;
      var pageTitle = String(document.title).replace("/&/g", "%26");
      window.open(
        `http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,
        "sharer",
        "toolbar=0,status=0,width=626,height=436"
      );
      return false;
    },
    tbs_click() {
      var pageLink = window.location.href;
      var pageTitle = String(document.title).replace("/&/g", "%26");
      window.open(
        `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,
        "sharer",
        "toolbar=0,status=0,width=626,height=436"
      );
      return false;
    },
    lbs_click() {
      var pageLink = window.location.href;
      var pageTitle = String(document.title).replace("/&/g", "%26");
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`,
        "sharer",
        "toolbar=0,status=0,width=626,height=436"
      );
      return false;
    },
  },

  components: {
  },

  mounted() {

  },
};
</script>
<style>
.blue {
  color:  #096dd9;
}
</style>