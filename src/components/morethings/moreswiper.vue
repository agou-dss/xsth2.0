<template>
  <div class="more_things">
    <div class="more_things_banner">
      <el-carousel :height="imgheight" :interval="2000" arrow="never">
        <el-carousel-item v-for="(item,index) in swiperList.poster_list" :key="index">
          <img width="100%" ref="banner" :src="item.poster_image_url" @load="imgload"  alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <img
        width="100%"
        v-if="sayList.poster_list"
        :src="sayList.poster_list[0].poster_image_url"
        alt
      />
    </div>
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
    swiperList: Object,
    sayList: Object
  },
  methods:{
    imgload(){
        this.imgheight = this.$refs.banner[0].height +'px'
    }
          
  }
};
</script>

<style lang="less" scoped>
.more_things_banner {
  background-color: #fff;
  padding: 0 0.2rem 0;
}
</style>