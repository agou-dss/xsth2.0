
<template>
  <div class="more_things">
    <head-list :nameList="Data.nameList"></head-list>
    <more-swiper :swiperList="Data.swiperList" :sayList="Data.sayList"></more-swiper>
    <sort-item :sortItemList="Data.sortItemList"></sort-item>
    <more-interests :bestGoodList="Data.bestGoodList"></more-interests>
    <img-list
      :goodInterestsList="Data.goodInterestsList"
      :goodActiveList="Data.goodActiveList"
      :goodInterestsGoodList="Data.goodInterestsGoodList"
      :specialGoodList="Data.specialGoodList"
    ></img-list>
    <good-list :goodsList="Data.goodList"></good-list>
    <good-list :goodsList="Data.goodListTwo"></good-list>
    <good-list :goodsList="Data.goodListThree"></good-list>
    <good-list :goodsList="Data.goodListFour"></good-list>
    <public-footer></public-footer>
    <fixed-icon></fixed-icon>
  </div>
</template>


<script>
import moreSwiper from '../components/morethings/moreswiper'
import moreInterests from '../components/morethings/moreInterests'
import imgList from '../components/morethings/imgList'
import goodList from '../components/morethings/goodList'

import { mapState } from "vuex";

export default {
  components:{
    'more-swiper': moreSwiper,
    'more-interests':moreInterests,
    'img-list': imgList,
    'good-list':goodList
  },
  data() {
    return {
      list: [
                {
          url: "index/channel_settings?channel=ys_xqt&region_id=0&_=1589872341945",
          name: "nameList"
        },
        {
          url: "slide_show/381/1384/39",
          name: "swiperList"
        },
        {
          url: "slide_show/381/1435/39",
          name: "sayList"
        },
        {
          url: "menu/381/1938/17",
          name: "sortItemList"
        },
        {
          url: "custom_focus/381/1737/26",
          name: "bestGoodList"
        },
        {
          url: "slide_show/381/1738/39",
          name: "goodInterestsList"
        },
        {
          url: "slide_show/381/1739/39",
          name: "goodActiveList"
        },
        {
          url: "slide_show/381/1413/39",
          name: "goodInterestsGoodList"
        },
        {
          url: "custom_focus/381/1431/26",
          name: "specialGoodList"
        },
        {
          url: "cascade_goods/1469/46",
          name: "goodList"
        },
        {
          url: "cascade_goods/1466/46",
          name: "goodListTwo"
        },
        {
          url: "cascade_goods/1467/46",
          name: "goodListThree"
        },
        {
          url: "cascade_goods/1468/46",
          name: "goodListFour"
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
  methods: {}
};
</script>

<style lang="less" scoped>
.more_things{
  position: relative;
  top: 0;
}
</style>
