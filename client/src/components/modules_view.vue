<template lang="html">

<div class="center">
	<module-list :modules='moduleData' />
</div>

</template>

<script>
import LearningService from '@/services/modulesService.js'
import ModuleList from '@/components/module_list.vue'
export default {
  name: 'module-view',
  data () {
    return {
      moduleData: []
    }
  },
  components: {
    'module-list': ModuleList
  },
  methods: {
    getData () {
      LearningService.getModules()
        .then(result => {
          this.moduleData = result
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="css" scoped>

</style>
