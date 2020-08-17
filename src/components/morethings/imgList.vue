<template>
  <div class="img_list">
    <div v-if="goodInterestsList.module_setting" class="good_interests_img">
      <img width="100%" :src="goodInterestsList.module_setting.module_title_image_url" alt />
      <img width="100%" :src="goodInterestsList.poster_list[0].poster_image_url" alt />
      <img
        v-if="goodActiveList.poster_list"
        width="100%"
        :src="goodActiveList.poster_list[0].poster_image_url"
        alt
        @click="Gorouter(goodActiveList.poster_list[0].poster_link)"
      />
      <img
        v-if="goodInterestsGoodList.poster_list"
        width="100%"
        :src="goodInterestsGoodList.poster_list[0].poster_image_url"
        alt
      />
    </div>
    <div class="img_list_specialgoodlist">
      <ul class="img_list_specialgoodlist_top">
        <li v-for="(item,index) in specialGoodList" :key="index" v-if="index<2">
          <img width="100%" :src="item.default_pic" alt />
        </li>
      </ul>
      <ul class="img_list_specialgoodlist_top">
        <li v-for="(item,index) in specialGoodList" :key="index" v-if="index>1">
          <img width="100%" :src="item.default_pic" alt />
        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    goodInterestsList: Object,
    goodActiveList: Object,
    goodInterestsGoodList: Object,
    specialGoodList: Array
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
.img_list {
  .img_list_specialgoodlist {
    .img_list_specialgoodlist_top {
      display: flex;
      li {
        flex-grow: 1;
      }
    }
  }
}
</style>