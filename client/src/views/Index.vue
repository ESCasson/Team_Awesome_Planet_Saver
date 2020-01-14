<template lang="html">
<div class="wrapper" id="index">
	<div class="center">
		<div id="header-wrapper">
			<h3>Welcome!</h3>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'index'
}
</script>

<style lang="css" scoped>
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
</style>
