<template>
    <div :class="{box: true, selected: select}" v-on:click="selectModule">
        {{ name }}
    </div>
</template>
<script>
export default {
  name: "ModuleCard",
  props: ['name'],
  data() {
    return {
      select: false
    };

  },
  methods: {
    selectModule(){
        this.select != this.select

    }
  }
};
</script>
<style scoped>
.box{
    height: 200px;
    width: 200px;
    /* background-color: lightblue; */
    border-radius: 10%;
    padding: 10px;
    margin: 10px;
}
.selected{
    background-color: grey;
}
</style>
