import Vue from 'vue/dist/vue.esm';
import UpvoteApp from './components/UpvoteApp.vue';

// Styles
import 'bulma/css/bulma.min.css';

new Vue({
  render: h => h(UpvoteApp)
}).$mount('#app');
