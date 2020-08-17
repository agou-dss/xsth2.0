<template>
  <div class="good_active">
    <div class="good_active_title">
      <img :src="goodActiveList.module_name_img" alt="">
    </div>
    <div class="good_active_goodimg">
      <div class="good_active_goodimg_partone">
        <img class="good_active_goodimg_partone_bgc" :src="goodActiveList.left_title_pic" alt="">
            <el-carousel class="good_active_goodimg_partone_banner" direction="vertical" indicator-position="none" :autoplay="true">
              <el-carousel-item v-for="(item,index) in goodActiveList.left_turn_pic" :key="index">
                <img width="100%" :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
      </div>
      <div class="good_active_goodimg_parttwo">
          <img class="good_active_goodimg_parttwo_bgc" :src="goodActiveList.right_pic" alt="">
          <a class="good_active_goodimg_parttwo_left"></a>
          <a class="good_active_goodimg_parttwo_right"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodActiveList:Object
  }
}
</script>

<style lang="less" scoped>
.good_active{
  .good_active_title{
    img{
      width: 100%;
    }
  }
  .good_active_goodimg{
    display: flex;
    justify-content: space-between;
     padding: 0 .23rem;
     .good_active_goodimg_partone{
       width: 49.135%;
       position: relative;
       .good_active_goodimg_partone_bgc{
         width: 100%;
       }
       .good_active_goodimg_partone_banner{
         position: absolute;
         width: 100%;
         left: 0;
         top: 20%;
         height: 80%;
       }
     }
     .good_active_goodimg_parttwo{
       width: 49.135%;
       position: relative;
       .good_active_goodimg_parttwo_bgc{
         width: 100%;
       }
       .good_active_goodimg_parttwo_left{
         position: absolute;
         width: 50%;
         height: 100%;
         left: 0;
         top: 0;
       }
       .good_active_goodimg_parttwo_right{
                  position: absolute;
         width: 50%;
         height: 100%;
         left: 50%;
         top: 0;
       }
     }
  }
}
</style>