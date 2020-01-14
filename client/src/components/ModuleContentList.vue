<template lang="html">
<div id="module-list">
<div v-for="course in courseList">
	<course-btn :course="course" />
</div>
</div>
</template>

<script>
import ModuleService from '@/services/ModulesLearningService.js'
import CourseBtn from './ModulecourseBtn.vue'

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
	computed: {
		moduleName () {
				return this.$route.params.id
			}
		},
	methods: {
		getModuleData () {
			ModuleService.getModule(this.moduleName)
			.then(result => {
				this.courseList = result
			})
		}
	},
	mounted () {
		this.getModuleData()
	}
}
</script>

<style lang="css" scoped>
</style>
