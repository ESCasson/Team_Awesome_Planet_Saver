<template>
  <div class="wrapper" id="app">
    <header-component>
    </header-component>
    <div class="center">
      <div id="header-wrapper">
      <h2>CO2 Learning Modules</h2>
    </div>
      <modules class="content" :module_id = 'module_id'></modules>
    </div>
  </div>


</template>

<script>
import modules from '@/home/components/modules_view.vue'
import headerComponent from '@/home/components/header.vue'


export default {
  name: 'app',
  data () {
    return {
      module_id: ''
    }
  },
  components: {
    modules: modules,
    'header-component': headerComponent
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
  justify-content: center;
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
