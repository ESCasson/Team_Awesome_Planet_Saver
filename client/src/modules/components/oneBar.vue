<template lang="html">
<div id="onebar">
<ul>
<div v-for="page in pages">
<li>
<div v-if="donePages.includes(page.pageNumber)">
<div class="completed"></div>
</div>
<div v-else>
<div class="empty"></div>
</div>
</li>
</div>
</ul>
</div>
</template>

<script>
import EnrolledService from '@/modules/services/EnrolledService.js'

export default {
  name: 'one-bar',
  props: ['pages'],
  data () {
    return {
      donePages: []
    }
  },
  mounted () {
    this.getPage()
    this.completedPages()
  },
  methods: {
    getPage () {
      const getCurrentPage = document.URL
      const arrayURL = getCurrentPage.split('/')
      const page = arrayURL[6]
      this.currentPage = parseInt(page)
    },
    completedPages () {
      const getURL = document.URL
      const arrayURL = getURL.split('/')
      const studID = arrayURL[4]
      const modID = arrayURL[5]
      EnrolledService.getCompletedPages(studID, modID)
        .then(results => {
          this.donePages = results[0].currentPage
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<style lang="css" scoped>
#onebar {
width: 100%;
}

#onebar ul {
display: flex;
justify-content: center;
list-style: none;
}

#onebar ul li {
border: 2px solid black;
}

.completed {
display: flex;
height: 30px;
width: 200px;
background-color: green;
}

.empty {
display: flex;
height: 30px;
width: 200px;
}
</style>
