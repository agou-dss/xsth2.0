<template>
  <div class="shop_car">
    <head-list></head-list>
    <div class="header">
      <span class="header_title">{{sayList.notice}}</span>
    </div>
    <div class="main">
      <ul class="main_box" v-if="iscar">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          class="all"
        >我的购物车</el-checkbox>
        <el-checkbox-group v-model="checkedGoods" @change="handlecheckedGoodsChange">
          <el-checkbox v-for="(item,index) in carlist" :label="item" :key="index">
            <li class="main_minbox">
              <div class="img_box">
                <img width="100px" height="100px" :src="item.src" alt />
              </div>
              <div class="price_box">
                <h4>{{item.goods_name}}</h4>
                <p>￥{{item.promoteprice}}</p>
                <del>{{item.shopprice}}</del>
                <div>
                  <el-input-number v-model="item.num" @change="handleChange" type="number" :min="1"></el-input-number>
                </div>
              </div>
            </li>
          </el-checkbox>
        </el-checkbox-group>
      </ul>
      <div class="empty" v-if="!iscar" >
        购物车是空的
        快去选购商品吧
      </div>
    </div>
    <div class="bottom">
      <div class="moeny_box">
        <p class="total_money">
          总金额：
          <span>￥{{totalmoney}}</span>
        </p>
        <p class="shot_money">为你节省：￥{{shotmoney}}</p>
      </div>
      <div class="pay_money">
        <button :class="istrue?'actives':''">抢先结账</button>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../bus";
export default {
  data() {
    return {
      flag: "",
      carlist: [],
      checkAll: false,
      checkedGoods: [],
      isIndeterminate: false,
      totalmoney: 0,
      shotmoney: 0,
      istrue: "",
      iscar:false
    };
  },
  watch: {
    totalmoney(newval) {
      if (newval !== 0) {
        this.istrue = true;
      } else {
        this.istrue = "";
      }
    }
  },
  created() {
    if (localStorage.getItem("carts")) {
      this.iscar = true
      this.carlist = JSON.parse(localStorage.getItem("carts"));
      this.checkedGoods = this.carlist.filter(item => {
        return item.checked == true;
      });
      if (this.checkedGoods.length == this.carlist.length) {
        return (this.checkAll = true);
      }
    }else{
      this.iscar =false;
    }
  },
  mounted() {

    this.getmoney();
    bus.$on("del", () => {
      const idSet = this.checkedGoods.reduce((acc, v) => {
        acc[v.id] = true;
        return acc;
      }, {});
      let result = this.carlist.filter(v => !idSet[v.id]);
      this.carlist = result;
      localStorage.setItem("carts", JSON.stringify(this.carlist));
      this.$myMsg.notify({
        content: "删除商品成功",
        type: "success"
      });
      this.totalmoney = 0;
      this.shotmoney = 0;
      if(this.carlist.length == 0){
        localStorage.removeItem('carts')
        this.iscar = false
      }else{
        this.iscar =true;
        this.checkedGoods =[]
      }
    });
  },
  props: {
    sayList: Object
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedGoods = val ? this.carlist : [];
      this.isIndeterminate = false;
      this.getmoney();
    },

    handlecheckedGoodsChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.carlist.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.carlist.length;

      this.carlist = this.carlist.filter(item => {
        if (this.checkedGoods.length == 0) {
          item.checked = "";
        } else {
          for (let i = 0; i < this.checkedGoods.length; i++) {
            if (item.id == this.checkedGoods[i].id) {
              item.checked = true;
              break;
            } else if (i == this.checkedGoods.length - 1) {
              item.checked = "";
            }
          }
        }
        return item;
      });
      localStorage.setItem("carts", JSON.stringify(this.carlist));

      this.getmoney();
    },
    getmoney() {
      this.totalmoney = this.checkedGoods.reduce((prev, next) => {
        return prev + next.num * next.promoteprice;
      }, 0);
      this.shotmoney = this.checkedGoods.reduce((prev, next) => {
        return prev + next.num * (next.shopprice - next.promoteprice);
      }, 0);
    },

    handleChange(value) {
      this.getmoney();
    }
  }
};
</script>

<style lang="less" scoped>
.shop_car {
  padding-bottom: 1.2rem;
  .header {
    border-bottom: 0.02rem solid #e0e0e0;
    background: #fff;
    font-size: 0.32rem;
    .header_title {
      display: block;
      height: 0.64rem;
      line-height: 0.64rem;
      color: #e34848;
    }
    .header_title::before {
      content: "";
      float: left;
      width: 0.04rem;
      height: 0.4rem;
      margin: 0.12rem 0.16rem 0 0.16rem;
      background-color: #e34848;
      -webkit-border-radius: 0.02rem;
      border-radius: 0.02rem;
    }
  }
  .main {
    .main_box {
      /deep/.el-checkbox {
        display: block;
        margin: 0;
        padding: 0.1rem 0.16rem;
        background-color: #fff;
        border-bottom: 0.02rem solid #e5e5e5;
        box-sizing: border-box;
        /deep/.el-checkbox__label {
          .main_minbox {
            display: flex;
            justify-content: space-between;
            .img_box {
              width: 2rem !important;
              height: 2rem;
              margin-right: 0.2rem;
              margin-top: 0.16rem;
              box-sizing: border-box;
            }
            .price_box {
              & > h4 {
                font-size: 0.28rem;
                color: #2d2d2d;
                line-height: 0.36rem;
                overflow: hidden;
                font-weight: normal;
                margin: 0;
                white-space: normal;
              }
              & > p {
                font-weight: bold;
                font-size: 0.32rem;
                color: #e34848;
              }
              & > del {
                font-size: 0.24rem;
                color: #999;
                margin-top: 0.12rem;
              }
            }
          }
        }
        /deep/.el-checkbox__input {
          vertical-align: 0.8rem;
        }
        /deep/.is-checked,
        .is-indeterminate {
          /deep/.el-checkbox__inner {
            background-color: #ee6262;
            border-color: #ee6262 !important;
            outline: none;
          }
        }
        /deep/.is-focus {
          /deep/.el-checkbox__inner {
            outline: none;
            border-color: #dcdfe6;
          }
        }
      }
      .all {
        /deep/.el-checkbox__input {
          vertical-align: middle !important;
        }
      }
    }
    .empty{
      font-size: .32rem;
    }
  }
  .bottom {
    position: fixed !important;
    bottom: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid #e0e0e0;
    height: 1.2rem;
    padding: 0 0.2rem;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    z-index: 99999;
    .moeny_box {
      margin-top: 0.15rem;
      color: #333;
      line-height: 0.55rem;
      width: 60%;
      & > p {
        font-size: 0.24rem;
        color: #666;
        line-height: 0.44rem;
        & > span {
          color: #e34848;
          font-size: 0.32rem;
          font-weight: bold;
        }
      }
    }
    .pay_money {
      margin-top: 0.15rem;
      & > button {
        font-size: 0.36rem;
        width: 2rem;
        height: 0.88rem;
        line-height: 0.88rem;
        color: #fff;
        display: inline-block;
        border-radius: 0.08rem;
        text-align: center;
        background: #bbb;
      }
      & > .actives {
        background: #e34848;
      }
    }
  }
}
</style>