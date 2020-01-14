<template lang="html">
  <div>
    <div  v-if="this.show">
      <div id="header-wrapper">
        <h2>Quiz for module: {{module_id}}</h2>
      </div>
      <div class="content">

      <quiz-question v-for="(fullQuestion, index) in this.quiz_required.questions"
      :fullQuestion="fullQuestion" :key="index"/>
    <button type="button" name="button" v-on:click="handleOnClick">Submit Answers</button>
  </div>
    </div>

  <quiz-results v-else="this.show" :result_object ="result_object" ></quiz-results>
    </div>
</template>

<script>
const moment = require('moment');
import { eventBus } from '../main.js';

import QuizsService from '@/services/QuizQuizsService.js';
import StudentsService from '@/services/QuizStudentsService.js';

import QuizQuestion from './QuizQuestion.vue';
import QuizResults from './QuizResults.vue'


export default {
  name: 'quiz',
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
      show: true,
      'module_id': null

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
        objTemplate.timestamp='';
      for (let quizQuestion of quiz.questions){
        let ansTemplate = new Object();
        ansTemplate.number = quizQuestion.number;
        ansTemplate.result = '';
        objTemplate.results.push(ansTemplate)
      }
      return this.results = objTemplate
    },

    handleOnClick(){
      this.results.timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
      StudentsService.postStudentsResults(this.results)
      .then(result => this.result_object = result)
      .then(() => eventBus.$emit('calcResults'),
       this.show = false)
    },

		getModule () {
			const getURL = document.URL.split('/');
			const module = getURL[4]
			return this.module_id = 'RGG123';
		}

  },

  mounted() {
    this.fetchData(),

		this.getModule(),

    eventBus.$on('result', (id, result) => {
      for (let slot of this.results.results) {
        if(slot.number === id){
          slot.result = result
    }}}),
    eventBus.$on('retakeQuiz', () => {
      this.show = true
    })

  }
}
</script>

<style lang="css" scoped>
button {
  margin:10px
}
</style>
