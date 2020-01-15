<template lang="html">
		<div class="center">
			<div id="header-wrapper">
				<h3>Register</h3>
			</div>
			<div class="content">
				<form id="register" v-on:submit="register" method="post">
					<label for="name">Name:</label>
					<input type="text" id="name" v-model="name">

					<label for="password">Password:</label>
					<input type="password" id="password" v-model="password">

					<input type="submit" id="save" value="Register">

				</form>
		</div>
	</div>
</template>

<script>
import LoginService from '@/services/LoginService'
import { eventBus } from '../main.js'

export default {
	name: 'app',
	data () {
		return {
			name: null,
			password: null
		}
	},
	methods: {
		register (form) {
			form.preventDefault()
			const newUser = {
				username: this.name,
				password: this.password
			}

			LoginService.registerUser(newUser)
			.then(() => {
				this.$router.push({path: '/login'})
			})
			.catch(err => console.error(err));
		}
	}
}
</script>

<style lang="css" scoped>

#save {
	background-color: #A48D3D;
}
</style>
