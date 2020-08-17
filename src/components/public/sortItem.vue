<template>
  <div ref="sortitem" class="sortitem" :class="isTrue?'active':''">
    <div class="sortitem_content">
      <ul class="sortitem_content_ul">
        <li v-for="(item,index) in sortItemList" :key="index" @click="Gorouter(index)">
          <div>
            <img :src="item.img" alt />
          </div>
          <p>{{item.menu_name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTrue: ""
    };
  },
  props: {
    sortItemList: Array
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(){
      // 判断滚动条滚动距离设置固定定位
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let clientHeight = document.body.clientHeight;
      let scrollHeight = document.body.scrollHeight;
      if (this.$refs.sortitem) {
        if (this.$refs.sortitem.offsetTop < scrollTop) {
          this.isTrue = true;
        } else {
          this.isTrue = false;
        }
      }
      // 判断是否滑倒底部
      if (
        scrollHeight > clientHeight &&
        scrollTop + clientHeight === scrollHeight &&
        this.$route.path.indexOf("home") !== -1
      ) {
        window.removeEventListener("scroll", this.handleScroll);
        this.$router.push("/morethings");
      }
    },
    Gorouter(id) {
      if (id === 0) {
        this.$router.push("/home");
      } else if (id === 1) {
        this.$router.push("/morethings");
      } else if (id === 2) {
        this.$router.push("/previousselection");
      }else{
        this.$router.push("/privileges");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.sortitem {
  background-color: #fff;
  .sortitem_content {
    padding-top: 0.24rem;
    padding-bottom: 0.2rem;
    .sortitem_content .active {
      position: fixed;
      top: 1rem;
    }
    .sortitem_content_ul {
      display: flex;
      position: relative;
      li {
        width: 25%;
        div {
          text-align: center;
          margin-bottom: 10px;
          img {
            width: 0.86rem;
          }
        }
        p {
          font-size: 0.24rem;
          text-align: center;
        }
      }
    }
  }
}
.active {
  position: fixed;
  width: 100%;
  background-color: #fff;
  top: 1rem;
  z-index: 999;
}
</style>