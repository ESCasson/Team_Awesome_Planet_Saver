<template>
    <div class="center">
      <quiz></quiz>
    </div>
</template>

<script>
import Quiz from "@/components/Quiz.vue";

export default {
  name: 'app',

  components: {
    "quiz": Quiz
  }
}
</script>

<style lang="css" scoped>

button {
  background-color: #A48D3D;
}

</style>
