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
          <option v-for="uni in universities" :key="uni">{{ uni }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="degreeInput" class="form-label">Which Degree are you taking?</label>
          <select
            class="form-control"
            id="degreeInput"
          >
            <option v-for="degree in degrees" :key="degree">{{ degree }}</option>
          </select>

      </div>
      <div class="mb-3">
        <label for="secondDegreeInput" class="form-label">Do you have a second Degree?</label>
          <select
            class="form-control"
            id="secondDegreeInput"
          >
            <option selected>Optional</option>
            <option v-for="degree in degrees" :key="degree">{{ degree }}</option>
          </select>
      </div>
      <button v-on:click="showForm" class="btn btn-primary">Submit</button>
    </div>

    <!-- Step two -->
    <div class="form2" id="form2">
      <div class="displayModules">
        <ModuleCard v-for="basket in baskets" :key="basket" :name="basket"/>
      </div>
      <button class="btn btn-primary">Submit</button>
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
          selectedBaskets: []
        };
    },
    components:{
      ModuleCard
    },
    methods: {
            showForm() {
                document.getElementById('form2').classList.remove('form2')
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
}
</style>