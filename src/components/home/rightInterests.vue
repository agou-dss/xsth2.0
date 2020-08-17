<template>
  <div class="right_interests">
      <div v-if="rightInterestsList.tabs" class="right_interests_img">
        <img :src="rightInterestsList.tabs.left.image_path" alt="">
        <img :src="rightInterestsList.tabs.right.image_path" alt="">
      </div>
  </div>
</template>

<script>
export default {
  props:{
    rightInterestsList:Object
  }
}
</script>

<style lang="less" scoped>
.right_interests{
  .right_interests_img{
    img{
      width: 50%;
    }
  }
}
</style>