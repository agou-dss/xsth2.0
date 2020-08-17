import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datalist:{
      nameList:{},
      swiperList: {},
      sayList: {},
      sortItemList: [],
      bestGoodList: [],
      goodActiveList:{},
      rightInterestsList:{},
      newThingsList:{},
      threeFocus:[],
      goodInterestsList:{},
      goodInterestsGoodList:{},
      specialGoodList:[],
      goodInterestsBottomGoodList:{},
      goodList:[],
      goodListTwo:[],
      goodListThree:[],
      goodListFour:[],
      cityList:{},
    }
  },
  mutations: {
    change(state,data){
      state.datalist[data.names] = data.result
    }
  },
  actions: {
    fetch(ctx,config){
      config.forEach(item =>{
        axios.get(item.url).then(res => {
          let result = res.data
          let names = item.name
          ctx.commit('change',{result,names})
        });
      })
    }
  },
  modules: {
  }
})
