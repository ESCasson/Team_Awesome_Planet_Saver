<template lang="html">
	<div>
		<div v-for="(module, index) in modules" :key='index' :module='module'>
			<module-btn :module="module" />
		</div>
	</div>
</template>

<script>
import ModuleBtn from './module_btn.vue'
export default {
  name: 'module-list',
  props: ['modules'],
	components: {
    'module-btn': ModuleBtn
  }
}
</script>

<style lang="css" scoped>
</style>
