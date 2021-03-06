/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import vuetify from './plugins/vuetify'
import store from './store'

//window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('navbar', require('./components/layouts/NavBar.vue').default);
Vue.component('footerbar', require('./components/layouts/FooterBar.vue').default);
Vue.component('slider', require('./components/auth/Slider.vue').default);
Vue.component('sign-in-form', require('./components/auth/SignInForm.vue').default);
Vue.component('sign-up-form', require('./components/auth/SignUp.vue').default);
Vue.component('post-card', require('./components/post/PostCard.vue').default);
Vue.component('post-form', require('./components/post/PostForm.vue').default);
Vue.component('profile-view', require('./components/profile/ProfileView.vue').default);
Vue.component('following', require('./components/following/Following.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    store: store,
    vuetify
}).$mount('#app');
