<template>
  <div class="previous_list">
      <div v-if="goodList[0]">
          <img width="100%" :src="goodList[0].module_name_img" alt="">
      </div>
      <div class="previous_list_goods">
          <ul class="previous_list_goods_bigbox">
              <li class="previous_list_goods_box" v-for="(item,index) in goodList" v-if="item" @click="Gorouter(item.goods_id)">
                  <div class="left">
                      <h3>{{item.sell_point}}</h3>
                      <p>{{item.goods_desc}}</p>
                      <div class="sell_things">
                          <span class="good_sell_things" v-if="item.op_tag">{{item.op_tag}}</span>
                      </div>
                      <div class="good_sell">
                          <svg t="1589868704923" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2098" width="15" height="15">
                          <path d="M931.84 334.54c-39.936-10.444-133.837-10.24-271.258-13.926 6.554-30.003 7.988-57.036 7.988-104.96C668.672 100.966 585.114 0 511.18 0c-52.223 0-95.231 42.7-95.846 95.13-0.716 64.307-20.48 175.41-127.795 231.833-7.885 4.096-30.31 15.155-33.587 16.691l1.638 1.434a101.376 101.376 0 0 0-63.897-25.6H95.846A95.949 95.949 0 0 0 0 415.334V926.72c0 52.838 43.008 95.846 95.846 95.846h95.847a94.72 94.72 0 0 0 85.299-55.193l1.434 0.41 7.68 2.047c0.512 0 0.819 0.103 1.433 0.308 18.432 4.608 53.863 13.004 129.536 30.412 16.384 3.687 101.99 22.016 190.874 22.016h174.694c53.248 0 92.672-19.865 114.381-61.644 21.3-37.07 125.542-236.032 125.44-516.506 0-40.346-27.955-91.853-90.624-109.773zM223.642 926.72c0 17.613-14.336 31.949-31.95 31.949H95.847a31.949 31.949 0 0 1-31.948-31.949V415.334c0-17.612 14.336-31.948 31.948-31.948h95.847c17.715 0 31.949 14.336 31.949 31.948V926.72zM957.85 464.486c-13.312 321.024-117.146 466.33-117.146 466.33-9.728 17.408-25.19 27.853-58.163 27.853H607.949c-87.757 0-174.797-19.866-177.05-20.48-132.71-30.515-139.673-32.87-147.968-35.226l4.608-469.504c0-48.537 1.024-36.25 0-35.635C433.562 337.408 478.003 204.8 479.232 95.949A32.051 32.051 0 0 1 511.181 64c33.792 0 93.491 67.789 93.491 151.757 0 75.776-3.072 88.78-29.594 167.731 319.488 0 317.338 4.608 345.498 11.98 35.02 10.036 37.888 38.913 37.888 48.948 0 10.957-0.205 9.42-0.614 20.07z" fill="#d81e06" p-id="2099"></path>
                          </svg>
                          <span >
                              热销单品
                          </span>
                      </div>
                  </div>
                  <div class="right">
                      <img width="100%" :src="item.goods_thumb" alt="">
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goodList:Array
    },
      methods: {
    Gorouter(paths) {
      const sId = paths.slice(paths.lastIndexOf("/") + 1);
      this.$router.push("/productdetail/" + sId);
    }
  }
}
</script>

<style lang="less" scoped>
.previous_list_goods{
    background-color: #fff;
    padding: 0 .3rem;
    .previous_list_goods_bigbox{
        .previous_list_goods_box{

                width: 100%;
                padding: .24rem 0;
                display: flex;
                justify-content: space-between;
                .left{
                    width: 66.7%;
                    color: #333;
                    h3{
                            font-size: .26rem;
                            line-height: .4rem;
                            font-weight: 900;
                            margin-top: .1rem;
                            width: 100%;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                    }
                    p{
                            line-height: .4rem;
                            font-size: .26rem;
                            width: 100%;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                    }
                    .sell_things{
                            height: .54rem;
                            .good_sell_things{
                                height: .24rem;
                                margin-top: .1rem;
                                border: 1px solid #f1dbb9;
                                display: inline-block;
                                font-size: .2rem;
                                padding: .03rem .15rem;
                                border-radius: 1rem;
                                color: #f1dbb9;
                                background: #000;
                            }
                    }
                    .good_sell{
                            padding-top: .1rem;
                            padding-left: .4rem;
                            font-size: .24rem;
                            position: relative;
                            line-height: .3rem;
                            color: #909090;
                            .icon{
                                position: absolute;
                                left: 0;
                                bottom: .04rem;
                            }
                    }
                }
                .right{
                    width: 25%;
                }
        }
    }
}
</style>