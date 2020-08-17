<template>
  <div class="home">
    <head-list :nameList="Data.nameList"></head-list>
    <Swiper :swiperList="Data.swiperList" ></Swiper>
    <say-things :sayList="Data.sayList"></say-things>
    <sort-item :sortItemList="Data.sortItemList"></sort-item>

    <best-good></best-good>

    <good-active :goodActiveList="Data.goodActiveList"></good-active>

    <right-interests :rightInterestsList="Data.rightInterestsList"></right-interests>

    <new-things :newThingsList="Data.newThingsList" :threeFocus="Data.threeFocus"></new-things>

    <good-interests
      :goodInterestsList="Data.goodInterestsList"
      :goodInterestsGoodList="Data.goodInterestsGoodList"
      :specialGoodList="Data.specialGoodList"
      :goodInterestsBottomGoodList="Data.goodInterestsBottomGoodList"
    ></good-interests>
    <public-footer></public-footer>
    <fixed-icon></fixed-icon>
  </div>
</template>

<script>

import sayThings from '../components/home/saythings'
import bestGood from '../components/home/bestGood'
import goodActive from '../components/home/goodActive'
import rightInterests from '../components/home/rightInterests'
import newThings from '../components/home/newThings'
import goodInterests from '../components/home/goodInterests'
import { mapState } from "vuex";
export default {
  components:{
    'say-things':sayThings,
    'best-good':bestGood,
    'good-active':goodActive,
    'right-interests':rightInterests,
    'new-things':newThings,
    'good-interests':goodInterests
  },
  data() {
    return {
      list: [
        {
          url: "index/channel_settings?channel=home&region_id=0&_=1589872179600",
          name: "nameList"
        },
        {
          url: "slide_show/531/1914/39",
          name: "swiperList"
        },
        {
          url: "notice/1953/3",
          name: "sayList"
        },
        {
          url: "menu/531/1915/17",
          name: "sortItemList"
        },
        {
          url: "module_two_grids/1934/48",
          name: "goodActiveList"
        },
        {
          url: "double_tabs/531/1918/44",
          name: "rightInterestsList"
        },
        {
          url: "slide_show/531/1920/39",
          name: "newThingsList"
        },
        {
          url: "three_focus/531/1919/19",
          name: "threeFocus"
        },
        {
          url: "slide_show/531/1921/39",
          name: "goodInterestsList"
        },
        {
          url: "goods_countdown/1922/36",
          name: "goodInterestsGoodList"
        },
        {
          url: "three_focus/531/1923/19",
          name: "specialGoodList"
        },
        {
          url: "goods_countdown/1924/36",
          name: "goodInterestsBottomGoodList"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      Data: state => state.datalist
    })
  },
  created() {
    this.$store.dispatch("fetch", this.list);
  },
  methods: {

  }
};


</script>

<style lang="less" scoped>
.home {
  overflow-x: hidden;
}
</style>
