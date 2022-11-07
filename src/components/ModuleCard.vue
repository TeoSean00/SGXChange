<template>
  <div
    :class="{ box: true, selected: select, unselected: !select }"
    v-on:click="selectModule"
  >
    <h4 :class="{ selected: select, unselected: !select }">{{ name }}</h4>
    <!-- <span class="moduleCounter">
        <i class="fa-solid fa-minus" v-on:click="minusCount"></i>
        {{ moduleCount }}
        <i class="fa-solid fa-plus" v-on:click="addCount"></i>
      </span> -->
  </div>
</template>
<script>
export default {
  name: "ModuleCard",
  props: ["name"],
  emits: ["addBasket", "removeBasket"],
  data() {
    return {
      select: false,
      moduleCount: 0,
    };
  },
  methods: {
    selectModule() {
      if (this.select) {
        this.$emit("removeBasket", this.name);
      } else {
        this.$emit("addBasket", this.name);
      }
      this.select = !this.select;
    },
  },
};
</script>
<style scoped>
.box {
  height: 200px;
  width: 200px;
  border-radius: 10%;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.moduleCounter {
  font-size: 20px;
  text-align: center;
}

.unselected {
  background-color: lightblue;
}
.selected {
  background-color: rgb(64, 64, 234);
  color: white;
}
</style>
