import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyBpx3C5pmN5OushWkh-6rkk6bzGmPB24b4",
    authDomain: "vue-calendar-3a58f.firebaseapp.com",
    databaseURL: "https://vue-calendar-3a58f.firebaseio.com",
    projectId: "vue-calendar-3a58f",
    storageBucket: "vue-calendar-3a58f.appspot.com",
    messagingSenderId: "400791041954",
    appId: "1:400791041954:web:a8985db5b0c57c509b24fb"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
