<template lang="html">
  <div>
    <p>Quiz for module: {{module_id}}</p>
    <quiz-question v-for="(fullQuestion, index) in this.quiz_required.questions"
    :fullQuestion="fullQuestion" :key="index"/>

  <button type="button" name="button" v-on:click="handleOnClick">Submit Answers</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';
import QuizsService from '../../helpers/QuizsService.js';
import StudentsService from '../../helpers/StudentsService.js';
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
      results: null

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
      let objTemplate = new Object();
        objTemplate.module_id = this.quiz_required.module_id;
        objTemplate.pass_mark = this.quiz_required.pass_mark;
        objTemplate.results = [];
      for (let quizQuestion of quiz.questions){
        let ansTemplate = new Object();
        ansTemplate.number = quizQuestion.number;
        ansTemplate.result = '';
        objTemplate.results.push(ansTemplate)
      }
      return this.results = objTemplate
    },

    handleOnClick(){
      StudentsService.postStudentsResults(this.results)
      .then(result => eventBus.$emit('results-added', this.results)
      )
    }

  },

  mounted() {
    this.fetchData(),

    eventBus.$on('result', (id, result) => {
      for (let slot of this.results.results) {
        if(slot.number === id){
          slot.result = result
    }}})

  }
}
</script>

<style lang="css" scoped>
</style>
