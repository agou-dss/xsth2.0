<template>
  <div class="wangzhe_good">
    <ul class="wangzhe_good_box">
      <li
        class="wangzhe_good_minbox"
        v-for="(item,index) in goodList"
        :key="index"
        @click="Gorouter(item.goods_id)"
      >
        <div class="wangzhe_good_minboxs" :class="active?'active':''">
          <div class="img_box">
            <img width="100%" :src="item.goods_thumb" @load="imgload(index)" alt />
          </div>
          <div class="price">
            <h4 class="title">{{item.goods_name}}</h4>
            <p class="price_box">
              <span class="promote_price">
                ￥
                <strong>{{item.promote_price}}</strong>
              </span>
              <del class="shop_price">￥{{item.shop_price}}</del>
            </p>
          </div>
          <div class="people">
            <svg
              t="1590052403646"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4110"
              width="16"
              height="16"
            >
              <path
                d="M325.522773 527.264427c-34.351787-34.28352-56.326827-86.807893-56.326826-145.68448 0-103.29088 67.642027-187.02336 151.08096-187.02336s151.077547 83.735893 151.077546 187.02336c0 58.876587-21.97504 111.397547-56.33024 145.68448 91.204267 46.230187 155.450027 157.19424 155.450027 286.743893 0 12.4928-0.600747 24.818347-1.764693 36.92544h-54.381227a302.318933 302.318933 0 0 0 2.2528-36.92544c0-134.212267-87.88992-243.01568-196.307627-243.01568s-196.307627 108.803413-196.307626 243.01568c0 12.550827 0.768 24.8832 2.249386 36.92544H171.83744a387.3792 387.3792 0 0 1-1.757867-36.92544c0-129.553067 64.24576-240.513707 155.4432-286.743893z m94.754134-25.36448c53.674667 0 97.191253-53.865813 97.191253-120.313174 0-66.454187-43.513173-120.32-97.191253-120.32-53.681493 0-97.194667 53.865813-97.194667 120.32 0 66.443947 43.513173 120.313173 97.194667 120.313174z m175.60576-326.806187c83.387733 0 150.981973 83.749547 150.981973 187.06432 0 58.886827-21.961387 111.418027-56.28928 145.708373 91.139413 46.237013 155.344213 157.228373 155.344213 286.795094 0 12.496213-0.59392 24.82176-1.757866 36.932266h-54.34368c1.49504-12.219733 2.2528-24.569173 2.245973-36.932266 0-134.242987-87.831893-243.063467-196.184747-243.063467h0.641707c-15.530667 0-28.115627-15.465813-28.115627-34.54976s12.588373-34.556587 28.115627-34.556587h-0.641707c53.643947 0 97.129813-53.876053 97.129814-120.337066s-43.485867-120.337067-97.129814-120.337067c-3.751253 0-8.137387 0.55296-13.14816 1.662293-13.06624 2.891093-25.572693-7.778987-27.927893-23.83872a36.95616 36.95616 0 0 1-0.256-2.215253c-1.686187-20.169387 10.00448-38.324907 26.368-40.94976 5.75488-0.9216 10.745173-1.3824 14.967467-1.3824z m0 0"
                fill="#313131"
                p-id="4111"
              />
            </svg>
            {{item.buy_num}}人已抢购
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ""
    };
  },
  props: {
    goodList: Array
  },
  methods: {
    imgload(index) {
      if (index % 2 !== 0) {
        this.active = "active";
      } else {
        this.active = "";
      }
    },
    Gorouter(paths) {
      const sId = paths.slice(paths.lastIndexOf("/") + 1);
      this.$router.push("/productdetail/" + sId);
    }
  }
};
</script>

<style lang="less" scoped>
@diff: calc(~"(100% - .15rem)/2");
.wangzhe_good {
  background: #f0f0f0;
  padding-top: 0.18rem;
  .wangzhe_good_box {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.15rem 0 0.15rem;
    justify-content: space-between;
    .wangzhe_good_minbox {
      box-sizing: border-box;
      width: @diff;

      .wangzhe_good_minboxs {
        position: relative;
        padding: 0.6rem 0.1rem 0.2rem;
        background: #fff;
        border-radius: 0.1rem;
        margin-bottom: 0.15rem;
        .img_box {
          padding: 0 0.2rem;
        }
        .price {
          margin-top: 0.36rem;
          .title {
            height: 0.76rem;
            font-size: 0.24rem;
            color: #2d2d2d;
            line-height: 0.38rem;
            font-weight: normal;
            overflow: hidden;
          }
          .price_box {
            height: 0.32rem;
            display: flex;
            justify-content: space-between;
            line-height: 0.28rem;
            margin-top: 0.12rem;
            font-size: 0.2rem;
            color: #999;
            .promote_price {
              color: red;
            }
          }
        }
      }
      .people {
        position: absolute;
        right: 0;
        top: 0;
        height: 0.4rem;
        padding: 0 0.08rem;
        line-height: 0.4rem;
        font-size: 0.24rem;
        color: #564a4a;
        background: #fff;
        opacity: 0.62;
        border: 0.02rem solid #eee;
        border-radius: 0 0 0 0.06rem;
        .icon {
          vertical-align: -0.06rem;
        }
      }
    }
  }
}
</style>