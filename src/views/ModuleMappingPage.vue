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
      <div class="d-flex">
        <UniCardSmall class="col unicard" v-for="uni in uniOutput" :key="uni"
            :universityName="uni"
            :gpaReq="uni"
            />
      </div>

    </div>
  </div>
</template>
<script>
import ModuleCard from "@/components/ModuleCard.vue";
import UniCardSmall from "@/components/UniCardSmall.vue";

import {fireStore} from "@/service/Firebase/firebaseInit"
import { collection, getDocs, where, query, limit } from "firebase/firestore";
export default {
    data() {
        return {
          universities: [],
          degrees: [],
          baskets: ['Managing', 'Tech & Society', 'Cultures', 'IS Major Core', 'IS Depth Electives', 'Civilisations', 'Global Exposure'],
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
          this.universities.push(doc.data().UniversityName)
        });

    },
    methods: {
            async getDegree() {
              this.degrees = []
              let q = query(collection(fireStore, "DegreeUniversities"), where("UniversityName", "==", this.selectedUni))
              let getDegreeUni = await getDocs(q)
              getDegreeUni.forEach((doc) => {
                this.getDegreeName(doc.data().DegreeId)
              });
            },
            async getDegreeName(degreeId) {
              let degreeName = query(collection(fireStore, "Degrees"), where("DegreeId", "==", degreeId))
              let getDegreeName = await getDocs(degreeName)
              getDegreeName.forEach((doc) => {
                this.degrees.push(doc.data().DegreeName)
              })
            },
            showForm() {
                this.form2 = false
            },
            addToBasket(basket){
              if (basket in this.selectedBaskets){
                this.selectedBaskets[basket] += 1
              }
              else{
                this.selectedBaskets[basket] = 1
              }
              console.log(this.selectedBaskets)
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
              // Getting output universities
              let q = query(collection(fireStore, "Universities"), limit(3))
              let getChosenUniversities = await getDocs(q)

              getChosenUniversities.forEach((doc) => {
                this.uniOutput.push(doc.data().UniversityName)
              });

              // End
              for ( const [key, value] of Object.entries(this.selectedBaskets)){
                if (value != 0){
                  this.testOutput.push(`${key} : ${value}`)
                }
              }
              console.log(this.testOutput)
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