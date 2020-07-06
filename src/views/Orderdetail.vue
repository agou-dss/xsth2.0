<template>
  <div class="order_detail">
    <head-list></head-list>
    <div class="order_detail">
        <p class="title">订单编号</p>
        <p class="desc">{{orderDetailList.vaccine_sn}}</p>
    </div>
    <div class="order_detail">
        <p class="title">订单状态</p>
        <p class="desc" v-if="orderDetailList.pay_status == 3">已取消</p>
        <p class="desc" v-else-if="orderDetailList.pay_status == 2">付款成功</p>
        <p class="desc" v-else>待付款</p>
    </div>
    <div class="order_detail">
        <p class="title">产品</p>
        <p class="desc">{{orderDetailList.vaccine_name}}</p>
    </div>
    <div class="order_detail">
        <p class="title">下单时间</p>
        <p class="desc">{{orderDetailList.create_time}}</p>
    </div>
    <div class="order_detail">
        <p class="title">预约地址</p>
        <p class="desc">{{orderDetailList.clinic_name}}</p>
        <p class="title">电话：{{orderDetailList.clinic_tel}}</p>
        <p class="title">地址：{{orderDetailList.clinic_address}}</p>
    </div>
    <div class="order_detail">
        <p class="title">预约时间</p>
        <p class="desc">{{orderDetailList.booking_time}}</p>
    </div>
    <div class="order_detail">
        <p class="title">数量</p>
        <p class="desc">1</p>
    </div>
    <div class="order_detail">
        <p class="title">付款金额</p>
        <p class="desc">HKD {{orderDetailList.pay_price}}</p>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            orderDetailList:{}
        }
    },
    created () {
        this.$http.get('/opens/order_info/1/' + this.$route.params.id).then(res => {
            this.orderDetailList = res.data.data
        })
    }
}
</script>

<style scoped lang="less">
.order_detail{
    background-color: #fff;
    .order_detail{
            padding: .2rem .3rem;
            .title{
                font-size: .24rem;
                margin: .16rem 0;
                line-height: .24rem;
            }
            .desc{
                font-size: .28rem;
                line-height: .28rem;
                font-weight: bold;
            }
    }
}
</style>