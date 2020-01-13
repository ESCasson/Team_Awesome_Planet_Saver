<template>
  <div class="wrapper" id="app">
    <header>
        <h1><img id="logo"src="../../public/earth.png" alt="earth logo" />Planet Saver</h1>
    </header>
    <div class="center">
      <div id="header-wrapper">
      <h2>CO2 Learning Modules</h2>
    </div>
      <modules :module_id = 'module_id'></modules>
    </div>
  </div>


</template>

<script>
import modules from '@/home/components/modules_view.vue'

export default {
  name: 'app',
  data () {
    return {
      module_id: ''
    }
  },
  components: {
    modules: modules
  },
  methods: {
    getCurrentModule () {
      const getURL = document.URL
      const arrayURL = getURL.split('/')
      const currentModule = arrayURL[3]
      this.module_id = currentModule
    }
  },
  mounted () {
    this.getCurrentModule()
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
.header img {
  float: left;
  background: #555;
}

img {
padding: 10px;
}


.logo{
  border: 10px;
}

.center {
  font-family: 'Varela Round', cursive;
  color: #392D36;
  background-color: #e4dae2;
  margin: 50px;
}

#header-wrapper {
  display: flex;
  justify-content: center;
  margin: 50px;
}

button {
  background-color: #A48D3D;
}

</style>
