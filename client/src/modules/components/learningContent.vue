<template lang="html">
  <div>
<h3>{{ this.title }}</h3>
<p>{{ this.content }}</p>
  </div>
</template>

<script>
import LearningService from '@/modules/services/LearningService.js'
export default {
  name: 'learning-content',
  data () {
    return {
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
      LearningService.getAllData(arrayURL[4], arrayURL[5])
        .then(result => {
          this.content = result.data
          this.title = result.contentName
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
