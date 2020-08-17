<template>
  <div class="best_good">
    <div class="best_good_title">
      <img :src="img_str" alt />
    </div>
    <div class="best_good_sellname">
      <div
        v-for="(item,index) in bestGoodList"
        :key="index"
        :class="(activeIndex==index)?'active':''"
        class="switch-times"
        @click="changeIndex(index)"
      >
        <span class="mstimes-main">{{item.date_title}}</span>
        <span class="mstimes-sub">{{item.date_sub_title}}</span>
      </div>
    </div>
    <div class="best_good_img">
      <div
        class="best_good_img_bigbox"
        ref="bigbox"
        @click="TouchMove"
        :style="{left: endX + 'px'}"
      >
        <div class="best_good_img_box" v-for="(items,index) in bestGoodList" :key="index">
            <img class="best_good_img_times" :src="items.goods_img" alt />
              <div class="best_good_link_box">
                <a class="best_good_link" v-for="(topbox,key,index) in items" v-if="['0','1','2'].includes(key)" @click="$router.push('/productdetail/'+topbox.link_goods_id)"></a>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bestGoodList: [],
      img_str: "",
      activeIndex: 0,
      startX: 0,
      endX: 0,
      num: 0
    };
  },

  created() {
    this.$http.get("countdown_grids/1916/35").then(res => {
      this.bestGoodList = res.data;
      if(this.bestGoodList[0]){
      this.img_str = this.bestGoodList[0]["0"].module_name_img;
      }
    });
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index;
      this.endX =
        (-this.activeIndex * this.$refs.bigbox.offsetWidth) /
        this.bestGoodList.length;
    },
    TouchMove() {
      this.$refs.bigbox && this.$refs.bigbox.addEventListener(
        "touchmove",
        this.handleTouchMove,
        false
      );
      this.$refs.bigbox && this.$refs.bigbox.addEventListener(
        "touchstart",
        this.handleTouchStart,
        false
      );
      this.$refs.bigbox && this.$refs.bigbox.addEventListener(
        "touchend",
        this.handleTouchtouchend,
        false
      );
    },
    handleTouchStart(event) {
      this.startX = event.touches[0].pageX;
      console.log(this.activeIndex)
    },
    handleTouchMove(event) {
      if (this.activeIndex == 0 && event.touches[0].clientX - this.startX > 0) {
        this.endX = 0;
      } else if (
        this.activeIndex == this.bestGoodList.length - 1 &&
        event.touches[0].clientX - this.startX < 0
      ) {
        this.endX = this.activeIndex * event.target.clientWidth;
      } else {
        this.endX = this.num + event.touches[0].clientX - this.startX;
      }

      console.log( event.touches[0].clientX - this.startX)
            console.log(this.activeIndex)
    },
    handleTouchtouchend(event) {
      if (this.endX < 0) {
        this.endX =
          -Math.round(Math.abs(this.endX) / event.target.clientWidth) *
          event.target.clientWidth;
        this.num = this.endX;
        if (Math.round(Math.abs(this.endX) / event.target.clientWidth) == 1) {
          this.activeIndex++;
        }
      }
      if (this.endX > 0) {
        this.endX =
          Math.round(this.endX / event.target.clientWidth) *
          event.target.clientWidth;
        this.num = this.endX;
        if (Math.round(Math.abs(this.endX) / event.target.clientWidth) == 1) {
          this.activeIndex--;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.best_good {
  .best_good_title {
    img {
      width: 100%;
      display: block;
    }
  }
  .best_good_sellname {
    width: 92%;
    padding-left: 4%;
    padding-right: 4%;
    font-size: 0;
    .switch-times {
      font-size: 0;
      display: inline-block;
      width: 50%;
      height: 0.68rem;
      text-align: center;
      color: #333;
      background-color: #f5f5f5;
      border-top-left-radius: 0.12rem;
      border-top-right-radius: 0.12rem;
      .mstimes-main {
        font-size: 0.32rem;
        font-weight: bold;
        margin-right: 0.15rem;
        line-height: 0.68rem;
      }
      .mstimes-sub {
        font-size: 0.16rem;
        color: #a4a4a4;
      }
    }
    .active {
      color: #fff !important;
      background-color: #d2b8a4 !important;
      .mstimes-sub {
        font-size: 0.16rem;
        color: #fff !important;
      }
    }
  }
  .best_good_img {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    .best_good_img_bigbox {
      width: 200%;
      font-size: 0;
      position: relative;
      transition: left 0.3s ease;
    }
    .best_good_img_box {
      width: 50%;
      display: inline-block;
      .best_good_img_times {
        width: 100%;
      }
      .best_good_link_box{
        position: absolute;
        top: 0;
        width: 50%;
        height: 100%;
        display: flex;
        .best_good_link{
          width: 33.3%;
        }
      }
    }
  }
}
</style>