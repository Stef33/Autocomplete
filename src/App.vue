<template>
  <div id="app">
    <autocomplete></autocomplete>
  </div>
</template>

<script>
import Autocomplete from './components/Autocomplete.vue'

export default {
  name: 'App',
  components: {
    Autocomplete
  }
}
</script>

<style>
h#app{
  margin: 0 auto;
  margin-top: 60px;
  width: 400px;
  text-align: center;
}
</style>
