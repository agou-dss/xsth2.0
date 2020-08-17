<template>
  <div class="hello" :class="istrue?'wangzhe':''">
    <el-carousel :height="imgheight" :arrow="arrow" :indicator-position="indicator" >
      <el-carousel-item v-for="(item,index) in swiperList.poster_list" :key="index">
          <img width="100%" ref="banner" :src="item.poster_image_url" @load="imgload"  alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgheight:'',
      istrue:'',
      arrow:'hover',
      indicator:''
    }
  },
  created(){
    if(this.$route.path.indexOf('wangzhegoods') !== -1){
      this.istrue = true;
      this.arrow = 'never';
      this.indicator = 'none';
    }
  },
  props: {
    swiperList: Object,
  },
  methods:{
    imgload(){
      this.imgheight= this.$refs.banner[0].height +'px'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  background-color: #fff;
  padding: 0 .2rem;
}
.wangzhe{
  padding: 0;
}

</style>
