<template lang="html">
  <div id="question">
  <p><img src="../../public/lightbulb.png" alt="lightbulb">{{fullQuestion.question}}</p>
  <div class="options">
    <div class="option"v-for="(option, index) in fullQuestion.options">
    <input type="radio" :name="fullQuestion.number" :value="option" v-on:click="handleOnClick">
    {{option}}</br>
  </div>
  </div>

</br>
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
      console.log(event.target.value)
      if (event.target.value === this.fullQuestion.correct_answer)
        { value = true}
      else {
         value = false
    }
    eventBus.$emit('result', this.fullQuestion.number, value)
  }
}
}
</script>

<style lang="css" scoped>

img {
  height: 40px;
}

#question {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#options {
  display: flex;
  justify-content: flex-start;
}


</style>
