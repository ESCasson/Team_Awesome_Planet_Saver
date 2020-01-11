<template lang="html">
  <p>{{fullQuestion.question}}</p>
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
