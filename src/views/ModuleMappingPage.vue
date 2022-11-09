<template>
  <!-- Progress bar  -->
  <div class="mt-3 mb-3" style="margin-left: 4rem; margin-right: 4rem">
    <h2>Module Mapping</h2>
  </div>
  <div class="mt-3 mb-3" style="margin-left: 4rem; margin-right: 4rem">
    <a-steps :current="stage">
      <a-step>
        <!-- <span slot="title">Finished</span> -->
        <template #title>User Details</template>
      </a-step>
      <a-step>
        <!-- <span slot="title">Finished</span> -->
        <template #title>Module Baskets</template>
      </a-step>
      <a-step>
        <!-- <span slot="title">Finished</span> -->
        <template #title>Results</template>
      </a-step>
    </a-steps>
  </div>

  <div class="container" style="margin-left: 4rem; margin-right: 4rem">
    <!-- FIRST FORM IF USER HAS NOT FILLED IT IN -->
    <div v-if="stage == 0" :class="{ formDisplay: form1 }">
      <!-- Step one -->
      <!-- Select Uni -->
      <div class="mb-3">
        <label for="uniInput" class="form-label question"
          >Which university are you from?</label
        >
        <select
          class="form-control"
          id="uniInput"
          v-model="selectedUni"
          v-on:change="getDegree"
          required
        >
          <option value="default">Select University</option>
          <template v-for="uni in universities" :key="uni">
            <option v-if="uni == 'Singapore Management University'" :value="uni">
            {{ uni }}
            </option>
            <option v-else :value="uni" class="bg-light" disabled>
            {{ uni }}
            </option>
          </template>

        </select>
      </div>
      <!-- Select FIrst Degree -->
      <div class="mb-3">
        <label for="degreeInput" class="form-label question"
          >Which Degree are you taking?</label
        >
        <select
          class="form-control"
          id="degreeInput"
          v-model="selectedDegree"
          required
        >
          <option value="default" selected>Select your degree</option>
          <option v-for="degree in degrees" :key="degree" :value="degree">
            {{ degree }}
          </option>
        </select>
      </div>

      <!-- Select Second Degree -->
      <div class="mb-3">
        <label for="secondDegreeInput" class="form-label question"
          >Do you have a second Degree?</label
        >
        <select
          class="form-control"
          id="secondDegreeInput"
          v-model="selectedSecondDegree"
        >
          <option value="default" selected>Optional</option>
          <template v-for="degree in degrees" :key="degree">
            <option v-if="degree != selectedDegree" :value="degree">
              {{ degree }}
            </option>
          </template>
        </select>
      </div>
      <button
        v-on:click="showForm()"
        class="btn btn-primary float-end mt-1"
      >
        Next
      </button>
    </div>

    <!-- Step two -->
    <div
      v-if="stage == 1"
      :class="{ formDisplay: form2 }"
      class="pt-4"
      id="form2"
    >
      <h3>Choose your baskets</h3>
      <div class="displayModules">
        <ModuleCard
          v-for="basket in baskets"
          :key="basket"
          :name="basket"
          v-on:addBasket="addToBasket"
          v-on:removeBasket="removeFromBasket"
        />
      </div>
      <button class="btn btn-primary float-start mt-1" v-on:click="stageZero()">
        Previous
      </button>
      <button
        class="btn btn-primary float-end mt-1"
        v-on:click="submitData()"
      >
        Submit
      </button>
    </div>
    <div :class="{ Output: testDisplay }">
      <h4>Test Output</h4>
      <div>{{ testOutput }}</div>
      <div class="d-flex flex-wrap">
        <UniCardSmall
          class="unicard"
          v-for="uni in uniOutput"
          :key="uni"
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fireStore } from "@/service/Firebase/firebaseInit";
import {
  collection,
  getDocs,
  where,
  query,
  limit,
  doc,
  getDoc,
} from "firebase/firestore";
export default {
  data() {
    return {
      isLoggedIn: false,
      universities: [],
      degrees: [],
      baskets: [],
      selectedBaskets: [],
      form1: false,
      form2: true,
      selectedUni: "default",
      selectedDegree: "default",
      selectedSecondDegree: "default",
      testOutput: [],
      testDisplay: true,
      uniOutput: [],
      stage: 0,
    };
  },
  components: {
    ModuleCard,
    UniCardSmall,
  },
  async mounted() {
    this.checkForUser()
    this.getDegree()

    const getUniversities = await getDocs(
      collection(fireStore, "Universities2")
    );

    getUniversities.forEach((doc) => {
      this.universities.push(doc.data().HostUniversity);
    });
  },
  methods: {
    checkForUser(){
      onAuthStateChanged(getAuth(), async (user) => {
          if(user) {
              var user = user.auth.currentUser.email
              const getUsers = await getDocs(collection(fireStore, "UserProfiles"));
              getUsers.forEach(async (document) => {
                  if(document.data().Email == user){
                      const docRef = doc(fireStore, 'UserProfiles' ,document.id);
                      var school = document.data().School
                      var firstDegree = document.data().FirstDegree
                      var secondDegree = document.data().SecondDegree
                      if (school != ''){
                        this.selectedUni = school
                      }
                      if (firstDegree != ''){
                        this.selectedDegree = firstDegree
                      }
                      if (school != ''){
                        this.selectedSecondDegree = secondDegree
                      }
                  }
              });
            }
      })
    },
    async getDegree() {
      this.degrees = [];
      let q = query(collection(fireStore, "DegreeToBaskets"));
      let getDegreeUni = await getDocs(q);
      getDegreeUni.forEach((doc) => {
        // console.log(doc.data().Universities)
        // if(this.getDegreeName(doc.data().Universities)){
        //   this.degrees.push(doc.id)
        // }
        this.degrees.push(doc.id);
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
      this.form2 = false;

      var tempDegrees = [];
      if (this.selectedUni == 'default'){
        alert('Please Select a University!')
      }
      else if (this.selectedDegree == 'default'){
        alert('Please Select a Degree!')
      }
      else{
        this.stageOne()
        tempDegrees.push(this.selectedDegree);
        if (this.selectedSecondDegree != "default") {
          tempDegrees.push(this.selectedSecondDegree);
        }
        for (let degree of tempDegrees) {
          let q = doc(fireStore, "DegreeToBaskets", degree);
          let getBaskets = await getDoc(q);

          for (let bask of getBaskets.data().Baskets) {
            if (!this.baskets.includes(bask)) {
              this.baskets.push(bask);
            }
          }
        }

      }
    },
    addToBasket(basket) {
      if (!this.selectedBaskets.includes(basket)) {
        this.selectedBaskets.push(basket);
      }
    },
    removeFromBasket(basket) {
      if (this.selectedBaskets.includes(basket)) {
        var index = this.selectedBaskets.indexOf(basket);
        var x = this.selectedBaskets.splice(index, 1);
      }
    },
    stageZero() {
      this.stage = 0;
    },
    stageOne() {
      this.stage = 1;
    },
    stageTwo() {
      this.stage = 2;
    },

    async submitData() {
      if(this.selectedBaskets.length == 0){
        alert('Please select at least one basket!')
      }
      else{
        this.stageTwo()
        this.form1 = true;
        this.form2 = true;
        this.testDisplay = false;
        this.testOutput = [];
        var tempUni = [];
        // Getting output universities
        for (let basket of this.selectedBaskets) {
          let q = doc(fireStore, "BasketToUniversities", basket);
          let getUni = await getDoc(q);
          if (tempUni.length == 0) {
            tempUni = getUni.data().Universities;
          } else {
            for (let uni of tempUni) {
              if (!getUni.data().Universities.includes(uni)) {
                var index = tempUni.indexOf(uni);
                var x = tempUni.splice(index, 1);
              }
            }
          }
        }
        // Get Data for each output uni
        for (let uni of tempUni) {
          let uniInfo = query(
            collection(fireStore, "Universities2"),
            where("HostUniversity", "==", uni)
          );
          let getUniversities = await getDocs(uniInfo);
          getUniversities.forEach((doc) => {
            let universityInfo = {};
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
            this.uniOutput.push(universityInfo);
          });
        }
        // End
        for (let basket of this.selectedBaskets) {
          this.testOutput.push(basket);
        }

      }
    },
  },
};
</script>
<style scoped>
.formDisplay {
  display: none;
}
.displayModules {
  display: flex;
  flex-wrap: wrap;
}
.Output {
  display: none;
}

.question {
  font-size: 1.2rem;
}
</style>