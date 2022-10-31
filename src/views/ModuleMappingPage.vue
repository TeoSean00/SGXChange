<template>
  Module Mapping Page
  <div class="container">
    <div :class="{formDisplay: form1}">
      <!-- Step one -->
      <!-- Select Uni -->
      <div class="mb-3">
        <label for="uniInput" class="form-label">Which university are you from?</label>
        <select
          class="form-control"
          id="uniInput"
          v-model="selectedUni"
          v-on:change="getDegree"
        >
          <option value='default' disabled>-Choose a School-</option>
          <option v-for="uni in universities" :key="uni" :value="uni">{{ uni }}</option>
        </select>
      </div>
      <!-- Select FIrst Degree -->
      <div class="mb-3">
        <label for="degreeInput" class="form-label">Which Degree are you taking?</label>
          <select
            class="form-control"
            id="degreeInput"
            v-model="selectedDegree"
          >
            <option value='default' selected>-Choose a Degree-</option>
            <option v-for="degree in degrees" :key="degree" :value="degree">{{ degree }}</option>
          </select>
      </div>
      <!-- Select Second Degree -->
      <div class="mb-3">
        <label for="secondDegreeInput" class="form-label">Do you have a second Degree?</label>
          <select
            class="form-control"
            id="secondDegreeInput"
            v-model="selectedSecondDegree"
          >
            <option value='default' selected>-Optional-</option>
            <template v-for="degree in degrees" :key="degree">
              <option v-if="degree != selectedDegree" :value="degree">{{ degree }}</option>
            </template>
          </select>
      </div>
      <button v-on:click="showForm" class="btn btn-primary">Next</button>
    </div>

    <!-- Step two -->
    <div :class="{formDisplay: form2}" class="pt-4" id="form2">
      <h3>Choose your baskets</h3>
      <div class="displayModules">
        <ModuleCard v-for="basket in baskets" :key="basket" :name="basket" v-on:addBasket="addToBasket" v-on:removeBasket="removeFromBasket"/>
      </div>
      <button class="btn btn-primary" v-on:click="submitData">Submit</button>
    </div>
    <!-- Testing. Can delete later -->
    <div :class="{testingOutput: testDisplay}">
      <h4>Test Output</h4>
      <div v-for="out in testOutput" :key="out">{{ out }}</div>
      <div class="d-flex flex-wrap">
        <UniCardSmall class="unicard" v-for="uni in uniOutput" :key="uni"
            :universityName="uni.name"
            :gpaReq="uni.gpaReq"
            :IgpaNinetyPercentile="uni.IgpaNinetyPercentile"
            :IgpaTenPercentile="uni.IgpaTenPercentile"
            :NoOfPlacesSem1="uni.NoOfPlacesSem1"
            :NoOfPlacesSem2="uni.NoOfPlacesSem2"
            :CountryId="uni.CountryId"
            :RegionId="uni.RegionId"
            :imgURL="uni.imgURL"
            />
      </div>

    </div>
  </div>
</template>
<script>
import ModuleCard from "@/components/ModuleCard.vue";
import UniCardSmall from "@/components/UniCardSmall.vue";

import {fireStore} from "@/service/Firebase/firebaseInit"
import { collection, getDocs, where, query, limit, doc, getDoc } from "firebase/firestore";
export default {
    data() {
        return {
          universities: [],
          degrees: [],
          baskets: [],
          selectedBaskets: {},
          form1: false,
          form2: true,
          selectedUni: "default",
          selectedDegree: "default",
          selectedSecondDegree: "default",
          testOutput: [],
          testDisplay: true,
          uniOutput: []
        };
    },
    components:{
      ModuleCard,
      UniCardSmall
    },
    async mounted() {
        const getUniversities = await getDocs(collection(fireStore, "Universities"));

        getUniversities.forEach((doc) => {
          this.universities.push(doc.data().HostUniversity)
        });

    },
    methods: {
            async getDegree() {
              this.degrees = []
              let q = query(collection(fireStore, "DegreeToBaskets"))
              let getDegreeUni = await getDocs(q)
              getDegreeUni.forEach((doc) => {
                // console.log(doc.data().Universities)
                // if(this.getDegreeName(doc.data().Universities)){
                //   this.degrees.push(doc.id)
                // }
                this.degrees.push(doc.id)
              });
            },
            // async getDegreeName(uniArray) {
            //   // console.log(uniArray.includes(this.selectedUni))

            //   if(uniArray.includes(this.selectedUni)){
            //     return true
            //   }
            //   return false
            //   // let degreeName = query(collection(fireStore, "Degrees"), where("DegreeId", "==", degreeId))
            //   // let getDegreeName = await getDocs(degreeName)
            //   // getDegreeName.forEach((doc) => {
            //   //   this.degrees.push(doc.data().DegreeName)
            //   // })
            // },
            async showForm() {
                this.form2 = false
                var tempDegrees = []
                if(this.selectedDegree != 'default'){
                  tempDegrees.push(this.selectedDegree)
                }
                if(this.selectedSecondDegree != 'default'){
                  tempDegrees.push(this.selectedSecondDegree)
                }
                for (let degree of tempDegrees){
                  let q = doc(fireStore, "DegreeToBaskets", degree)
                  let getBaskets = await getDoc(q)

                  for( let bask of getBaskets.data().Baskets){
                    if(!this.baskets.includes(bask)){
                      this.baskets.push(bask)
                    }
                  }
                }
            },
            addToBasket(basket){
              if (basket in this.selectedBaskets){
                this.selectedBaskets[basket] += 1
              }
              else{
                this.selectedBaskets[basket] = 1
              }
            },
            removeFromBasket(basket){
              if (basket in this.selectedBaskets){
                this.selectedBaskets[basket] -= 1
              }
            },
            async submitData(){
              this.form1 = true
              this.form2 = true
              this.testDisplay = false
              this.testOutput = []
              var tempUni = []
              // Getting output universities
              // console.log(this.selectedBaskets)
              for(let basket in this.selectedBaskets){
                let q = doc(fireStore, "BasketToUniversities", basket)
                let getUni = await getDoc(q)
                if (tempUni.length == 0){
                  tempUni = getUni.data().Universities
                }
                else{
                  for( let uni of tempUni){
                      if(!this.getUni.data().Universities.includes(uni)){
                        tempUni.remove(bask)
                      }
                    }
                }
              }
              // Get Data for each output uni
              for(let uni of tempUni){
                let uniInfo = query(collection(fireStore, "Universities"), where("HostUniversity", "==", uni))
                let getUniversities = await getDocs(uniInfo)
                getUniversities.forEach((doc) =>{
                  console.log(doc.data())
                  let universityInfo = {}
                  // put key-value pairs
                  universityInfo["name"] = doc.data().HostUniversity;
                  universityInfo["gpaReq"] = doc.data().GPA;
                  // universityInfo["IgpaNinetyPercentile"] =
                  //   doc.data().IgpaNinetyPercentile;
                  // universityInfo["IgpaTenPercentile"] = doc.data().IgpaTenPercentile;
                  universityInfo["NoOfPlacesSem1"] = doc.data().NoOfPlacesSem1;
                  universityInfo["NoOfPlacesSem2"] = doc.data().NoOfPlacesSem2;
                  universityInfo["CountryId"] = doc.data().Country;
                  universityInfo["RegionId"] = doc.data().Region;
                  universityInfo["imgURL"] = doc.data().UniImageLink1;
                  this.uniOutput.push(universityInfo)
                })
              }
              // End
              for ( const [key, value] of Object.entries(this.selectedBaskets)){
                if (value != 0){
                  this.testOutput.push(`${key} : ${value}`)
                }
              }
              // console.log(this.testOutput)
            }
        },
    }
</script>
<style scoped>
.formDisplay {
    display: none;
}
.displayModules{
  display: flex;
  flex-wrap: wrap;
}
.testingOutput{
  display: none;
}
</style>