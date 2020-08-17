<template>
  <div class="wang_zhe_goods">
    <head-list :nameList="Data.nameList"></head-list>
    <Swiper :swiperList="Data.swiperList"></Swiper>
    <wangzhe-goodlist :goodList="Data.goodList"></wangzhe-goodlist>
    <public-footer></public-footer>
    <fixed-icon></fixed-icon>
  </div>
</template>

<script>
import wangZheGoodsList from "../components/wangzhegoods/wangZheGoodsList";
import { mapState } from "vuex";
export default {
  components: {
    'wangzhe-goodlist':wangZheGoodsList
  },
  data() {
    return {
      list: [
        {
          url:
            "index/channel_settings?channel=wzry&region_id=0&_=1590041377587",
          name: "nameList"
        },
        {
          url: "slide_show/407/1532/39",
          name: "swiperList"
        },
        {
          url: "module_goods/1536/0",
          name: "goodList"
        }
      ]
    };
  },
  created() {
    this.$store.dispatch("fetch", this.list);
  },
  computed: {
    ...mapState({
      Data: state => state.datalist
    })
  }
};
</script>

<style lang="less" scoped>

</style>