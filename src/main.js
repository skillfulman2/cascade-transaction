import Vue from 'vue'
import App from './App.vue'
import { store } from './store';
import Transaction from './components/Transaction.vue'


Vue.config.productionTip = false
Vue.component('transaction', Transaction)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
})

