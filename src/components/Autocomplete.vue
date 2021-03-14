<template>
  <div class="autocomplete">
    <h1>Contrôle fiscal des contribuables</h1>
    <label for="search">Chercher un contribuable : </label><br>
    <input id="search" type="text" v-model="query" placeholder="Taper ici">
    <div 
      class="options" 
      v-for="taxpayer in filteredTaxpayers" 
      :key="taxpayer.spi"
      @click="itemClicked">
      <span><b>{{ taxpayer.name}}</b></span><br>
      <span>SPI : {{ taxpayer.spi }}</span><br>
      <span>Statut : {{ taxpayer.status }}</span><br>
      <span>adresse : {{ taxpayer.address }}</span><br>
    </div>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    taxpayers(){
      return this.$store.state.taxpayers
    },
    filteredTaxpayers(){
      return this.taxpayers.filter((taxpayer)=> taxpayer.name.toLowerCase().includes(this.query.toLowerCase()))
    }
  }
  
}
</script>

<style scoped>
.autocomplete{
  width: 800px;
  margin: 0 auto;
}
.options{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>