<template>
  <div class="privileges">
    <head-list :nameList="Data.nameList" :cityList="Data.cityList"></head-list>
    <privileges-top :goodList="Data.goodList"></privileges-top>
    <privileges-title :activeTitle="Data.nameList"></privileges-title>
    <privileges-list :goodList="Data.goodListTwo"></privileges-list>
    <public-footer></public-footer>
    <fixed-icon></fixed-icon>
  </div>
</template>

<script>
import privilegesTop from '../components/privileges/privilegesTop'
import privilegesTitle from '../components/privileges/privilegesTitle'
import privilegesList from '../components/privileges/privilegesList'
import { mapState } from "vuex";
export default {
  components:{
    'privileges-top':privilegesTop,
    'privileges-title':privilegesTitle,
    'privileges-list':privilegesList
  },
  data() {
    return {
      list: [
        {
          url:
            "index/channel_settings?channel=xztq&region_id=0&_=1589873842705",
          name: "nameList"
        },
        {
          url:"index/getAreaList?ju=&h=",
          name: "cityList"
        },
        {
          url: "poster/42/124/16",
          name: "goodList"
        },
        {
          url: "poster/42/125/21?region_id=0",
          name: "goodListTwo"
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

<style>

</style>