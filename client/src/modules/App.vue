<template lang="html">
  <div id="app">
  <learning-content />
  </div>
</template>

<script>
import LearningContent from '@/modules/components/learningContent.vue'
export default {
  name: 'app',
  components: {
    'learning-content': LearningContent
  }
}
</script>

<style lang="css" scoped>
</style>
