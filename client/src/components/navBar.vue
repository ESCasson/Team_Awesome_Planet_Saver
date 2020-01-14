<template lang="html">
<div>
<div id="btns">
<button v-on:click="getPreviousPage()">Back</button>
<button v-on:click="getNextPage()">Next</button>
</div>
</div>
</template>

<script>
import LearningService from '@/services/ModulesLearningService.js'
import { eventBus } from '../main.js';

export default {
  name: 'nav-buttons',
  data () {
    return {
			totalPage: []
    }
  },
	computed: {
		moduleID () {
			return this.$route.params.id
		},
		currentPage () {
			return this.$route.params.page
		}
	},
  methods: {
    getPreviousPage () {
      const prevPage = parseInt(this.currentPage) - 1
			if(prevPage <= 0) return
			this.$router.push({path: `/modules/${this.moduleID}/${prevPage}`})
			eventBus.$emit('change');
    },

    getNextPage () {
      const nextPage = parseInt(this.currentPage) + 1
			if(nextPage > this.totalPage.length) {
				this.$router.push({path: `/quizzes/${this.moduleID}`})
			} else {
				this.$router.push({path: `/modules/${this.moduleID}/${nextPage}`})
			}
			eventBus.$emit('change');
    },

	totalPages () {
		LearningService.getTotalPages(this.moduleID)
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
