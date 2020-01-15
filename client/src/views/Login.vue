<template lang="html">
  <div class="center" >
<div class="header-wrapper">
  <h2>Login</h2>
</div>

    <div class="content">


				<label for="username">Username:</label>
				<input type="text" id="username" v-model="username">
				<br />
				<label for="password">Password:</label>
				<input type="password" id="password" v-model="password">
				<br />
				<button v-on:click="checkData()">Login!</button>
  </div>
  </div>
</template>

<script>
import LoginServices from '@/services/LoginService.js'
export default {
	name: 'app',
	data () {
		return {
			username: null,
			password: null,
			dbusername: null,
			dbpassword: null
		}
	},
	methods: {
		checkData () {
			LoginServices.getData(this.username, this.password)
			.then(result => {
				this.dbusername = result.username
				this.dbpassword = result.password
			})
			.then(() => {
				if(this.dbusername === this.username && this.dbpassword === this.password) {
					this.$router.push({path: '/learning_library'})
				}
				else {
					alert('Error! Try again');
				}
			})
			.catch(err => {
				alert('Try again!');
			})
		}
	}
}
</script>

<style lang="css" scoped>

</style>
