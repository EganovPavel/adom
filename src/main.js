import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import './assets/fonts/FuturaPT-Book/style.css';
import './assets/fonts/ProximaNova-Regular/style.css';
import './css/normalize.css';
import './css/tablet.css'
import './css/mobile.css'
import VuePreview from 'vue-preview'

Vue.config.productionTip = false
Vue.use(VuePreview)
firebase.initializeApp({
    apiKey: "AIzaSyCZPNSsLXW6W5ryRoKUUVXDurs6dfBFWYc",
    authDomain: "a-dom-54521.firebaseapp.com",
    databaseURL: "https://a-dom-54521.firebaseio.com",
    projectId: "a-dom-54521",
    storageBucket: "a-dom-54521.appspot.com",
    messagingSenderId: "733259049070",
    appId: "1:733259049070:web:2df04068e4b16327765e7f"
})

new Vue({
  render: h => h(App),
}).$mount('#app')
