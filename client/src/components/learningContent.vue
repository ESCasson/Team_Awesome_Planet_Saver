<template lang="html">
  <div>
<h1>{{ this.moduleName }}</h1>
<div class="content">
<h3>{{ this.title }}</h3>
<p>{{ this.content }}</p>
</div>
  </div>
</template>

<script>
import LearningService from '@/services/ModulesLearningService.js'
export default {
  name: 'learning-content',
  data () {
    return {
      moduleName: '',
      title: '',
      content: ''
    }
  },
  mounted () {
    this.getAllData()
  },
  methods: {
    getAllData () {
      const currentURL = document.URL
      const arrayURL = currentURL.split('/')
      LearningService.getAllData(arrayURL[5], arrayURL[6])
        .then(result => {
          this.content = result.data
          this.title = result.contentName
          const newName = result.moduleName.split('_')
          this.moduleName = newName.join(' ')
        })
    }
  }
}
</script>

<style lang="css" scoped>

</style>
