<template>
  <div class="shop_car_box">
    <shop-car :sayList="Data.sayList"></shop-car>
  </div>
</template>

<script>
import shopCar from '../components/shopcar/shopCar'
import { mapState } from "vuex";
export default {
  components:{
    'shop-car':shopCar
  },
  data() {
    return {
      list: [
        {
          url: "/api/notice/59/3",
          name: "sayList"
        }
      ]
    };
  },
  computed:{
    ...mapState({
      Data: state => state.datalist
    })
  },
  created(){
    this.$store.dispatch('fetch',this.list)
  }
};
</script>

<style lang="less" scoped>

</style>