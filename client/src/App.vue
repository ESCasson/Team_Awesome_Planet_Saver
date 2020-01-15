<template>
	<div class="wrapper" id="app">
		<header-component />
		<router-view />
		<footer-component />
	</div>
</template>
<script>

import HeaderComponent from './components/header.vue';
import FooterComponent from './components/footer.vue';


export default {
  name: 'app',
  components: {
    'header-component': HeaderComponent,
		'footer-component': FooterComponent
  }
}
// IMPORT CSS HERE

</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai|Varela+Round&display=swap');

.wrapper{
  color: #392D36;
  background-color: #E4DAE2;
  font-family: 'Baloo Bhai', cursive;
}


.center {
  font-family: 'Varela Round', cursive;
  color: #392D36;
  background-color: #e4dae2;
	min-height: 300px;
	padding: 25px;
}

.header-wrapper {
  display: flex;
  justify-content: center;
  margin: 0 50px;
	padding-top: 0;
  padding-bottom: 25px;
}
.image-wrapper {
	display: flex;
  justify-content: center;
}
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #5D988C;
  border: 50px;
  padding: 30px;
}

button {
	background-color: #A48D3D;
}

</style>
