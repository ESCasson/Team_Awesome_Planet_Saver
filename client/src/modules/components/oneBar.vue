<template lang="html">
<div id="onebar">
	<ul>
		<div v-for="page in pages">
		<li><div class="one"></div></li>
		</div>
	</ul>
</div>
</template>

<script>
export default {
  name: 'one-bar',
  props: ['pages']
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

.one {
display: flex;
height: 30px;
width: 200px;
}
</style>
