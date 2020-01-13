<template lang="html">
<div>
<div v-for="course in courseList">
	<course-btn :course="course" />
</div>
</div>
</template>

<script>
import ModuleService from '@/content/services/ModuleService.js'
import CourseBtn from '@/content/components/courseBtn.vue'

export default {
	name: 'module-list',
	components: {
		'course-btn': CourseBtn
	},
	data () {
		return {
			courseList: []
		}
	},
	methods: {
		getCourseList () {
			const arrayURL = document.URL.split('/')
			const module = arrayURL[4]
			ModuleService.getList(module)
			.then(result => {
				this.courseList = result
			})
		}
	},
	mounted () {
		this.getCourseList()
	}
}
</script>

<style lang="css" scoped>
</style>
