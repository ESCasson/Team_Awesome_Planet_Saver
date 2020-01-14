<template lang="html">
<div id="quiz-list">
<div v-for="quiz in quizList">
	<quiz-btn :quiz="quiz" />
</div>
</div>
</template>

<script>
import ModuleService from '@/services/ModulesModuleService.js'
import QuizBtn from './QuizBtn.vue'

export default {
	name: 'quiz-list',
	components: {
		'quiz-btn': QuizBtn
	},
	data () {
		return {
			quizList: []
		}
	},
	methods: {
		getQuizList () {
			ModuleService.getAllData()
			.then(result => {
				this.quizList = result
			})
		}
	},
	mounted () {
		this.getQuizList()
	}
}
</script>

<style lang="css" scoped>
</style>
