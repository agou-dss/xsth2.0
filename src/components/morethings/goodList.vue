<template>
  <div class="good_list">
    <div class="good_list_header" v-if="goodsList[0]">
      <img width="100%" v-if="goodsList[0][0]" :src="goodsList[0][0].module_name_img" alt />
    </div>
    <div class="good_list_main">
      <div
        class="good_list_main_topimg"
        v-if="goodsList[0]"
        @click="Gorouter(goodsList[0][0].ad_link)"
      >
        <img width="100%" v-if="goodsList[0][0]" :src="goodsList[0][0].ad_img_url" alt />
      </div>
      <div class="good_list_main_goods">
        <ul class="good_list_main_goods_bigbox">
          <li
            class="good_list_main_goods_box"
            v-for="(item , index) in goodsList[0]"
            :key="index"
            v-if="item"
            @click="Gorouter(item.goods_id)"
          >
            <div class="good_list_main_goods_img">
              <img width="100%" :src="item.goods_img" alt />
            </div>
            <div class="good_list_main_goods_bottom">
              <div class="good_list_main_goods_title">{{item.goods_name}}</div>
              <div class="good_list_main_goods_desc">{{item.goods_desc}}</div>
              <div class="good_list_main_goods_pricebox">
                <div class="good_list_main_goods_price">
                  <span>￥{{item.promote_price}}</span>
                  <img src="https://9.ujinbi.com/html5/Public/Home/images/quanyitag.png?v=2" alt />
                </div>
                <div class="good_list_main_goods_priceicon">
                  <del>￥{{item.shop_price}}</del>
                  <span>
                    <img src="https://9.ujinbi.com/html5/Public/Home/images/box.png" alt />
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      flag: "undefined"
    };
  },
  props: {
    goodsList: Array
  },
  methods: {
    Gorouter(paths) {
      const sId = paths.slice(paths.lastIndexOf("/") + 1);
      this.$router.push("/productdetail/" + sId);
    }
  }
};
</script>

<style lang="less" scoped>
.good_list {
  .good_list_main {
    padding: 0 0.24rem;
    background-color: #f5f5f5;
    .good_list_main_topimg {
      margin: 0.3rem 0;
    }
    .good_list_main_goods {
      padding: 0 1%;
      .good_list_main_goods_bigbox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .good_list_main_goods_box:nth-child(n + 3) {
          margin-top: 0.16rem;
        }
        .good_list_main_goods_box {
          flex: 0 0 48%;
          border: 1px solid #fafafa;
          border-radius: 0.15rem;
          background-color: #fafafa;
          box-shadow: 0 0 5px 0 #f4f4f4;
          .good_list_main_goods_img {
            padding: 0.48rem 0.48rem 0;
            box-sizing: border-box;
            background-color: #fff;
          }
          .good_list_main_goods_bottom {
            padding: 0 0.12rem;
            .good_list_main_goods_title {
              padding-top: 0.16rem;
              font-size: 0.26rem;
              line-height: 0.36rem;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
              color: #333;
            }
            .good_list_main_goods_desc {
              overflow: hidden;
              text-overflow: ellipsis;
              width: 100%;
              font-size: 0.24rem;
              line-height: 0.34rem;
              color: #626161;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .good_list_main_goods_pricebox {
              margin-top: 0.2rem;
              margin-bottom: 0.34rem;
              .good_list_main_goods_price {
                span {
                  font-size: 0.3rem;
                  font-weight: bold;
                  color: #ab4040;
                  margin-right: 0.12rem;
                }
                img {
                  width: 0.88rem;
                }
              }
              .good_list_main_goods_priceicon {
                display: flex;
                justify-content: space-between;
                del {
                  font-size: 0.2rem;
                  color: #838383;
                  vertical-align: bottom;
                  line-height: 0.6rem;
                }
                span {
                  display: inline-block;
                  width: 0.6rem;
                  height: 0.6rem;
                  border-radius: 100%;
                  background-color: #f2f2f2;
                  img {
                    width: 60%;
                    margin: 20% 0 0 20%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>