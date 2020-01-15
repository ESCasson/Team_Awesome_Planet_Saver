<template lang="html">
    <div class="center">
      <div class="header-wrapper">
      <h2>{{ this.name }}</h2>
    </div>
    <module-list class="content"/>
    </div>

</template>

<script>
import ModuleList from '@/components/ModuleContentList.vue'
import ModuleServices from '@/services/ModulesLearningService.js'

export default {
	name: 'app',
	components: {
		'module-list': ModuleList
	},
	data () {
		return {
			name: null
		}
	},
	computed: {
		moduleName () {
			return this.$route.params.id
		}
	},
	methods: {
		getModuleName () {
			ModuleServices.getModule(this.$route.params.id)
			.then(result => {
				this.name = result[0].moduleName
			})
		}
	},
	mounted () {
		this.getModuleName()
	}
}
</script>

<style lang="css" scoped>



</style>
