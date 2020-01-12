<template lang="html">

<div class="center">
	<module-list :modules='moduleData' />
</div>

</template>

<script>
import LearningService from '@/services/learningService.js'
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
      const getURL = document.URL.split('/')

      LearningService.getModuleList(getURL[3])
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
