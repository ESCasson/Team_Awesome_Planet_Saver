<template lang="html">
<div id="quiz-btn">
<p><img src="../../public/pages.png" alt="light bulb logo" height="50">{{ quiz.moduleName }}: <button v-on:click="getLink(quiz)">Select Me</button></p>
</div>
</template>

<script>
export default {
	name: 'quiz-btn',
	props: ['quiz'],
	methods: {
		getLink (quiz) {
			const courseID = quiz.moduleID;
			this.$router.push({path: `/quizzes/${courseID}`})
		}
	}
}
</script>

<style lang="css" scoped>
</style>
