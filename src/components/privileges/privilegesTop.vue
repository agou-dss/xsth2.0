<template>
  <div class="privileges_top">
    <div class="privileges_top_banner" >
      <el-carousel :height="imgheight" arrow="never" indicator-position="none">
        <el-carousel-item v-for="(item,index) in goodList" :key="index" >
          <img width="100%" ref="banner" :src="item.ad_code" @load="imgload"  @click="gorouter(index)"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      imgheight: ""
    };
  },
  props: {
    goodList: Array
  },
  methods: {
    imgload() {
      this.imgheight = this.$refs.banner[0].height + "px";
    },
    gorouter(id) {
      if (id === 0) {
        this.$router.push("/wangzhegoods");
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>