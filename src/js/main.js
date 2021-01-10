import Vue from 'vue/dist/vue.esm';
import { UpvoteApp } from './components/UpvoteApp.js';

// Styles
import 'bulma/css/bulma.min.css';
import '../css/styles.css';

new Vue({
  render: h => h(UpvoteApp)
}).$mount('#app');
