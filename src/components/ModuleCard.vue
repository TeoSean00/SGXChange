<template>
  <div
    :class="{ box: true, selected: select, unselected: !select }"
    @click="choseMod()"
  >
    <h4 :class="{ selected: select, unselected: !select }">{{ name }}</h4>
    <!-- <span class="moduleCounter">
      <i class="fa-solid fa-minus" v-on:click="minusCount"></i>
      {{ moduleSelect }}
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
      moduleSelect: false,
    };
  },
  methods: {
    selectModule() {
      if (this.moduleSelect) {
        this.select = true;
      } else {
        this.select = false;
      }
    },
    choseMod() {
      if (this.moduleSelect) {
        this.moduleSelect = false;
        this.selectModule();
        this.$emit("removeBasket", this.name);
      } else {
        this.moduleSelect = true;
        this.selectModule();
        this.$emit("addBasket", this.name);
      }
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
