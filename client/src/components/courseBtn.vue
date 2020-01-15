<template lang="html">
<div id="course-btn">
<p><img src="../../public/book.png" alt="light bulb logo" height="50">{{ course.moduleName }}: <button v-on:click="getLink(course)">Select Me</button></p>
</div>
</template>

<script>
export default {
	name: 'course-btn',
	props: ['course'],
	methods: {
		getLink (course) {
			const courseID = course.moduleID;
			this.$router.push({path: `/modules/${courseID}`})
		}
	}
}
</script>

<style lang="css" scoped>
</style>
