<template lang="html">
  <div>
  <p>{{fullQuestion.question}}</p>
  <div v-for="(option, index) in fullQuestion.options">
  <input type="radio" name="answers" :value="option" v-on:click="handleOnClick">
  {{option}}</br>
</div>
</div>

</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: 'quiz-question',
  props: [
    'fullQuestion'
  ],

  methods: {
    handleOnClick(event) {
      let value
      if (event.target.value === this.fullQuestion.correct_answer)
        { value = true}
      else {
         value = false
    }
    eventBus.$emit('result', value)
  }
}
}
</script>

<style lang="css" scoped>
</style>
