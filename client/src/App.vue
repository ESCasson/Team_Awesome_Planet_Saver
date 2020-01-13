<template>
  <div class="center" id="app">
    <modules :module_id = 'module_id'></modules>
  </div>

</template>

<script>
import modules from './components/modules_view.vue'
// import modules from "./services/moduleService.js";
// import header from "./components/header.vue"; - builds a header.vue
// import navbar from "./components/navbar.vue";
<<<<<<< HEAD
=======

>>>>>>> develop
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
<<<<<<< HEAD
=======

>>>>>>> develop
      this.module_id = currentModule
    }
  },
  mounted () {
    this.getCurrentModule()
  }
}
</script>

<style lang="css" scoped>
<<<<<<< HEAD
/* .center {
  text-align: center;
}
=======

/* .center {
  text-align: center;

}

>>>>>>> develop
.size {
    max-width: 350px;
    height: auto;
} */
<<<<<<< HEAD
=======

>>>>>>> develop
</style>
