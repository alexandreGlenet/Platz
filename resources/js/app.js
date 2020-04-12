/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('header-component', require('./components/HeaderComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);
Vue.component('comment-form-component', require('./components/commentaires/CommentForm.vue').default);
//Vue.component('ressources-component', require('./components/RessourcesComponent.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import store  from './store/index.js';
import router from './router.js';

const app = new Vue({
    el: '#app',
    router,
    store,

    created () {
      // this.$store.dispatch('setRessources');
      this.$store.dispatch('setCategories');
      this.$store.dispatch('setPlatzers');
      this.$store.dispatch('setCommentaires');
    }

});
