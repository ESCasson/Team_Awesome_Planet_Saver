<template lang="html">

<div class="center">
  <label for="module_select"><h2>Select Intro - Reducing CO2:</h2></label><br>
    <button id="module_select" v-on:change="handleChange" v-model="selectedModule">
      <option disabled value="">Select this module</option>
      <option v-for="(module, index) in modules" :key="index" :value="module">{{module.name}}</option>
    </button>
</div>

</template>

<script>
import {eventBus} from '../main.js';

export default {
    name: 'module-view',
    data(){
      return{
        selectedModule: null
      }
    },
    props: ['modules'],
    methods: {
      handleChange(event){
        eventBus.$emit('module-selected', this.selectedModule)
    },
  }
//   mounted(){
//     fetch()
//     .then(res => res.json())
//     .then(modules => this.modules = modules)
//
//     eventBus.$on("module-selected", (mountain) => {
//       this.selectedModule = module
//      })
}
</script>

<style lang="css" scoped>


</style>
