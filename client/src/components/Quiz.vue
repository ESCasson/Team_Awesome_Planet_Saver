<template lang="html">
  <div>
    <div v-if="this.show">
      <p>Quiz for module: {{module_id}}</p>
      <quiz-question v-for="(fullQuestion, index) in this.quiz_required.questions"
      :fullQuestion="fullQuestion" :key="index"/>
    <button type="button" name="button" v-on:click="handleOnClick">Submit Answers</button>
    </div>

  <quiz-results v-else="this.show" :result_object ="result_object" ></quiz-results>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

import QuizsService from '../../helpers/QuizsService.js';
import StudentsService from '../../helpers/StudentsService.js';

import QuizQuestion from './QuizQuestion.vue';
import QuizResults from './QuizResults.vue'


export default {
  name: 'quiz',
  props: ['module_id'],
  components: {
    'quiz-question': QuizQuestion,
    'quiz-results': QuizResults
  },
  data () {
    return {
      quizs: [],
      quiz_required: {},
      results: null,
      result_object: '',
      show: true

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
      .then(result => this.result_object = result)
      .then(() => eventBus.$emit('calcResults'),
    this.show = false)
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
