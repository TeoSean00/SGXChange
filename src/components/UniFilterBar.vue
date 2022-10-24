<template>
  <a-menu
    class="uni-filter-bar"
    v-model:selectedKeys="current"
    mode="horizontal"
  >
    <a-menu-item key="All"> All </a-menu-item>
    <a-menu-item key="Africa"> Africa </a-menu-item>
    <a-menu-item key="Asia"> Asia </a-menu-item>

    <a-menu-item key="Europe"> Central America </a-menu-item>
    <a-menu-item key="Europe"> Europe </a-menu-item>
    <a-menu-item key="NorthAmerica"> North America </a-menu-item>
    <a-menu-item key="SouthAmerica"> South America </a-menu-item>
    <a-menu-item key="Caribbean"> The Caribbean </a-menu-item>
    <a-menu-item key="Oceania"> Oceania </a-menu-item>
  </a-menu>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  // methods: {
  //   async getUni() {
  //     if (current == "All") {
  //       let q = query(collection(fireStore, "Universities"));
  //     }
  //     let q = query(
  //       collection(fireStore, "Universities"),
  //       where("RegionID", "==", this.current)
  //     );
  //   },
  // },
  setup() {
    const current = ref(["All"]);
    return {
      current,
    };
  },
});
</script>

<style scoped>
.uni-filter-bar {
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  position: "relative";
  display: "flex";
  justify-content: "center";
  text-align: "center";
}
</style>
