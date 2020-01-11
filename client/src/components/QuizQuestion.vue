<template lang="html">
  <div>
  <p>{{fullQuestion.question}}</p>
  <div v-for="option in fullQuestion.options">
  <input type="radio" name="answers" value="this.option">
  {{option}}</br>
</div>
</div>

</template>

<script>
export default {
  name: 'quiz-question',
  props: [
    'fullQuestion'
  ]
}
</script>

<style lang="css" scoped>
</style>
