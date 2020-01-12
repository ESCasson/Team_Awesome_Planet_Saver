<template lang="html">
  <div>
    <p>Quiz for module: {{module_id}}</p>
    <quiz-question v-for="(fullQuestion, index) in this.quiz_required.questions"
    :fullQuestion="fullQuestion" :key="index"/>

  <button type="button" name="button">Submit Answers</button>
    </div>
</template>

<script>
import QuizsService from '../../helpers/QuizsService.js';
import QuizQuestion from './QuizQuestion.vue';

export default {
  name: 'quiz',
  props: ['module_id'],
  components: {
    'quiz-question': QuizQuestion
  },
  data () {
    return {
      quizs: [],
      quiz_required: {},
      results: []

    }
  },

  methods: {
    fetchData(){
      QuizsService.getQuizs()
      .then(quizs => this.quizs = quizs)
      .then(() => this.requiredQuiz())
      .then((quiz) => this.createResultsSlots(quiz))
    },

    requiredQuiz(){
      let index = this.quizs.findIndex(quiz => quiz.module_id === this.module_id)
      return this.quiz_required = this.quizs[index]
    },
    createResultsSlots(quiz){
      for (let quizQuestion of quiz.questions){
        this.results.push(quizQuestion.number)
      }
    }

  },

  mounted() {
    this.fetchData()

  }
}
</script>

<style lang="css" scoped>
</style>
