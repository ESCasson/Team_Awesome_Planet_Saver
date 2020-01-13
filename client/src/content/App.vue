<template lang="html">
  <div id="app">
		<module-list />
  </div>
</template>

<script>
import ModuleList from '@/content/components/ModuleList.vue'
export default {
	name: 'app',
	components: {
		'module-list': ModuleList
	}
}
</script>

<style lang="css" scoped>
</style>
