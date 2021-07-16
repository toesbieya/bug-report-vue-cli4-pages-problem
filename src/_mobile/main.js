import Vue from 'vue'
import 'vant/lib/index.css'
import Vant from 'vant'
import App from './App'

Vue.use(Vant)

new Vue({el: '#app', render: h => h(App)})
