<template>
  <div id="app">
    <test></test>
  </div>

</template>

<script>
import Test from "./components/Test.vue";

export default {
  name: 'app',
  data(){

  },
  components: {
    "test": Test,
  }
}
</script>

<style lang="css" scoped>


</style>
