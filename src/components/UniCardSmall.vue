<template>
     <tilt>
        <div class="card" style="width: 300px;">
            <router-link :to="`/universityInfo/` + universityName">
            <img class="card-img-top" :src="imgURL" alt="">
            <div class="card-body">
                <h6 style="height:2.5rem;color:black;display:flex;align-items: center;"> {{ universityName }} </h6>
                <!-- <span v-if="universityName.length<30">Filler</span> -->
                <ul class="list-group list-group-flush">
                    <li class="list-group-item uniitem">Country: {{CountryId}}</li>
                    <li class="list-group-item uniitem">Region: {{RegionId}}</li>
                    <li class="list-group-item uniitem">
                        Minimum gpa: {{gpa}}
                    </li>
                    <span class="badge text-bg-dark m-1">10th Perc : {{IgpaTenPercentile}}</span>
                    <span class="badge text-bg-dark m-1">90th Perc : {{IgpaNinetyPercentile}}</span>
                    <span class="badge text-bg-dark m-1">Vacancy sem1 : {{NoOfPlacesSem1}}</span>
                    <span class="badge text-bg-dark m-1">Vacancy sem2 : {{NoOfPlacesSem2}}</span>
                </ul>
                <!-- <router-link class="btn btn-dark float-right" to="UniversityPage">View</router-link> -->
                <!-- pass props here -->
            </div>
            </router-link>
        </div>
    </tilt>
</template>
<!-- define props, data etc here -->
<script>
import Tilt from '@/components/Tilt.vue'

export default {
    data() {
        return {
        };
    },
    props: ['universityName', 'gpaReq','IgpaNinetyPercentile','IgpaTenPercentile','NoOfPlacesSem1','NoOfPlacesSem2','CountryId','RegionId','imgURL'],
    components: {
        Tilt
    },
    computed: {
        gpa(){
            if (this.gpaReq != null){
                return this.gpaReq
            }
            return "NA"
        },
        IgpaNinetyPercentile(){
            if(this.IgpaNinetyPercentile == null){
                return "NA"
            } return this.IgpaNinetyPercentile
        },
        IgpaTenPercentile(){
            if(this.IgpaTenPercentile == null){
                return "NA"
            } return this.IgpaTenPercentile
        },

    },
    mounted(){
    }
};
</script>
<style scoped>
.card-img-top {
    width: 100%;
    height: 13vw;
    object-fit: cover;
}
</style>
