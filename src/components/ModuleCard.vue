<template>
  <div
    :class="{ box: true, selected: select, unselected: !select }"
    v-on:click="selectModule"
  >
    <h4 :class="{ selected: select, unselected: !select }">{{ name }}</h4>
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
  background-color: #e6f7ff;
}
.selected {
  background-color: #096dd9;
  color: white;
}
</style>
