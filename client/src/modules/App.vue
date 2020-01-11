<template lang="html">
  <div id="app">
<div class="header">
<h1>Planet Saver</h1>
</div>
<div class="navbar">
<ul>
<li>Home</li>
<li>My Scores</li>
<li>Help</li>
</ul>
</div>
  <learning-content />
	<br />
	<progress-bar />
	<br />
	<nav-buttons />
  </div>
</template>

<script>
import LearningContent from '@/modules/components/learningContent.vue'
import NavBar from '@/modules/components/navBar.vue'
import ProgressBar from '@/modules/components/progressBar.vue'
export default {
  name: 'app',
  components: {
    'learning-content': LearningContent,
    'nav-buttons': NavBar,
    'progress-bar': ProgressBar
  }
}
</script>

<style lang="css" scoped>
#app {
font-family: Arial, sans-serif;
}
.header {
display: flex;
justify-content: center;
background-color: skyblue;
}

.navbar ul{
display: flex;
list-style: none;
background-color: #c0c0c0;
margin-top: 0;
padding-top: 0;
justify-content: space-around;
height: 30px;
}
</style>
