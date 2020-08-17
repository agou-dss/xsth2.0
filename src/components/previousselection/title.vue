<template>
  <div class="inner_selection_title">
    <div v-if="sayList" class="my_title">
      <div
        class="my_title_inner"
        v-for="(item,index) in sayList.modules"
        :key="index"
        v-if="item.module_name"
      >
        <fieldset>
          <span class="left"></span>
          <legend>
            <span>{{item.module_name}}</span>
          </legend>
          <span class="right"></span>
        </fieldset>
      </div>
    </div>
    <div class="my_title_img">
      <div class="my_title_img_inner">
          <img v-if="threeFocus[0]" width="100%" :src="threeFocus[0].ad_code" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sayList: Object,
    threeFocus: Array
  }
};
</script>

<style lang="less" scoped>
.inner_selection_title {

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
          width: 40%;
          position: absolute;
          background-color: rgb(229, 229, 229);
          left: 0;
          top: 40%;
        }
        .right {
          height: 0.02rem;
          width: 40%;
          position: absolute;
          background-color: rgb(229, 229, 229);
          right: 0;
          top: 40%;
        }
        legend {
          padding: 0 0.14rem;
        }
      }
    }
  }
  .my_title_img{
      background-color: rgb(251, 251, 251);
      padding-bottom: .2rem;
        padding-top: 0.2rem;
      .my_title_img_inner{
          margin: 0 .3rem;
      }
  }
}
</style>