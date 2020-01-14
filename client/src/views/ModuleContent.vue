<template lang="html">
    <div class="center">
      <div class="header-wrapper">
      <h2>{{ moduleName }}</h2>
    </div>
    <module-list class="content"/>
    </div>

</template>

<script>
import ModuleList from '@/components/ModuleContentList.vue'

export default {
	name: 'app',
	components: {
		'module-list': ModuleList
	},
	computed: {
		moduleName () {
			return this.$route.params.id
		}
	}
}
</script>

<style lang="css" scoped>



</style>
