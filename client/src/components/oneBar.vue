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
import EnrolledService from '@/services/ModulesEnrolledService.js'

export default {
  name: 'one-bar',
  props: ['pages'],
  data () {
    return {
      donePages: []
    }
  },
	computed: {
		currentPage () {
			return this.$route.params.page
		},
		moduleID () {
			return this.$route.params.id
		}
	},
  mounted () {
    this.completedPages()
  },
  methods: {

    completedPages () {
      EnrolledService.getCompletedPages('CPJA181293', this.moduleID)
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
border: 2px solid #392D36;
}

.completed {
display: flex;
height: 30px;
width: 200px;
background-color: #5D988C ;
}

.empty {
display: flex;
height: 30px;
width: 200px;
}
</style>
