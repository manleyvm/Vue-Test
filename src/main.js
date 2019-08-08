import 'babel-polyfill'
import Vue from 'vue'
import VueMoment from 'vue-moment'
// import App from './App.vue'
import BasicApp from './BasicApp.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueMoment)
new Vue({
  vuetify,
  render: h => h(BasicApp)
}).$mount('#app')
