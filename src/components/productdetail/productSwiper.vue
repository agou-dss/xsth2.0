<template>
    <div class="product_detail">
    <el-carousel :height="imgheight" arrow="never" indicator-position="none" >
      <el-carousel-item v-for="(item,index) in bestGoodList" :key="index">
          <img width="100%" ref="banner" :src="item.ad_code" @load="imgload"  alt />
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
export default {
    data(){
        return{
            imgheight:''
        }
    },
  props: {
    bestGoodList: Array,
  },
  methods:{
    imgload(){
      this.imgheight= this.$refs.banner[0].height +'px'
    }
  }
}
</script>

<style lang="less" scoped>

</style>