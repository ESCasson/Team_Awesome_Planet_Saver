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
import LearningService from '@/modules/services/LearningService.js'
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
h1 {
margin-left: 50px;
}
.content {
background-color: #f0f0f0;
border: 2px solid black;
margin-left: 50px;
margin-right: 50px;
}

.content h3 {
padding: 5px;
display: flex;
justify-content: center;
}

.content p {
padding-left: 50px;
padding-right: 50px;
}
</style>
