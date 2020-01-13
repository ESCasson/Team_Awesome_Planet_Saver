<template lang="html">
  <div>
		<h3>Login</h3>
			<label for="username">Username:</label>
			<input type="text" id="username" v-model="username">
			<br />
			<label for="password">Password:</label>
			<input type="password" id="password" v-model="password">
			<br />
			<button v-on:click="checkData()"><a :href="this.passed">Login</a></button>
  </div>
</template>

<script>
import LoginServices from '@/login/services/LoginServices.js'
export default {
	name: 'app',
	data () {
		return {
			username: null,
			password: null,
			dbusername: null,
			dbpassword: null,
			passed: null
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
				if(this.dbusername !== null && this.dbpassword !== null) {
					this.passed = "http://localhost:8080/home"
				}
			})
		}
	}
}
</script>

<style lang="css" scoped>
</style>
