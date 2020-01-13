<template lang="html">
  <div>
		<p>{{ module.moduleName.split('_').join(' ') }}: <button v-on:click="getLink(module)"><a :href="this.link">Select Me</a></button></p>
  </div>
</template>

<script>
export default {
	name: 'module-btn',
	props: ["module"],
	data () {
    return {
      link: null
    }
  },
	methods: {
		getLink (module) {
			const id = module.moduleID;
			this.link = `http://localhost:8080/content/${id}`
		}
	}
}
</script>

<style lang="css" scoped>
</style>
