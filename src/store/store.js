import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    taxpayers: [
      {name: 'Stephanie Leroux', spi: 500001, address: '6 rue des Thallandier', status: 'célibataire'},
      {name: 'François Gries', spi: 100002, address: '54 rue de La République', status: 'en union'},
      {name: 'Christian Degris', spi: 300003, address: '77 boulevard Jean Jaurès', status: 'marié'},
      {name: 'Aurélie Sinès', spi: 200004, address: '9 square Aquitaine', status: 'mariée'},
      {name: 'Christelle Léon', spi: 400005, address: '88 rue Solférino', status: 'célibataire'}
    ]
  },
  getters: {
  
  }
})