<template>
  <div class="head_list">
    <div class="head_list_box">
      <div class="img_box" @click="$router.back()">
        <img :src="this.$route.meta.path" alt />
      </div>
      <div class="top_title">
        <span>{{this.$route.meta.name}}</span>
      </div>
      <div style="width:.88rem"></div>
      <div class="icon_box" @click="iconRouter">
        <p>{{this.$route.meta.icon}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    iconRouter(){
      if(this.$route.path.indexOf('home') > -1){
        this.$router.push('/orderlist')
      }

    }
  }
};
</script>

<style lang="less" scoped>
.head_list {
  height: 0.88rem;
  .head_list_box {
    position: fixed;
    width: 100%;
    z-index: 98;
    top: 0;
    height: 0.88rem;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
    box-sizing: border-box;
    display: flex;
    .img_box {
      width: 0.88rem;
      height: 0.88rem;
      & > img {
        position: absolute;
        left: 0.3rem;
        top: 0.2rem;
      }
    }
    .top_title {
      font-size: 0.32rem;
      flex-grow: 1;
      // position: absolute;
      & > span {
        line-height: 0.88rem;
        display: block;
        text-align: center;
      }
    }
    .icon_box {
      position: absolute;
      right: 0.3rem;
      font-size: 0.32rem;
      line-height: 0.88rem;
    }
  }
}
</style>