<template>
    <div class="privileges_title">
        
    <div v-if="activeTitle" class="my_title">
      <div
        class="my_title_inner"
        v-for="(item,index) in activeTitle.modules"
        :key="index"
        v-if="item.module_name == '特权活动'"
      >
        <fieldset>
          <span class="left"></span>
          <legend>
            <i class="icon"><img width="100%" :src="item.icon" alt=""></i>

            <span>{{item.module_name}}</span>
          </legend>
          <span class="right"></span>
        </fieldset>
      </div>
    </div>


    </div>
</template>

<script>
export default {
    props:{
        activeTitle:Object
    }
}
</script>

<style lang="less" scoped>
.privileges_title{

  .my_title {
    height: 0.9rem;
    line-height: 0.9rem;
    background: #f6f6f6;

    .my_title_inner {
      margin-left: 0.3rem;
      margin-right: 0.3rem;
      font-size: 0.32rem;
      text-align: center;
      fieldset {
        position: relative;
        .left {
          height: 0.02rem;
          width: 38%;
          position: absolute;
          background-color: rgb(229, 229, 229);
          left: 0;
          top: 40%;
        }
        .right {
          height: 0.02rem;
          width: 38%;
          position: absolute;
          background-color: rgb(229, 229, 229);
          right: 0;
          top: 40%;
        }
        legend {
          position: relative;
          padding: 0 0.14rem;
            font-size: .32rem;
            
          .icon{
              display: inline-block;
              width: .32rem;
              height: .32rem;
              margin-right: .06rem;
              img{
                      vertical-align: -.06rem;
              }
          }
          span{
              color: #333;
              font-size: .32rem;
          }
        }
      }
    }
  }
}
</style>