<template lang="html">
  <div>
  <p><img src="../../public/lightbulb.png" alt="lightbulb">{{fullQuestion.question}}</p>
  <div  id="options" v-for="(option, index) in fullQuestion.options">
  <input type="radio" :name="fullQuestion.number" :value="option" v-on:click="handleOnClick">
  {{option}}</br>
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

#options {
  display: flex;
  justify-content: center;
}
</style>
