<template>
  <div id="app">
    <quiz :module_id = 'module_id'></quiz>
  </div>

</template>

<script>
import Quiz from "./components/Quiz.vue";

export default {
  name: 'app',
  data() {
   return {
     module_id: 1,
   }
  },
  components: {
    "quiz": Quiz,
  }
}
</script>

<style lang="css" scoped>


</style>
