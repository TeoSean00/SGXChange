<template>
    <div :class="{box: true, selected: select, unselected: !select}">
      <h4 :class="{selected: select, unselected: !select}">{{ name }}</h4>
      <span class="moduleCounter">
        <i class="fa-solid fa-minus" v-on:click="minusCount"></i>
        {{ moduleCount }}
        <i class="fa-solid fa-plus" v-on:click="addCount"></i>
      </span>
    </div>

</template>
<script>
export default {
  name: "ModuleCard",
  props: ['name'],
  emits: ['addBasket', 'removeBasket'],
  data() {
    return {
      select: false,
      moduleCount: 0,
    };

  },
  methods: {
    selectModule(){
      if(this.moduleCount > 0){
        this.select = true
      }
      else{
        this.select = false
      }
    },
    addCount() {
      this.moduleCount++
      this.selectModule()
      this.$emit('addBasket', this.name)
    },
    minusCount(){
      if (this.moduleCount>0){
        this.moduleCount--
        this.selectModule()
        this.$emit('removeBasket', this.name)
      }
    }
  }
};
</script>
<style scoped>
.box{
    height: 200px;
    width: 200px;
    border-radius: 10%;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

}
.moduleCounter{
  font-size: 20px;
  text-align: center;
}

.unselected{
  background-color: lightblue;
}
.selected{
    background-color: rgb(64, 64, 234);
    color: white;
}

</style>
