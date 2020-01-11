<template lang="html">
<div id="onebar">
	<ul>
		<div v-for="page in pages">
		<li>
			<div v-if="page.pageNumber < currentPage">
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
export default {
  name: 'one-bar',
  props: ['pages'],
  data () {
    return {
      currentPage: 0
    }
  },
  mounted () {
    this.getPage()
  },
  methods: {
    getPage () {
      const getCurrentPage = document.URL
      const arrayURL = getCurrentPage.split('/')
      const page = arrayURL[5]
      this.currentPage = parseInt(page)
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
