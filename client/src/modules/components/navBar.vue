<template lang="html">
<div>
<div id="btns">
	<button>Back</button>
	<button>Next</button>
</div>
</div>
</template>

<script>
export default {
  name: 'nav-buttons'
}
</script>

<style lang="css" scoped>

#btns {
display: flex;
justify-content: space-between;
}

#btns button:last-child {
	margin-left: auto;
}
</style>
