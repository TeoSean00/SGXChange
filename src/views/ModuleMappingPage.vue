<template>
  Module Mapping Page
  <div class="container">
    <div>
      <!-- Step one -->
      <div class="mb-3">
        <label for="uniInput" class="form-label">Which university are you from?</label>
        <select
          class="form-control"
          id="uniInput"
        >
          <option value='default' selected>-Choose a School-</option>
          <option v-for="uni in universities" :key="uni">{{ uni }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="degreeInput" class="form-label">Which Degree are you taking?</label>
          <select
            class="form-control"
            id="degreeInput"
          >
            <option value='default' selected>-Choose a Degree-</option>
            <option v-for="degree in degrees" :key="degree">{{ degree }}</option>
          </select>

      </div>
      <div class="mb-3">
        <label for="secondDegreeInput" class="form-label">Do you have a second Degree?</label>
          <select
            class="form-control"
            id="secondDegreeInput"
          >
            <option value='default' selected>Optional</option>
            <option v-for="degree in degrees" :key="degree">{{ degree }}</option>
          </select>
      </div>
      <button v-on:click="showForm" class="btn btn-primary">Next</button>
    </div>

    <!-- Step two -->
    <div :class="{form2: form2}" class="pt-4" id="form2">
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
    </div>
  </div>
</template>
<script>
import ModuleCard from "@/components/ModuleCard.vue";
export default {
    data() {
        return {
          universities: ['SMU', 'NUS', 'NTU'],
          degrees: ['IS', 'CS', 'Law', 'Finance', 'Accountancy'],
          baskets: ['Managing', 'Tech & Society', 'Cultures', 'IS Major Core', 'IS Depth Electives', 'Civilisations', 'Global Exposure'],
          selectedBaskets: {},
          form2: true,
          testOutput: [],
          testDisplay: true,
        };
    },
    components:{
      ModuleCard
    },
    methods: {
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
            submitData(){
              this.testDisplay = false
              this.testOutput = []
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
.form2 {
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