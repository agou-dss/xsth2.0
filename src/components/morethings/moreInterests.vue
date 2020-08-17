<template>
  <div class="more_interests">
    <div class="more_interests_header" v-if="bestGoodList[0]" @click="Gorouter(bestGoodList[0].ad_link)">
      <img :src="bestGoodList[0].ad_img_url" width="100%" />
    </div>
    <ul class="more_interests_main">
      <li v-for="(item ,index) in bestGoodList" :key="index" @click="Gorouter(item.url)">
        <img width="100%" :src="item.default_pic" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    bestGoodList: Array
  },
  methods:{
    Gorouter(paths){
      const sId =paths.slice(paths.lastIndexOf('/')+1) 
      this.$router.push('/productdetail/'+sId)
    }
  }
};
</script>

<style lang="less" scoped>
.more_interests {
  .more_interests_main {
    display: flex;
    li {
      flex: 1;
    }
  }
}
</style>