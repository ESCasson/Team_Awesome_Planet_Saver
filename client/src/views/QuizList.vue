<template lang="html">
    <div class="center">
      <div class="header-wrapper">
      <h2>Quizzes</h2>
    </div>
			<quiz-list class="content"/>
    </div>

    </div>

  </div>
</template>

<script>
import QuizList from '@/components/AllQuizList.vue'
export default {
	name: 'app',
	components: {
		'quiz-list': QuizList
	}
}
</script>

<style lang="css" scoped>


button {
	margin: 10px;
  background-color: #A48D3D;
}
</style>
