<template lang="html">
<div class="center">
  <div class="header-wrapper">
  </div>
  <learning-content class="content" />
  <br />
  <progress-bar />
  <br />
  <nav-buttons />
</div>
</template>

<script>
import LearningContent from '@/components/learningContent.vue'
import NavBar from '@/components/navBar.vue'
import ProgressBar from '@/components/progressBar.vue'
import HeaderComponent from '@/components/header.vue'
import { eventBus } from '../main.js';

export default {
  name: 'app',
  components: {
    'learning-content': LearningContent,
    'nav-buttons': NavBar,
    'progress-bar': ProgressBar,
    'header-component' : HeaderComponent
  },
	mounted () {
		eventBus.$on('change', () => {
			window.location.reload(true);
		})
	}
}
</script>

<style lang="css" scoped>



</style>
