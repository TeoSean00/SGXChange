<template>
  <div class="card my-4" style="width: 30rem">
    <div class="card-body h-100">

      <!-- module component -->

      <!-- module name -->
      <p class="card-title mb-3 h5 d-flex justify-content-between align-items-center" style="height:10%">{{mod}}
        <!-- <span class="badge text-bg-info" style="font-size:x-small;">Offered in Sem: {{sem}}</span> -->
      </p>
      <!-- basket type it fulfils -->
      <h6 class="card-subtitle mb-2 text-muted d-flex flex-column gap-2">
          <span>{{basket}}</span>
          <!-- <span>
            Difficulty: {{difficulty}}
          </span>
          {{AY}} -->
      </h6>
      <!-- mod description -->
      <p class="card-text textbox">
        {{ description }}
      </p>
      <div class="d-flex justify-content-between">
        <!-- add to fav -->
        <a href="/" class="btn btn-primary btn-sm">Favourite</a>
        <!-- link to mod info on uni page -->
        <a class="card-link me-3" @click="showMore">More info</a>
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
      description: ''
    }
  },
  props:
    ['desc', 'mod', 'basket']
    // ['year','desc','difficulty','faculty','url','id','name','popularity','sem']
  ,
  components: {

  },
  computed: {

  },
  mounted(){
    this.showDesc()
  },
  methods: {
    showMore(){
      console.log(this.desc)
      this.description = this.desc
    },
    showDesc(){
      console.log(this.desc)
      var desc = this.desc.split(' ')
      if (desc.length > 50){
        this.description =  desc.splice(0,50).join(" ")
      }
      else{
        this.description = desc.join(' ')
      }
    }
  }
};
</script>
<style>
.textbox{
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>