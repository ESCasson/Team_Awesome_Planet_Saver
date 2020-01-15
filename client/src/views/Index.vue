<template lang="html">
	<div class="content">
		<div class="pod">
			<div><img class="welcome-img" :src="this.image" alt="Nasa Picture of The Day" /></div>
			<p class="space">{{ this.description }}</p>
		</div>
		<br />
		<div class="btns">
			<button v-on:click="login()">Login</button>
			<button v-on:click="register()">Register</button>
		</div>
	</div>
</template>

<script>
import Nasa from '@/services/NasaServices.js'
export default {
	name: 'index',
	data () {
		return {
			image: null,
			description: null
		}
	},
	methods: {
		login () {
			this.$router.push({ path: '/login' })
		},

		register () {
			this.$router.push({ path: '/register' })
		},

		getNasa () {
			Nasa.getAOP()
			.then(result => {
				this.image = result.url,
				this.description = result.explanation
			})
		}
	},
	mounted () {
		this.getNasa()
	}
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
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
	background-color: #e4dae2;
  border: 50px;
  padding: 30px;
}
.welcome-img {
	width: 500px;
	height: 500px;
	border: 1px black solid;
}
.pod {
	display: flex;
	justify-content: center;
}
.btns {
	display: flex;
	justify-content: center;
}
.space {
	margin: 20px;
}
button {
	padding: 10px;
	margin: 10px;
}


</style>
