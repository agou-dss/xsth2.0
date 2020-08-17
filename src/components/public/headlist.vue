<template>
  <div class="app_header_box">
    <div class="app_header">
      <svg
        t="1589187629911"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5045"
        data-spm-anchor-id="a313x.7781069.0.i0"
        width="30"
        height="30"
        @click="Goback"
      >
        <path
          d="M331.008 505.376l294.144-294.144a31.968 31.968 0 0 1 45.248 0l22.624 22.624a31.968 31.968 0 0 1 0 45.248L444.128 528l248.896 248.896a31.968 31.968 0 0 1 0 45.248l-22.624 22.624a31.968 31.968 0 0 1-45.248 0l-294.144-294.144a31.968 31.968 0 0 1 0-45.248z"
          p-id="5046"
          fill="#d81e06"
        />
      </svg>
      <span v-if="nameList && !flag">{{nameList.name}}</span>
      <span v-if="flag">购物车</span>
      <svg
        t="1589253590060"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7314"
        width="30"
        height="30"
        v-if="!flag"
      >
        <path
          d="M858.551 669.761c-62.703 0-117.256 34.887-145.316 86.306l-261.03-67.903a229.83 229.83 0 0 0 0.659-17.4c0-50.966-16.843-97.996-45.26-135.836l245.924-264.061c18.286 8.97 38.847 14.014 60.588 14.014 76.086 0 137.758-61.678 137.758-137.764 0-76.08-61.672-137.758-137.758-137.758-76.083 0-137.761 61.678-137.761 137.758 0 25.235 6.79 48.881 18.635 69.222L349.067 480.396c-35.341-22.814-77.439-36.061-122.633-36.061C101.381 444.335 0.006 545.711 0.006 670.763c0 125.053 101.375 226.429 226.428 226.429 91.19 0 169.776-53.913 205.658-131.597l261.043 67.906c-0.006 0.566-0.021 1.131-0.021 1.698 0 91.37 74.069 165.442 165.438 165.442 91.372 0 165.442-74.072 165.442-165.442-0.001-91.368-74.071-165.438-165.443-165.438z"
          p-id="7315"
          fill="#515151"
        />
      </svg>

      <svg
        t="1590480959369"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3404"
        width="30"
        height="30"
        v-if="flag"
        @click="delGoods"
      >
        <path
          d="M588.543304 721.573109c-14.486946 0-26.196639-11.709693-26.196639-26.196639l0-288.163025c0-14.486946 11.709693-26.196639 26.196639-26.196639 14.486946 0 26.196639 11.709693 26.196639 26.196639l0 288.163025C614.739942 709.863417 603.030249 721.573109 588.543304 721.573109L588.543304 721.573109zM431.363472 721.573109c-14.486946 0-26.196639-11.709693-26.196639-26.196639l0-288.163025c0-14.486946 11.709693-26.196639 26.196639-26.196639s26.196639 11.709693 26.196639 26.196639l0 288.163025C457.56011 709.863417 445.850417 721.573109 431.363472 721.573109L431.363472 721.573109zM748.179071 276.230252l-59.35176 0 0-52.393277c0-43.328831-34.972513-78.589916-77.987189-78.589916L409.66938 145.247058c-43.328831 0-78.589916 35.261085-78.589916 78.589916l0 52.393277-59.35176 0c-14.486946 0-26.196639 11.709693-26.196639 26.196639s11.709693 26.196639 26.196639 26.196639l476.451366 0c14.486946 0 26.196639-11.709693 26.196639-26.196639S762.666016 276.230252 748.179071 276.230252L748.179071 276.230252zM383.472741 223.836975c0-14.434757 11.761881-26.196639 26.196639-26.196639l201.170742 0c14.355963 0 25.593911 11.499915 25.593911 26.196639l0 52.393277-252.961292 0L383.472741 223.836975 383.472741 223.836975zM693.434236 878.752942 326.629105 878.752942c-43.328831 0-78.589916-35.261085-78.589916-78.589916L248.039189 406.820496c0-14.46034 11.736299-26.196639 26.196639-26.196639 14.46034 0 26.196639 11.736299 26.196639 26.196639l0 393.34253c0 14.46034 11.762905 26.196639 26.196639 26.196639l366.80513 0c14.461363 0 26.196639-11.736299 26.196639-26.196639L719.630874 407.894967c0-14.461363 11.710716-26.196639 26.196639-26.196639 14.486946 0 26.196639 11.735275 26.196639 26.196639l0 392.268058C772.024152 843.491857 736.76409 878.752942 693.434236 878.752942L693.434236 878.752942z"
          p-id="3405"
          fill="#bfbfbf"
        />
      </svg>
    </div>
    <div v-if="istrue">
      <div class="app_header_cities" @click="dialogVisible = true">
        <svg
          t="1589955648128"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3521"
          data-spm-anchor-id="a313x.7781069.0.i3"
          width="26"
          height="26"
        >
          <path
            d="M512.921487 583.065546c-100.537787 0-182.331675-81.771375-182.331675-182.282556 0-100.538811 81.793888-182.332698 182.331675-182.332698 100.538811 0 182.333722 81.793888 182.333722 182.332698C695.255209 501.294171 613.460298 583.065546 512.921487 583.065546zM512.921487 247.457952c-84.543511 0-153.325038 68.781526-153.325038 153.325038 0 84.516906 68.780503 153.276942 153.325038 153.276942 84.544535 0 153.327084-68.760037 153.327084-153.276942C666.248571 316.239478 597.466022 247.457952 512.921487 247.457952z"
            p-id="3522"
            data-spm-anchor-id="a313x.7781069.0.i4"
            class="selected"
            fill="#17abe3"
          />
          <path
            d="M512.921487 978.432175l-10.714016-11.743462c-127.962393-140.252301-212.499765-232.908584-262.909875-314.799686-25.700335-41.748846-42.639123-80.623225-53.31016-122.341373-10.263761-40.128953-15.044648-84.457554-15.044648-139.503241 0-91.327008 35.577287-177.199795 100.177584-241.799068 64.600297-64.600297 150.473083-100.177584 241.800092-100.177584 91.325985 0 177.198771 35.577287 241.799068 100.177584 64.60132 64.600297 100.177584 150.473083 100.177584 241.799068 0 55.045687-4.779863 99.373265-15.044648 139.503241-10.670014 41.717124-27.608801 80.592526-53.31016 122.341373-50.409087 81.889055-134.945435 174.545338-262.908852 314.799686L512.921487 978.432175zM512.921487 77.076446c-172.572404 0-312.970014 140.39761-312.970014 312.968991 0 199.455681 66.651003 275.331789 312.970014 545.348526 246.320035-270.019807 312.971038-345.896938 312.971038-545.348526C825.892525 217.473033 685.493891 77.076446 512.921487 77.076446z"
            p-id="3523"
          />
        </svg>
        <span>{{place_name}}</span>
      </div>
    </div>
    <el-dialog v-if="istrue" title="请选择你所在的区域" :visible.sync="dialogVisible" width="90%">
      <p class="hot_area_name">热门区域</p>
      <ul class="hot_area">
        <li v-for="(item ,index) in cityList.hotArea" :key="index" class="hot_area_box">
          <span class="hot_area_title" @click="changeHotName(item.region_id)">{{item.region_name}}</span>
        </li>
      </ul>
      <p class="hot_area_name">全部城市</p>
      <ul class="all_city">
        <li v-for="(items, key ,index) in cityList.city" :key="index" class="hot_area_box">
          <p class="title_area_name">{{key}}</p>

          <div class="all_area_name_box">
            <p
              v-for="(item,indexmin) in items"
              :key="indexmin"
              class="all_area_name"
              @click="changeAllName(item.region_id,key)"
            >{{item.region_name}}</p>
          </div>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
import bus from '../bus'
export default {
  data() {
    return {
      istrue: "",
      place: "hotArea",
      place_id: 0,
      place_name: "",
      allnamekey: "",
      dialogVisible: false,
      flag: ""
    };
  },
  props: {
    nameList: Object,
    cityList: {
      type: Object
    }
  },
  created() {
    this.istrue = this.$route.path.indexOf("privileges") !== -1;
    this.flag = this.$route.path.indexOf("shopcar") !== -1;
  },
  updated() {
    if (this.istrue) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.placeload();
        }, 10);
      });
    }
  },
  methods: {
    Goback(){
      this.$router.back();
    },
    placeload() {
      if (this.place == "hotArea" && this.cityList[this.place]) {
        this.cityList[this.place].filter(item => {
          if (item.region_id == this.place_id)
            this.place_name = item.region_name;
        });
      }
      if (this.place == "city" && this.cityList[this.place]) {
        this.cityList[this.place][this.allnamekey].filter(item => {
          if (item.region_id == this.place_id)
            this.place_name = item.region_name;
        });
      }
    },
    changeHotName(id) {
      this.place = "hotArea";
      this.place_id = id;
      this.dialogVisible = false;
    },
    changeAllName(id, namekey) {
      this.place = "city";
      this.allnamekey = namekey;
      this.place_id = id;
      this.dialogVisible = false;
    },
    delGoods(){
        bus.$emit('del');
    }
  }
};
</script>

<style lang="less" scoped>
.app_header_box {
  height: 1rem;
  .app_header {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
    padding: 0.1rem;
    box-sizing: border-box;
    span {
      flex-grow: 1;
      line-height: 40px;
      text-align: center;
      font-size: 20px;
    }
    svg {
      padding-top: 5px;
    }
  }
  .app_header_cities {
    position: fixed;
    display: flex;
    height: 0.32rem;
    top: 0.32rem;
    left: 0.7rem;
    z-index: 1000;
    svg {
      margin-top: -0.08rem;
    }
    span {
      display: inline-block;
      height: 0.32rem;
      width: 100%;
      font-size: 0.32rem;
      color: #333;
    }
  }
  .el-dialog__body {
    padding: 0;
    .hot_area_name {
      padding: 0.3rem 0;
      background-color: #ffffff;
      color: #333333;
      font-size: 0.32rem;
    }
    .hot_area {
      overflow: hidden;
      padding: 0.2rem;
      background: #f4f4f4;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .hot_area_box {
        width: 33.3%;
        text-align: center;
        .hot_area_title {
          display: inline-block;
          width: 1.5rem;
          height: 0.6rem;
          text-align: center;
          line-height: 0.6rem;
          margin: 0.1rem auto;
          border-radius: 0.2rem;
          font-size: 0.3rem;
          color: #999999;
          background-color: #ffffff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .all_city {
      .hot_area_box {
        .title_area_name {
          padding: 0.2rem;
          background-color: #f4f4f4;
          color: #666666;
        }
        .all_area_name_box {
          .all_area_name {
            padding: 0.2rem;
            border-bottom: 0.01rem solid #f4f4f4;
            color: #999999;
            font-size: 0.28rem;
          }
        }
      }
    }
  }
}
</style>