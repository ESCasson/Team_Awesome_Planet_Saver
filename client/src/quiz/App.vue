<template>
  <div id="app">
    <quiz></quiz>
  </div>

</template>

<script>
import Quiz from "@/quiz/components/Quiz.vue";

export default {
  name: 'app',

  components: {
    "quiz": Quiz,
  }
}
</script>

<style lang="css" scoped>


</style>
