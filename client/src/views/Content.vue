<template lang="html">
  <div class="wrapper" id="app">
    <div class="center">
      <div id="header-wrapper">
      <h2>Module Contents</h2>
    </div>
    <module-list class="content"/>
    </div>

    </div>

  </div>
</template>

<script>
import ModuleList from '@/components/ModuleList.vue'
export default {
	name: 'app',
	components: {
		'module-list': ModuleList
	}
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai|Varela+Round&display=swap');

.wrapper{
  color: #E4DAE2;
  background-color: #392D36;
  font-family: 'Baloo Bhai', cursive;
}

.center {
  font-family: 'Varela Round', cursive;
  color: #392D36;
  background-color: #e4dae2;
  padding: 0 25px;
}

#header-wrapper {
  display: flex;
  justify-content: center;
  margin: 0 50px;
  padding: 25px;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #5D988C;
  border: 50px;
  padding: 30px;
}

img {
  margin-right: 10px;
}

button {
  background-color: #A48D3D;
}


</style>
