<template lang="html">
<div id="course-btn">
<p><img src="../../public/pages.png" alt="light bulb logo" height="50">{{ course.contentName }}: <button v-on:click="getLink(course)">Select Me</button></p>
</div>
</template>

<script>
export default {
	name: 'course-btn',
	props: ['course'],
	methods: {
		getLink (course) {
			const courseID = course.moduleID;
			this.$router.push({path: `/modules/${courseID}/${course.pageNumber}`})
		}
	}
}
</script>

<style lang="css" scoped>
</style>
