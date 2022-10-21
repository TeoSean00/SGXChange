<template>
    <div class="card m-2" style="width: 300px;">
        <img class="card-img-top" src="../assets/school.jpg" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title"> University Name </h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item uniitem">Country</li>
                <li class="list-group-item uniitem">Region</li>
                <li class="list-group-item uniitem">GPA cutoff</li>
            </ul>
            <router-link class="btn btn-primary float-right" to="UniversityPage">View</router-link> 
            <!-- pass props here -->
        </div>
    </div>
</template>
<!-- define props, data etc here -->