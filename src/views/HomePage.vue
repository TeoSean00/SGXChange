
<template>
    <div class="container-fluid p-4">
        <div class="row">
            <div class="col d-flex align-content-center">
                <div id="carouselExampleControls" class="carousel slide w-100 h-75" data-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active ">
                        <img class="d-block w-100" src="../assets/school.jpg" style="height: 400px" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/school.jpg" style="height: 400px" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/school.jpg" style="height: 400px" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <h2>
                Suggested universities
            </h2>
        </div>
        <div class="row d-flex justify-content-start">
            <UniCardSmall
            class="unicard"
            v-for="i in 9"
            :key="i"
            />
        </div>
    </div>
</template>
<script >
import UniCardSmall from "@/components/UniCardSmall.vue";


export default {
  name: "HomePage",
  data() {
    return {
    };
  },
  components: {
    UniCardSmall,
  },
}
</script>
