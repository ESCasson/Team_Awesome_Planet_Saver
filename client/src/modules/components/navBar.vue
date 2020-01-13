<template lang="html">
<div>
<div id="btns">
<button v-on:click="getPreviousPage()"><a :href="this.previousPage">Back</a></button>
<button v-on:click="getNextPage()"><a :href="this.nextPage">Next</a></button>
</div>
</div>
</template>

<script>
import LearningService from '@/modules/services/LearningService.js'

export default {
  name: 'nav-buttons',
  data () {
    return {
      nextPage: null,
      previousPage: null,
			totalPage: []
    }
  },
  methods: {
    getPreviousPage () {
      const getURL = document.URL
      const arrayURL = getURL.split('/')
      const previousPage = parseInt(arrayURL[6]) - 1
      if (previousPage === 0) {
        this.previousPage = `http://localhost:8080/content/${arrayURL[5]}`
      } else {
        this.previousPage = `http://localhost:8080/module/${arrayURL[4]}/${arrayURL[5]}/${previousPage}`
      }
    },

    getNextPage () {
      const getURL = document.URL
      const arrayURL = getURL.split('/')
      const nextPage = parseInt(arrayURL[6]) + 1
			const length = this.totalPage.length;

			if (nextPage > length) {
        this.nextPage = `http://localhost:8080/quiz/${arrayURL[5]}`
      } else {
        this.nextPage = `http://localhost:8080/module/${arrayURL[4]}/${arrayURL[5]}/${nextPage}`
      }
    },

	totalPages () {
		const getURL = document.URL
		const arrayURL = getURL.split('/')
		const currentModule = arrayURL[5]

		LearningService.getTotalPages(currentModule)
		.then(result => {
			this.totalPage = result
		})
	}
},
mounted () {
	this.totalPages()
}
}
</script>

<style lang="css" scoped>

#btns {
display: flex;
justify-content: space-between;
margin-left: 50px;
margin-right:50px;
}

#btns button:last-child {
margin-left: auto;
}
</style>
