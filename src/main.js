import Vue from 'vue';
import App from './App.vue';
import {registerVueGlobalComponent} from './register/vue-global-component.register';

Vue.config.productionTip = false

registerVueGlobalComponent();

new Vue({
  render: h => h(App),
}).$mount('#app')
