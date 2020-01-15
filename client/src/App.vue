<template>
	<div class="wrapper" id="app">
		<div class="header">
			<header-component />
		</div>
		<div class="body">
			<router-view />
		</div>
		<div class="footer">
			<footer-component />
		</div>
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
	position: relative;
	min-height: 100vh;
}


.center {
  font-family: 'Varela Round', cursive;
  color: #392D36;
  background-color: #e4dae2;
	min-height: 300px;
	padding: 25px;
}

.body {
	padding-bottom: 200px;
}

.footer {
	position: absolute;
	bottom: 0;
	width: 100%;
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
