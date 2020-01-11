<template lang="html">
  <div>
  <p>{{fullQuestion.question}}</p>
  <div v-for="(option, index) in fullQuestion.options">
  <input type="radio" name="answers" :value="option" v-model='answer' v-on:click="handleOnClick">
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
  data(){
    return {
      answer: '',
      correctAns: ''
    }
  },

computed: {
  calcCorrectAns: function() {
    if (this.answer === this.fullQuestion.correct_answer)
      { return true}
    else {
      return false
    }
    }
},

  methods: {
    handleOnClick() {
      eventBus.$emit('result', this.calcCorrectAns)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
