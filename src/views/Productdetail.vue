<template>
<div class="pruduct">
      <head-list :nameList="Data.nameList"></head-list>
      <product-swiper :bestGoodList="Data.bestGoodList"></product-swiper>
      <product-main :goodActiveList="Data.goodActiveList" :fromstr="fromstr" :sayList="Data.sayList" :bestGoodList="Data.bestGoodList"></product-main>
</div>

</template>

<script>
import productSwiper from '../components/productdetail/productSwiper'
import productMain from '../components/productdetail/productMain'
import { mapState } from "vuex";
export default {
  components:{
    'product-swiper':productSwiper,
    'product-main':productMain
  },
  data() {
    return {
      idNum:"",
      fromstr:"",
      list: [
        {
          url: "index/channel_settings?channel=home&region_id=0&_=1589872179600",
          name: "nameList"
        },
        {
          url: "goods_gallery/"+this.idNum,
          name: "bestGoodList" 
        },
        {
          url: "goods/"+this.idNum+"?ju=&h=",
          name: "goodActiveList" 
        },
        {
          url: "feedback/"+this.idNum+"/1",
          name: "sayList" 
        }
      ]
    };
  },
  computed: {

    ...mapState({
      Data: state => state.datalist
    })
  },
  beforeCreate(){
    const str = this.$route.path;
    this.idNum =  str.slice(str.indexOf('/',1)+1) 
  },
  created() {
    this.$store.dispatch("fetch", this.list);
  },
beforeRouteEnter(to, from, next){
  next(vm => {
    // 通过 `vm` 访问组件实例,将值传入fromstr
    if(from.path.indexOf('wangzhegoods')!==-1){
    vm.fromstr = from.path
    }
  })
},
  methods: {

  }
};
</script>

<style lang="less" scoped>
.pruduct{
    // margin-top: 1rem;
    margin-bottom: 1.1rem;
}
</style>