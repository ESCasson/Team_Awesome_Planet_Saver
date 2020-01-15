<template lang="html">
    <div class="center">
      <div class="header-wrapper">
      <h2>Module Contents</h2>
    </div>
    <module-list class="content"/>
    </div>
</template>

<script>
import ModuleList from '@/components/ModuleList.vue'
export default {
	name: 'app',
	components: {
		'module-list': ModuleList
	}
}
</script>

<style lang="css" scoped>

button {
  background-color: #A48D3D;
}


</style>
