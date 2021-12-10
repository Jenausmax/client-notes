import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueResource from 'vue-resource'
import NotesTable from './components/NotesTable.vue'

Vue.config.productionTip = false
Vue.component('notes-table', NotesTable)
Vue.use(VueResource)
Vue.http.options.root = 'https://localhost:5001/api/'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
