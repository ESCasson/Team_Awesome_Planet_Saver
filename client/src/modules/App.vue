<template lang="html">
  <div class="wrapper" id="app">
<header-component />
<div class="center">
  <learning-content class="content" />
  <br />
  <progress-bar />
  <br />
  <nav-buttons />
</div>

  </div>
</template>

<script>
import LearningContent from '@/modules/components/learningContent.vue'
import NavBar from '@/modules/components/navBar.vue'
import ProgressBar from '@/modules/components/progressBar.vue'
import HeaderComponent from '@/modules/components/header.vue'
export default {
  name: 'app',
  components: {
    'learning-content': LearningContent,
    'nav-buttons': NavBar,
    'progress-bar': ProgressBar,
    'header-component' : HeaderComponent
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai|Varela+Round&display=swap');

.wrapper{
  color: #E4DAE2;
  background-color: #392D36;
  font-family: 'Baloo Bhai', cursive;
}

.center {
  font-family: 'Varela Round', cursive;
  color: #392D36;
  background-color: #e4dae2;
  padding: 0 25px;
}

#header-wrapper {
  display: flex;
  justify-content: center;
  margin: 0 50px;
  padding: 25px;
}

.content {
  display: flex;
  justify-content: center;
  background-color: #5D988C;
  border: 50px;
  padding: 30px;
}

img {
  margin-right: 10px;
}

button {
  background-color: #A48D3D;
}
</style>
