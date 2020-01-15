<template lang="html">
	<div class="center">
		<div class="header-wrapper">
			<h2>Welcome!</h2>
		</div>
		<div class="image-wrapper">
			<img src="../../public/welcome.png" alt="Girl at a blackboard">
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

img {
	width: 500px;
}


</style>
