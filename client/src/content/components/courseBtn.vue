<template lang="html">
<div>
<p>{{ course.contentName }}: <button v-on:click="getLink(course)"><a :href="this.link">Select Me</a></button></p>
</div>
</template>

<script>
export default {
	name: 'course-btn',
	props: ['course'],
	data () {
		return {
			link: null
		}
	},
	methods: {
		getLink (course) {
			const id = course.moduleID;
			const page = course.pageNumber;
			this.link = `http://localhost:8080/module/CPJA181293/${id}/${page}`
		}
	}
}
</script>

<style lang="css" scoped>
</style>
