

//public
import sortItem from './public/sortItem'
import fixedIcon from './public/fixedIcon'
import publicFooter from './public/publicFooter'
import headList from './public/headList'
import Swiper from './public/swiper'




export default {
  install(Vue){
    Vue.component('head-list',headList)
    Vue.component('Swiper',Swiper)
    Vue.component('sort-item',sortItem)
    Vue.component('fixed-icon',fixedIcon)
    Vue.component('public-footer',publicFooter)      
  }
}