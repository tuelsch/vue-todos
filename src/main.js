import Vue from 'vue';
import App from './App';
import store from './store';


/* eslint-disable no-new */
new Vue({
  el: 'body',
  store: store,
  components: { App }
});
