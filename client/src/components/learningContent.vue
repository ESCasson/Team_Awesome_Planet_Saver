<template lang="html">
  <div>
<h1>{{ this.title }}</h1>
<div class="content">
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
      title: '',
      content: ''
    }
  },
	computed: {
		moduleName () {
			return this.$route.params.id
		},
		modulePage () {
			return this.$route.params.page
		}
	},
  mounted () {
    this.getAllData()
  },
  methods: {
    getAllData () {
      LearningService.getAllData(this.moduleName, this.modulePage)
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
