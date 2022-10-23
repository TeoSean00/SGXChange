<template>

    <div class="card m-2" style="width: 300px;">
        <router-link :to="`/universityinfo/exampleUni`">
        <img class="card-img-top" src="../assets/school.jpg" alt="Card image cap">
        <div class="card-body">
            <span class="card-title"> {{ universityName }} </span>
            <ul class="list-group list-group-flush">
                <li class="list-group-item uniitem">Country</li>
                <li class="list-group-item uniitem">Region</li>
                <li class="list-group-item uniitem">{{ gpa }}</li>
            </ul>
            <router-link class="btn btn-primary float-right" to="UniversityPage">View</router-link>
            <!-- pass props here -->
        </div>
        </router-link>
    </div>

</template>
<!-- define props, data etc here -->
<script>
// <div id='app'></div>
export default {
    data() {
        return {
        };
    },
    props: ['universityName', 'gpaReq'],
    methods: {

    },
    computed: {
        gpa(){
            if (this.gpaReq != null){
                return this.gpaReq
            }
            return "Unknown"
        }
    },
    mounted(){
        console.log(this.gpaReq)
    }
};
</script>