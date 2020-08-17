<template>
  <div class="previous_selection">
    <head-list :nameList="Data.nameList"></head-list>
    <sort-item :sortItemList="Data.sortItemList"></sort-item>
    <Title :sayList="Data.sayList" :threeFocus="Data.threeFocus"></Title>
    <previous-list :goodList="Data.goodList"></previous-list>
    <public-footer></public-footer>
    <fixed-icon></fixed-icon>
  </div>
</template>

<script>
import Title from '../components/previousselection/title'
import previousList from '../components/previousselection/previousList'

import { mapState } from "vuex";
export default {
  components:{
    'Title':Title,
    'previous-list':previousList
  },
  data() {
    return {
      list: [
        {
          url: "index/channel_settings?channel=4.0wqjx&region_id=0&_=1589872414540",
          name: "nameList"
        },
        {
          url: "menu/533/1935/17",
          name: "sortItemList"
        },
        {
          url:
            "index/channel_settings?channel=4.0wqjx&region_id=0&_=1589851094602",
          name: "sayList"
        },
        {
          url: "poster/533/1936/21?region_id=0",
          name: "threeFocus"
        },
        {
          url: "goods_v4_0/1956/49",
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