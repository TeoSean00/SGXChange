<!-- Carousel Component -->

<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="w-100 d-block" src="../assets/school.jpg" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>School Name</h5>
          <p>Country</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="w-100 d-block" src="../assets/school.jpg" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>School Name</h5>
          <p>Country</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="w-100 d-block" src="../assets/school.jpg" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>School Name</h5>
          <p>Country</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style scoped>
img {
  height: 300px;
}
</style>
