import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
require('./assets/sass/app.scss');
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
