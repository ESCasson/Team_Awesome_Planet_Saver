<template lang="html">
  <p>Quiz for module: {{quiz_required.module_id}}</p>
</template>

<script>
import QuizsService from '../../helpers/QuizsService.js';

export default {
  name: 'quiz',
  props: ['module_id'],
  data () {
    return {
      quizs: [],
      quiz_required: null,
    }
  },

  methods: {
    fetchData(){
      QuizsService.getQuizs()
      .then(quizs => this.quizs = quizs)
      .then(quizs => this.requiredQuiz())
    },

    requiredQuiz(){
      let index = this.quizs.findIndex(quiz => quiz.module_id === this.module_id)
      return this.quiz_required = this.quizs[index]
    }
  },

  mounted() {
    this.fetchData()

  }
}
</script>

<style lang="css" scoped>
</style>
