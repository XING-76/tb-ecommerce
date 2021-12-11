import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import SwiperCore, {
  Autoplay,
  Navigation,
  Thumbs,
  Mousewheel,
  Pagination,
  Scrollbar
} from 'swiper'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'
import { currency, date, lineBreak } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'

import CustomLoading from './components/Loading.vue'

// font-awesome
library.add(fas)
library.add(fab)

// aos
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-out',
  anchorPlacement: 'top-bottom'
  // once: true,
})

// sweetalert
const options = {
  toast: true,
  position: 'center',
  background: '#373f50',
  iconColor: '#f3f5f9',
  customClass: {
    title: 'custom-title-class'
  },
  showConfirmButton: false,
  timer: 2500,
  confirmButtonColor: '#bb986c',
  cancelButtonColor: '#7d879c',
  cancelButtonText: '取消'
}

// swiper
SwiperCore.use([
  Navigation,
  Pagination,
  Mousewheel,
  Thumbs,
  Scrollbar,
  Autoplay
])

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency,
  lineBreak
}

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState

// font-awesome
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false

app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.component('CustomLoading', CustomLoading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('swiper', Swiper)
app.component('swiper-slide', SwiperSlide)
app.use(VueSweetalert2, options)

app.mount('#app')
