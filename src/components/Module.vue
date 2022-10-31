<template>
  <div class="card my-4" style="width: 30rem">
    <div class="card-body">
      <!-- module component -->
      
      <!-- module name -->
      <p class="card-title mb-3 h5 d-flex justify-content-between align-items-center">{{name}}<span class="badge text-bg-info" style="font-size:x-small;">Offered in Sem: {{sem}}</span></p>
      <!-- basket type it fulfils -->
      <h6 class="card-subtitle mb-2 text-muted d-flex flex-column gap-2">
          <span>{{faculty}}</span>
          <span>
            Difficulty: {{difficulty}}
          </span>
          {{AY}}
      </h6>
      <!-- mod description -->
      <p class="card-text">
        {{desc}}
      </p>
      <div class="d-flex justify-content-between">
        <!-- add to fav -->
        <a href="/" class="btn btn-primary btn-sm">Favourite</a>
        <!-- link to mod info on uni page -->
        <a :href="url" target="_blank" class="card-link me-3">More info</a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      uniName: '',
      mods: [],
    }
  },
  props: 
    ['year','desc','difficulty','faculty','url','id','name','popularity','sem']
  ,
  components: {
    
  },
  computed: {
  },
  mounted(){
  },
  methods: {
    
  }
};
</script>
<style>
</style>