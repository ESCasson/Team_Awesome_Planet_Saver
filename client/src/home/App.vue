<template>
  <div class="center" id="app">
    <modules :module_id = 'module_id'></modules>
  </div>

</template>

<script>
import modules from '@/home/components/modules_view.vue'

export default {
  name: 'app',
  data () {
    return {
      module_id: ''
    }
  },
  components: {
    modules: modules
  },
  methods: {
    getCurrentModule () {
      const getURL = document.URL
      const arrayURL = getURL.split('/')
      const currentModule = arrayURL[3]
      this.module_id = currentModule
    }
  },
  mounted () {
    this.getCurrentModule()
  }
}
</script>

<style lang="css" scoped>

</style>
