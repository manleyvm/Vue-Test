import Vue from 'vue'
// import VueFilterDateFormat from 'vue-filter-date-format';
import VueMoment from 'vue-moment';
// import App from './App.vue'
import BasicLayout from './BasicLayout.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
// Vue.use(VueFilterDateFormat);
Vue.use(VueMoment);

new Vue({
  vuetify,
  render: h => h(BasicLayout)
}).$mount('#app')
