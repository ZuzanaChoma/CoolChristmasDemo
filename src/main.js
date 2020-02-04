import Vue from 'vue';
import App from './App';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

//fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faGift, faGifts, faShippingFast, faCalendarCheck, faBoxOpen, faCheck, faPlusCircle, faCreditCard, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VModal from 'vue-js-modal'
import 'lazysizes'
//routing and styles
import router from './utils/router';
import {store} from './utils/store';
import './utils/style.sass';

library.add(faUsers, faGifts, faGift, faShippingFast, faCalendarCheck, faCheck, faBoxOpen, faPlusCircle, faCreditCard, faUser, faTimes)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('VueSlider', VueSlider)
Vue.use(VModal)

 
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

