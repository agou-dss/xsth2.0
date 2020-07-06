<template>
  <div class="order_detail">
    <head-list></head-list>
    <order-detail :orderList="orderList"></order-detail>
  </div>
</template>

<script>
import orderDetail from '../components/Orderlist/ordermain'
import { countDownFun } from '../components/Orderlist/time'
export default {
  data () {
    return {
      orderList: {}
    }
  },
  components: {
    'order-detail': orderDetail
  },
  created () {
    this.$http.get('/api/order_info/2').then(res => {
      this.orderList = res.data
    })
  },
  beforeUpdate () {
    this.$nextTick(() =>{
      this.countDown()
    })

  },
  destroyed () {
    clearInterval(this.temp)
  },
  methods: {
    countDown () {
      this.orderList.data.forEach((item, index) => {
        if (item.pay_status == 0) {
          this.temp = setInterval(() => {
            item.mobile = countDownFun(item.end_time)
            if(item.mobile == 0){
              clearInterval(this.temp)
              item.pay_status == 3
            }
          }, 1000)
        }
      })
      console.log(this.orderList.data,1)
    }
  }
}
</script>

<style>
</style>
