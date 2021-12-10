import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import NotesTable from './components/NotesTable.vue' 

Vue.config.productionTip = false
Vue.component('notes-table', NotesTable)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
