<template>
  <div class="product_main">
    <div class="message">
      <img width="100%" src="https://9.ujinbi.com/html5/Public/Home/images/nzsd/sp.jpg" alt />
    </div>
    <div class="desc_price">
      <div class="desc_price_box" :class="fromstr?'isTrue':''">
        <p class="price">
          <span class="promote_price">￥{{goodActiveList.promote_price}}</span>
          <del class="shop_price">￥{{goodActiveList.shop_price}}</del>
          <span class="only" v-if="fromstr">限购一件</span>
        </p>
        <p class="goods_name">{{goodActiveList.goods_name}}</p>
        <p class="nums">{{goodActiveList.buy_num}}人已购/剩余{{goodActiveList.goods_number}}件</p>
      </div>
      <p class="desc_title" v-if="goodActiveList.desc_title">{{goodActiveList.desc_title}}</p>
      <p class="wangzhe" v-if="fromstr">由于规格或产品限制，本商品独立快递发货</p>
    </div>
    <div class="preduct_bottom">
      <el-tabs type="border-card">
        <el-tab-pane label="图文详情">
          <div class="pictrue_title">暂无更多信息</div>
        </el-tab-pane>
        <el-tab-pane label="评价">
          <div class="feedback_null" v-if="sayList.count == 0">当前暂无评价哦，快来评价吧！！！</div>
          <div class="feedback_list">
            <ul class="feedback_list_box">
              <li class="feedback_list_minbox" v-for="(item,index) in sayList.list" :key="index">
                <div class="feedback_list_content">
                  <div class="name">
                    <span class="nick_name">{{item.nick_name}}</span>
                    <el-rate disabled v-model="item.rank-0"></el-rate>
                  </div>
                  <p class="msg_time">{{item.msg_time}}</p>
                  <p class="content" v-if="item.content">{{item.content}}</p>
                  <p class="content" v-if="!item.content">该用户未留下任何评论！！！</p>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="售后服务">
          <div class="after_service">
            <p>感谢您选择在【限时特惠】购物并体验，如果您在体验过程中遇到了问题，请及时与我们客服联系哦，我们会在第一时间帮您排忧解难。</p>
            <dl>
              <dt>【查询时效】</dt>
              <dd>自发件日起30天内，请您根据所购买的商品快递单号进行物流信息查询，逾期未反馈异常的，视为商品已经安全送达。</dd>
              <dt>【售后受理时间】</dt>
              <dd>您有任何售后需求，请您在收到商品后15天内联系客服，我们将全力跟进处理您的问题；超过15天，我们无法受理，敬请谅解。</dd>
              <dt>【退换货说明】</dt>
              <dd>（1）您签收快件时，请当面开箱验货，如存在包装破损、商品质量等问题，请当面拒收；签收后，若发现商品存在质量问题，请您在签收之日起15天内联系客服处理。</dd>
              <dd>（2）七天无理由退换：因个人喜好而要求退换的，请您在收到商品后7天内联系客服处理。并确保商品不影响二次销售（否则我方有权拒收，且不再受理七天无理由退换货），即内外包装完好无污损（食品类不得开封），吊牌标签完整，未经洗涤等。7天无理由退货寄回的邮费需要您自付哦。</dd>
              <dt>【支付收货】</dt>
              <dd>下单后请尽快完成付款哦，待付款订单24小时后系统将自动关闭交易；自订单完成发货起，15天后系统将自动确认收货。</dd>
              <dt>【跨境商品】</dt>
              <dd>（1）若您购买的是跨境购商品，购买时需填写身份证号码，并且一经购买不得退换，请您谅解！</dd>
              <dd>（2）包装：因跨境商品经常更换包装和附件，可能存在页面更新不及时的情况，敬请谅解！详情页里的商品参数，图片，功能及附件仅供参考，具体请您以收到的实物为准，部分国家或地区更注重商品包装的环保和便捷性，故您收到的商品包装可能较为简单，如产自欧美，日韩的化妆品，大部分无外盒，不塑封，开口处也无封口贴，大部分国际一线品牌，奢侈品的包装也很简单。</dd>
              <dd>（3）保质期：跨境商品包装上一般不会单独标识保质期期限，通常只在产品包装上标注生产日期或有效期，也存在只标注出厂批号的情况；另部分商品喷印的日期，在运输过程中因为摩擦碰撞很容易糊掉或碰掉，属于正装现象，请谅解并请您放心，所有的商品都在符合原产地规定的合格产品。</dd>
              <dt>【服务承诺】</dt>
              <dd>[限时特惠]向您保证，本平台上商品均为正品行货，符合国家标准，请您放心体验购买！</dd>
              <dt>【客服电话】</dt>
              <dd>限时特惠客服热线：4006-786-900</dd>
              <dd>售后服务时间：周一至周日9:00-18:00</dd>
            </dl>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="my_car">
        <div class="img_box" @click="Gorouter">
          <el-badge :value="value" class="item">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAuCAYAAABnNToWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDcyRjUwOEREMzk3MTFFNDkwMzVFRkM0MjA4NDM3NUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDcyRjUwOENEMzk3MTFFNDkwMzVFRkM0MjA4NDM3NUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEU4NEMyQzVEMzk1MTFFNDg3MkRBRjI2RDJFQzUwRkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEU4NEMyQzZEMzk1MTFFNDg3MkRBRjI2RDJFQzUwRkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6BJIL7AAAJxElEQVR42tyZ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"
              alt
            />
          </el-badge>
        </div>
        <div class="button_box" @click="open">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNWYyZmE2My1iMTY1LTM4NDUtYjU4Mi1kMzNiNjdkMzFmMWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REI1NzlBM0NFMTgzMTFFNEI3QzNFNEUyNjBFMEQzMEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REI1NzlBM0JFMTgzMTFFNEI3QzNFNEUyNjBFMEQzMEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODJlZTBjOTgtNGRjMC05NDRlLWJiZGUtZThkMDMwMDM1ZTM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI1ZjJmYTYzLWIxNjUtMzg0NS1iNTgyLWQzM2I2N2QzMWYxYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi2tBZQAAAMpSURBVHjazJlNaBNBGIY3aRq1rTaxUFFoEASxiFYJWKqlVnqxCmK9eNCDIh5sDwWx+IOKR0EP0kNB8CJ6kVAVtOLF+lMEEaNVqD/Uf7FSVBqNWEpL4vvJuzAsyW52t8nuB08mu9mZfZnZnfnmTSCbzWoOYw3YBBrBclAHKkE5SINxMAqGwT3wEEzZvosItEEtOAneZu3HT3AerLZzz0CBPVgNjoNOUMFzGfAc3AcvwScwwfMLwGJQD5rAejBP7xNwAxxlPdc9uA2MKT3xAfSAJTZ6ogrsAkNKO1PgBCgzq2vWqFQ8CzJs8DvYB8ptPhZGWsEzReggqLErMAwSSiP9YKFLYSohcAxMs/03YGmhAqXnrrJihsOpFYkWvjwSo3wJLQWeU8TtLaI4nQY+PhJJMMdMYIfyzB0ugTidRvCX9+3LJzACxnnRFYc3agddIOCg7n5l5DbmEtjLC0Rk1KFAfajiDusPsP4ICKoCZU6b5I9unrsU22h2WH8Z50eJnXIuyPm6C8wF78Elzbt4p9z/oHwEyW6e7AMzmrfRy3KdLJUiLg5iXEMva97HC2ZAEh0isI0HT5ki+SFus2zTe1DigeafGGIZF4ErePDKRwJH9DQvxLxN4rNFJcmWwxbXBFjOB1GzLA+kTH7/ouaD+rzTZDI/bQUz2dmNMxZzYlouCmo+jxA3ODUclnwxACLcEJnFR6b7W8AjF0MsHVelC/xGgTGLm/8pZA/GMs39idOoU5W+5vd6H43sSpa/RGCSBy0+EtjMMikCB3mwFizyicB2lndE4BPOgWVK0uBlrKJrIXEtaEgSOvnieBndLB//X918lrDG8iWsY+ACv5/mnOckpllOuhjeMNfihNH6iHq8adJYb7Nqqxgv2KGslT0l3Hba8mbUjfsePwoU6+N6iawPRwJ186hfGe6Ei71yUQQW034T1+AWuOhWoM72HAbmIZsGZmUOAzNlZV7asYAjtIAPGCzgYVrAslX8yhxPt4BrmSFtoAVcoaRkN8GR2bKAjSb6KYcm+gRN9IZimOi5NkeyoLcqf0PEmAXLWv4b/GCuKUb7Xad/Q/wTYABzJ1TeaaGIZAAAAABJRU5ErkJggg=="
            alt
          />
          <span>加入购物车</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carlist: [],
      info: {},
      flag: "",
      value:0,
    };
  },
  props: {
    goodActiveList: Object,
    fromstr: String,
    sayList: Object,
    bestGoodList: Array
  },
  created(){
    if(localStorage.getItem('carts')){
      this.value = JSON.parse(localStorage.getItem('carts')).length
    }
  },
  methods: {
    Gorouter(){
      this.$router.push('/shopcar')
    },
    open() {
      const paths = this.$route.path;
      const sID = paths.slice(paths.lastIndexOf("/") + 1);
      if (localStorage.getItem("carts")) {
        this.carlist = JSON.parse(localStorage.getItem("carts"));
        this.carlist = this.carlist.filter(item => {
          if (item.id === sID) {
            item.num++;
            this.flag = true;
          }
          return item;
        });
        if (!this.flag) {
          this.info = {
            id: sID,
            src: this.bestGoodList[0].ad_code,
            promoteprice: this.goodActiveList.promote_price,
            shopprice: this.goodActiveList.shop_price,
            goods_name: this.goodActiveList.goods_name,
            num:1
          };
          this.carlist.push(this.info);
          this.value++
        }
        localStorage.setItem("carts", JSON.stringify(this.carlist));
      } else {
        this.info = {
          id: sID,
          src: this.bestGoodList[0].ad_code,
          promoteprice: this.goodActiveList.promote_price,
          shopprice: this.goodActiveList.shop_price,
          goods_name: this.goodActiveList.goods_name,
          num:1,
          checked:'',
        };
        this.carlist.push(this.info);
        this.value++
        localStorage.setItem("carts", JSON.stringify(this.carlist));
      }
      this.$myMsg.notify({
        content: "添加购物车成功",
        type: "success"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.product_main {
  .message {
    margin-top: 0.2rem;
  }
  .desc_price {
    box-sizing: border-box;
    background-color: #fff;
    padding: 0 0.3rem;
    border-bottom: 0.02rem solid #e0e0e0;
    .desc_title {
      padding: 0.18rem 0.12rem;
      font-size: 0.26rem;
      line-height: 0.36rem;
      color: #ff0000;
    }
    .wangzhe {
      font-size: 0.28rem;
      color: #666;
      margin-bottom: 0.2rem;
      padding-left: 0.12rem;
    }
    .desc_price_box {
      padding: 0.2rem 0.12rem 0 0.12rem;
      border-bottom: 0.02rem solid #e0e0e0;
      p {
        font-size: 0.32rem;
        margin-bottom: 0.2rem;
        .promote_price {
          font-size: 0.32rem;
          color: #e34848;
          font-weight: bold;
          margin-right: 0.08rem;
        }
        .shop_price {
          font-size: 0.24rem;
          color: #999;
          line-height: 0.35rem;
          margin-top: 0.05rem;
        }
        .only {
          float: right;
          height: 0.34rem;
          padding: 0 0.12rem;
          line-height: 0.34rem;
          border: 0.02rem solid #e34848;
          font-size: 0.2rem;
          color: #e34848;
          -webkit-border-radius: 0.04rem;
          border-radius: 0.04rem;
        }
      }

      .goods_name {
        font-weight: bold;
        line-height: 0.48rem;
      }
      .nums {
        font-size: 0.28rem;
        line-height: 0.28rem;
        color: #666;
      }
    }
    .isTrue {
      border: none;
    }
  }
  .preduct_bottom {
    margin-top: 0.15rem;
    /deep/.el-tabs {
      /deep/.el-tabs__header {
        /deep/.el-tabs__nav {
          width: 100%;
          padding: 0.24rem 0.3rem;
          border-bottom: 0.02rem solid #e0e0e0;
          box-sizing: border-box;
          background-color: #fff;
          /deep/.el-tabs__item {
            width: 33.33%;
            height: 0.64rem;
            line-height: 0.64rem;
            border: 0.02rem solid #e34848;
            border-right: none;
            font-size: 0.26rem;
            color: #e34848;
            text-align: center;
            background: #fff;
            -webkit-box-flex: 1;
          }
          /deep/.el-tabs__item:last-child {
            border-right: 0.02rem solid #e34848;
          }
          /deep/.is-active {
            background-color: #e34848;
            color: white;
          }
        }
      }
      /deep/.el-tabs__content {
        padding: 0;
        /deep/.pictrue_title,
        .feedback_null {
          height: 2rem;
          font-size: 0.26rem;
          line-height: 2rem;
          text-align: center;
          color: #555;
        }
        .feedback_list {
          .feedback_list_box {
            .feedback_list_minbox {
              padding: 0 0.3rem 0.2rem 0.3rem;
              border-bottom: 0.02rem solid #e0e0e0;
              .feedback_list_content {
                font-size: 0.32rem;
                padding: 0.16rem 0.12rem;
                border-bottom: 0.02rem solid #e0e0e0;
                .name {
                  display: flex;
                  justify-content: space-between;
                  height: 0.24rem;
                  .nick_name {
                    font-size: 0.24rem;
                    color: #e34848;
                  }
                }
                .msg_time {
                  margin-top: 0.06rem;
                  font-size: 0.2rem;
                  font-style: normal;
                  color: #999;
                }
                .content {
                  font-size: 0.26rem;
                  line-height: 0.36rem;
                }
              }
            }
          }
        }
        .after_service {
          padding: 0 0.3rem;
          border-bottom: 0.02rem solid #e0e0e0;
          font-size: 0.26rem;
          color: #333;
          & > p {
            padding: 0.18rem 0.12rem;
            font-size: 0.28rem;
          }
          & > dl {
            padding: 0.18rem 0.12rem;
            border-top: 0.02rem solid #e0e0e0;
            & > dt {
              margin-bottom: 0.12rem;
              font-size: 0.28rem;
              line-height: 0.36rem;
              color: #e34848;
            }
            & > dd {
              margin-bottom: 0.22rem;
              font-size: 0.26rem;
              line-height: 0.32rem;
            }
          }
        }
      }
    }
    .my_car {
      box-sizing: border-box;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 1.1rem;
      padding: 0.1rem 0.24rem;
      border-top: 0.02rem solid #e0e0e0;
      background: rgba(255, 255, 255, 0.9);
      display: flex;
      .img_box {
        position: relative;
        display: block;
        width: 1.4rem;
        height: 0.88rem;
        padding-right: 0.3rem;
        margin-right: 0.28rem;
        /deep/.el-badge__content {
          right: -0.54rem;
          top: 0.2rem;
        }
        .item {
          & > img {
            width: 0.52rem;
            position: absolute;
            left: 0.36rem;
            top: 0.24rem;
          }
        }
      }
      .img_box::after {
        position: absolute;
        right: 0;
        top: 0.21rem;
        content: "";
        width: 0.02rem;
        background: #e0e0e0;
        height: 0.46rem;
      }
      .button_box {
        font-size: 0.32rem;
        flex-grow: 1;
        text-align: center;
        position: relative;
        line-height: 0.88rem;
        text-align: center;
        color: #fff;
        background: #e34848;
        & > img {
          width: 0.4rem;
          height: 0.4rem;
          margin-right: 0.16rem;
          vertical-align: -0.08rem;
        }
      }
    }
  }
}
</style>