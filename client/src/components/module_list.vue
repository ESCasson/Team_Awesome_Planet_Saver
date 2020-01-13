<template lang="html">
	<div>
		<div v-for="(module, index) in modules" :key='index' :module='module'>
			<p>{{ module.name }}: <button>Select Me</button></p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'module-list',
  props: ['modules'],
  data () {
    return {
      module: null
    }
  }
}
</script>

<style lang="css" scoped>
</style>
