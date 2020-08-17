<template>
  <div class="good_interests">
    <div v-if="goodInterestsList.module_setting" class="good_interests_img">
      <img width="100%" :src="goodInterestsList.module_setting.module_title_image_url" alt />
      <img width="100%" :src="goodInterestsList.poster_list[0].poster_image_url" alt />
    </div>
    <div class="good_interests_goods">
      <ul class="good_interests_goods_bigbox" v-if="goodInterestsGoodList.current">
        <li
          class="good_interests_goods_box"
          v-for="(item,index) in goodInterestsGoodList.current"
          :key="index"
          @click="Gorouter(item.goods_id)"
        >
          <div class="good_interests_goods_list_left">
            <img width="100%" :src="item.goods_img" alt />
          </div>
          <div class="good_interests_goods_list_right">
            <h3>{{item.sales}}</h3>
            <p>{{item.goods_desc}}</p>
            <div class="good_sales">
              <span v-if="item.op_tag">{{item.op_tag}}</span>
            </div>
            <div class="goods_money">
              <div class="goods_money_left">
                <span>￥{{item.promote_price}}</span>
                <del>{{item.shop_price}}</del>
                <span
                  class="conun_tips"
                >{{((item.promote_price/item.shop_price).toString().substring(0,4)*10).toFixed(1)}}折</span>
              </div>
              <div class="goods_money_right">
                <svg
                  t="1589449461422"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3016"
                >
                  <path
                    d="M810.604222 1024h-597.30828A127.994631 127.994631 0 0 1 85.329754 896.005369V590.126643A127.994631 127.994631 0 0 1 0 469.356598v-85.329755A127.994631 127.994631 0 0 1 127.994631 256.032212h116.901764A141.220743 141.220743 0 0 1 213.324386 181.39712a158.286694 158.286694 0 0 1 38.398389-125.861387A176.205942 176.205942 0 0 1 383.983894 0.071393a170.659508 170.659508 0 0 1 127.994631 62.29072 170.659508 170.659508 0 0 1 127.994632-62.29072 176.205942 176.205942 0 0 1 131.806027 55.46434 158.286694 158.286694 0 0 1 38.398389 127.994631 141.220743 141.220743 0 0 1-31.14536 72.530291h116.901763a127.994631 127.994631 0 0 1 127.994631 127.994632v85.329754a127.994631 127.994631 0 0 1-85.329754 120.741602V896.005369a127.994631 127.994631 0 0 1-127.994631 127.994631z m-127.994631-85.329754h127.994631a42.664877 42.664877 0 0 0 42.664877-42.664877V597.351229h-170.659508v341.319017z m-255.989263 0h170.659508V597.351229h-170.659508v341.319017zM170.659508 597.351229v298.65414A42.664877 42.664877 0 0 0 213.324386 938.670246H341.319017V597.351229H170.659508z m511.978526-85.329754h213.324385a42.664877 42.664877 0 0 0 42.664877-42.664877v-85.329755a42.664877 42.664877 0 0 0-42.664877-42.636434h-213.324385v170.659509z m-255.989263 0h170.659509v-170.631066h-170.659509v170.659509zM127.994631 341.418853a42.664877 42.664877 0 0 0-42.664877 42.664877v85.329754A42.664877 42.664877 0 0 0 127.994631 512.021475H341.319017v-170.659509H127.994631z m431.341908-87.889647c5.119785 2.218574 10.694663 3.100314 16.212653 2.559892 58.87753 0 142.927338-29.012116 148.900421-85.329754a72.95694 72.95694 0 0 0-17.06595-59.730828 88.742944 88.742944 0 0 0-152.740261 59.730828c0.227546 2.844325 0.227546 5.68865 0 8.532976v53.331096c-0.17066 7.96411 1.422163 15.814448 4.693137 23.039034v-2.133244zM383.983894 85.401147a92.582783 92.582783 0 0 0-68.263803 27.305521 72.95694 72.95694 0 0 0-17.065951 58.024233c5.973083 54.611043 90.022891 85.329754 148.900421 85.329754a30.718712 30.718712 0 0 0 16.212653-2.559892c3.555406-7.167699 5.461104-15.04648 5.546434-23.039034V177.130633a57.170935 57.170935 0 0 1 0-6.399732 93.436081 93.436081 0 0 0-85.329754-85.329754z"
                    fill="#d81e06"
                    p-id="3017"
                  />
                </svg>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="special_goods">
      <ul class="special_goods_box">
        <li v-for="(item , index) in specialGoodList" :key="index">
          <img width="100%" :src="item.default_pic" alt="">
        </li>
      </ul>
    </div>
    <div class="good_interests_goods">
      <ul class="good_interests_goods_bigbox" v-if="goodInterestsBottomGoodList.current">
        <li
          class="good_interests_goods_box"
          v-for="(item,index) in goodInterestsBottomGoodList.current"
          :key="index"
          @click="Gorouter(item.goods_id)"
        >
          <div class="good_interests_goods_list_left">
            <img width="100%" :src="item.goods_img" alt />
          </div>
          <div class="good_interests_goods_list_right">
            <h3>{{item.sales}}</h3>
            <p>{{item.goods_desc}}</p>
            <div class="good_sales">
              <span v-if="item.op_tag">{{item.op_tag}}</span>
            </div>
            <div class="goods_money">
              <div class="goods_money_left">
                <span>￥{{item.promote_price}}</span>
                <del>{{item.shop_price}}</del>
                <span
                  class="conun_tips"
                >{{((item.promote_price/item.shop_price).toString().substring(0,4)*10).toFixed(1)}}折</span>
              </div>
              <div class="goods_money_right">
                <svg
                  t="1589449461422"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3016"
                >
                  <path
                    d="M810.604222 1024h-597.30828A127.994631 127.994631 0 0 1 85.329754 896.005369V590.126643A127.994631 127.994631 0 0 1 0 469.356598v-85.329755A127.994631 127.994631 0 0 1 127.994631 256.032212h116.901764A141.220743 141.220743 0 0 1 213.324386 181.39712a158.286694 158.286694 0 0 1 38.398389-125.861387A176.205942 176.205942 0 0 1 383.983894 0.071393a170.659508 170.659508 0 0 1 127.994631 62.29072 170.659508 170.659508 0 0 1 127.994632-62.29072 176.205942 176.205942 0 0 1 131.806027 55.46434 158.286694 158.286694 0 0 1 38.398389 127.994631 141.220743 141.220743 0 0 1-31.14536 72.530291h116.901763a127.994631 127.994631 0 0 1 127.994631 127.994632v85.329754a127.994631 127.994631 0 0 1-85.329754 120.741602V896.005369a127.994631 127.994631 0 0 1-127.994631 127.994631z m-127.994631-85.329754h127.994631a42.664877 42.664877 0 0 0 42.664877-42.664877V597.351229h-170.659508v341.319017z m-255.989263 0h170.659508V597.351229h-170.659508v341.319017zM170.659508 597.351229v298.65414A42.664877 42.664877 0 0 0 213.324386 938.670246H341.319017V597.351229H170.659508z m511.978526-85.329754h213.324385a42.664877 42.664877 0 0 0 42.664877-42.664877v-85.329755a42.664877 42.664877 0 0 0-42.664877-42.636434h-213.324385v170.659509z m-255.989263 0h170.659509v-170.631066h-170.659509v170.659509zM127.994631 341.418853a42.664877 42.664877 0 0 0-42.664877 42.664877v85.329754A42.664877 42.664877 0 0 0 127.994631 512.021475H341.319017v-170.659509H127.994631z m431.341908-87.889647c5.119785 2.218574 10.694663 3.100314 16.212653 2.559892 58.87753 0 142.927338-29.012116 148.900421-85.329754a72.95694 72.95694 0 0 0-17.06595-59.730828 88.742944 88.742944 0 0 0-152.740261 59.730828c0.227546 2.844325 0.227546 5.68865 0 8.532976v53.331096c-0.17066 7.96411 1.422163 15.814448 4.693137 23.039034v-2.133244zM383.983894 85.401147a92.582783 92.582783 0 0 0-68.263803 27.305521 72.95694 72.95694 0 0 0-17.065951 58.024233c5.973083 54.611043 90.022891 85.329754 148.900421 85.329754a30.718712 30.718712 0 0 0 16.212653-2.559892c3.555406-7.167699 5.461104-15.04648 5.546434-23.039034V177.130633a57.170935 57.170935 0 0 1 0-6.399732 93.436081 93.436081 0 0 0-85.329754-85.329754z"
                    fill="#d81e06"
                    p-id="3017"
                  />
                </svg>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <img width="100%" src="https://9.ujinbi.com/html5/Public/Home/images/tootherpage2.gif" alt="">
    </div>

  </div>
</template>

<script>
export default {
  props: {
    goodInterestsList: Object,
    goodInterestsGoodList: Object,
    specialGoodList:Array,
    goodInterestsBottomGoodList:Object
  },
  methods:{
    Gorouter(id){
      this.$router.push('/productdetail/'+id)
    }
  }
};
</script>

<style lang="less" scoped>
.good_interests {
  background-color: #fff;
  .good_interests_goods {
    margin-top: 0.15rem;
    .good_interests_goods_bigbox {
      .good_interests_goods_box {
        display: flex;
        justify-content: space-between;
        padding: 0.24rem 4%;
        border-bottom: 1px solid #f3f1f1;
        .good_interests_goods_list_left {
          width: 25%;
        }
        .good_interests_goods_list_right {
          width: 66.7%;
          font-size: 1rem;
          h3 {
            color: #333;
            font-size: 0.26rem;
            line-height: 0.4rem;
            font-weight: 900;
            margin-top: 0.1rem;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          p {
            line-height: 0.4rem;
            font-size: 0.26rem;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .good_sales {
            height: 0.54rem;
            span {
              height: 0.24rem;
              margin-top: 0.1rem;
              border: 1px solid #f1dbb9;
              display: inline-block;
              font-size: 0.2rem;
              padding: 0.03rem 0.15rem;
              border-radius: 1rem;
              color: #f1dbb9;
              background: #000;
              line-height: .24rem;
            }
          }
          .goods_money {
            display: flex;
            justify-content: space-between;
            .goods_money_left {
              span {
                font-size: 0.3rem;
                color: #a10101;
                line-height: 0.3rem;
              }
              del {
                font-size: 0.24rem;
                color: #5d5d5d;
                padding: 0.06rem;
                font-weight: normal;
              }
              .conun_tips {
                color: #a10101;
                font-weight: normal;
                font-size: 0.24rem;
                border: 1px solid #a10101;
                padding: 0.01rem 0.1rem;
                border-radius: 1rem;
              }
            }
            .goods_money_right {
              width: 16%;
              height: 0.38rem;
              text-align: center;
              svg {
                width: 0.38rem;
              }
            }
          }
        }
      }
    }
  }
  .special_goods{
    padding: .2rem .15rem .2rem .15rem;
    .special_goods_box{
      display: flex;
      li{
        flex: 1;
      }
    }
  }

}
</style>