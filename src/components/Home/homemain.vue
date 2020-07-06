<template>
  <div class="home_main">
    <div class="home_main_banner"></div>
    <div class="home_main_pricethings">
      <div class="counts_share">
        <div class="counts">
          <p>{{shopThings.vaccine_name}}</p>
          <span>剩余{{shopThings.stocks}}个</span>
        </div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MTU3MWFhYi0wMzE4LWMxNGItOTc4Yy1mOGE5ZWUxZGNkY2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzIzMThGODU2Q0UyMTFFQUJDNzRCMjE1M0NCMTc5M0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzIzMThGODQ2Q0UyMTFFQUJDNzRCMjE1M0NCMTc5M0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjJjZDUzYzgtZGM4MC05NDQyLTljMTQtMTc2ZGFiMmI2OTBkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZWYyOTljM2QtNmE3YS0xMWVhLTgwYzEtYTZhOTM1MTZjNDAwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++aPaQgAAAuJJREFUeNqclVtLalEUhc8u07KLSVEaJvWShg+FXcASJBDLHnoLxEd/WG/+gSBCDYJAilIxQqwUT16o1CCK7tfzeZaIweGwt/tBXGvtOdaYY445t/T9/f1L+fP19XVxcXFzc9PR0WE0Gg0Gg9iXWoB7e3vb2dm5vb1ta2uTJInf8fHx2dnZ2v8WqB0cHMALHgMDA93d3TD9/ffhSDHcx8cHaYI1OTnp8XhWV1eHhoZAzGazrcA9PT2BSPzo6CjL9vZ2hGPJvmI4gM7OzgiG3cnJyfv7+/Pz8+npKcv+/n5lpSDHaDT68PDQqIBKpaoXVJLcbjclVjUHAF0oFB4fHxGYXAgQ+3d3d3t7exwR1tPT43A4rq6uMpkMZNnBK/Pz82D9YJdKpXZ3d+/v78Xler1+YWHBarXGYrGjoyNeQ6bp6Wkiied9bi2VShAcGRnp6ur64btkMrm5uSmARCLiF5ovLy/8h+zS0hLO+L8gtWRfX1+3trYQeHh4eG1tDdrX19fb29uVSgUKZAcQNOXoW1Pn+PgYRCj4fD4hAbVfX19nhzvm5uZkYtXhsLigptPpGgeQYgcpaCb5TqrBIS1hlA/Q5iqLnYYb5MLZbDbCqCluaBzs7+8DB6jZbJYPV6/sxsYGPkKssbExinh5eVksFkV9UWBlZWViYkIBHDMHxHw+3+wSDIVLYM2SatDwfX19suDEREyn04lEgjbq7e3FscyMz89PFGAi8UJnZ6fL5ZqZmeGmarWKvUlIo9Ew7JxOp1arlduz5XIZY6IAQDjJbrdHIhECG3lwvd/vpzfkjgBei8fjdCFTREDAa3FxkSXcWU5NTeF2uSYAgvFtsVhCodD5+TnKeL1elhyhLz3KvFE870hqeXlZzDsuEJtqtZolNOs9qxRxcHCQRoImA4q6HR4ecoHJZGrxS5bL5YLBYPPsoQiBQICbpNa+s3y3wuEwdqEFMQoKKB7u//zgNo94nj8CDABrzbREek7QnAAAAABJRU5ErkJggg=="
          alt
        />
      </div>
      <div class="counts_price">
        <span class="pr_name">HKD</span>
        <span
          class="pr_pr"
        >{{ (parseFloat(shopThings.pay_price) + parseFloat(shopThings.shop_price)).toFixed(2)}}</span>
        <img
          src="data:image/png;base64,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"
        />
      </div>
      <div class="counts_detail">
        <p class="counts_detail_one">
          HKD {{shopThings.shop_price}} 疫苗费余额于诊所支付
        </p>
        <p>
          HKD {{shopThings.pay_price}} 医生评估费现付
        </p>
      </div>
    </div>
    <div class="home_detail">
    <el-tabs type="border-card">
        <el-tab-pane label="详情">
            <div class="order_detail">
                <ul>
                    <li>加卫苗9合1（简称HPV9疫苗）是一种预防性疫苗，能预防由9种HPV病毒（人类乳头瘤病毒）感染引致的疾病如子宫颈癌，外阴癌，阴道癌，肛门癌，生殖器官湿疣（椰菜花），覆盖的9种HPV类型：HPV6,11,16,18,31,33,45,52及58</li>
                    <li>适合9岁或以上男或女性，必须经注册医生的评估后才可使用。</li>
                    <li>注射时间：3针（0,2,6个月）</li>
                    <li>于指定的宝康医疗中心使用</li>
                </ul>
                <div class="order_content">
                    <p>注意事项</p>
                        <ul style="padding: 0 0 0 15px;">
                            <li>
                                <p style="margin-bottom:.16rem">谁不适宜接种HPV疫苗？</p>
                                ① 8岁或以下；② 发烧；③ 怀孕或喂哺⺟乳期间；④ 对疫苗中任何成份有过敏反应；⑤ 免疫系统问题或正服⽤药物⽽影响免疫系统。
                            </li>
                            <li>
                                预约时间只能在购买当日3个工作天后的日子。
                            </li>
                            <li>
                                疫苗服务仅供在本APP内预约的客户本人使用，您接种时需提供与预约银行账户资讯对应的身份资讯证明（香港身份证/通行证/护照），以供核对。
                            </li>
                            <li>
                                本次费用HKD300仅包含医生评估费，如经医生评估后，您不适合接种HPV疫苗，本次费用将不接受退款。剩余金额HKD6,700可以信用卡（Visa / MasterCard / Union Pay）或现金在诊所现场支付。
                            </li>
                            <li>
                                您在APP中确认预约时间后，预约了的时间只可更改一次（如预约期遇上八号风球以上或黑色暴雨警告除外）。客户从第二次改期起需支付HKD50行政费。对于本次线上预约服务之后的服务咨询或改期，请联络：宝康医疗中心（中环诊所电话：（852）2523 1808 /观塘诊所电话：（852）2523 9383）。
                            </li>
                        </ul>
                </div>
                <div class="order_content">
                    <p>服务机构</p>
                    <div class="order_content_detail">
                        明康医疗为东亚银行有限公司之附属机构，其指定使用「宝康医疗中心」由家庭专科医生主理，提供家庭医生诊症，体检，疫苗注射及专科转介服务。我们致力推广家庭医生的概念，作为基层医疗的第一道门，提供全面治疗服务。
                    </div>
                </div>
                <div class="order_content">
                    <p>疫苗声明</p>
                    <div class="order_content_detail">
                            声明：宝康医疗采用的HPV疫苗均由默沙东药厂（MSD）提供的原厂正货并于香港注册之加卫苗9.宝康医疗严格遵守香港卫生署的疫苗储存及库存管理的指引，以确保疫苗质素，宝康医疗顾客无需担心所使用的疫苗品质问题。
                    </div>
                </div>
                <div class="order_content">
                    <p>注意事项</p>
                         <ul style="padding: 0 0 0 15px;">
                            <li>
                                <p style="margin-bottom:.16rem"> 预付:  客户支付固定费用HKD300医生评估费作为预付款应用程序</p>
                                    接收预约信息:  接收支付确认短信及APP预约信息通知
                            </li>
                            <li>
                               <p style="margin-bottom:.16rem">接种前准备</p> 
                               ① 请携带⾹港身份证/通⾏证/护照等身份证明⽂件；② 若为接种第⼆针及第三针，请谨记携带接种第⼀针时派发的针卡。
                            </li>
                            <li>
                                <p style="margin-bottom:.16rem">到达宝康医疗中心</p>
                                ① 出示⾹港身份证/通⾏证/护照及预约信息通知核对身份；② 医⽣评估是否适合接种疫苗；③ 现场⽀付疫苗费余额HKD6,700；④ 接种疫苗。
                             </li>
                             <li>
                                <p style="margin-bottom:.16rem">建议接种周期</p>
                                <img src="http://9test.ujinbi.com/zswl/Public/Home/images/timego.png" alt="" style="position:relative;right:.9rem;width:100vw;">
                                第一针与第二针需至少间隔2个月，第三针与第二针需至少间隔4个月。
                                <p style="color:#767676 ;font-size:.28rem;line-height:.4rem;margin-top:.32rem">注：实际接种时间以顾客和机构预约为主</p>
                             </li>
                        </ul>
                </div>
            </div>

        </el-tab-pane>
        <el-tab-pane label="预约">
            <div class="order_future">
                <p>联络方式</p>
                <div class="order_things">
                    <div class="bt-tip-time">宝康医疗中心<br>
                                              中环诊所
                    </div>
					<div class="bt-tip-time">电话: (852) 2523 1808</div>
					<div class="bt-tip-time">地址：中环德辅道中33号10楼(近地铁中环站B出口或香港站C出口)</div>
                </div>

                <div class="order_things">
					<div class="bt-tip-time">观塘诊所</div>
					<div class="bt-tip-time">电话: (852) 2523 9383</div>
					<div class="bt-tip-time">地址：九龙观塘道418号创纪之城五期东亚银行中心28楼2802室(港铁观塘站A2出口)</div>
                </div>
                <p>预约时间</p>
                <div class="order_things">
                    <div class="bt-tip-time">每个工作日最多可有2个名额(3:00pm或4:00pm)，顾客可从两个医疗中心中任选一个。</div>
                    <div class="bt-tip-time2">注：顾客当日取消或改期，请自行与诊所联络。</div>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="常见问题">
          <div class="order_problems">
              <p>HPV9疫苗-加卫苗9合1常见问题</p>
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="什么是HPV9疫苗-加卫苗9合1?" name="1">
                        <div class="desc">加卫苗9合1(简称HPV9疫苗)是一种预防性疫苗，能预防由9种HPV病毒(人类乳头瘤病毒)感染引致的疾病如子宫颈癌、外阴癌、阴道癌、肛门癌、生殖器官湿疣(椰菜花)，覆盖的9种HPV类型:HPV6、11、16、18、31、33、45、52及58。</div>
                    </el-collapse-item>
                    <el-collapse-item title="谁人适合接种 HPV 9 疫苗 (加卫苗9合1)?" name="2">
                        <div class="desc">现时本港注册 HPV 9 价疫苗适合9岁或以上人士，必须经注册医生的评估后才可使用。</div>
                    </el-collapse-item>
                    <el-collapse-item title="HPV疫苗的成效如何 ?" name="3">
                        <div class="desc">HPV疫苗的功效，对从未感染HPV 的人士最为显着。9 价HPV疫苗能预防由其覆盖的HPV类型所引致的子宫颈癌、阴道癌、生殖器官湿疣，高达九成。</div>
                    </el-collapse-item>
                    <el-collapse-item title="怀孕中，我可否接种 HPV 9 疫苗?" name="4">
                        <div class="desc">不建议怀孕妇女接种HPV疫苗。</div>
                    </el-collapse-item>
                    <el-collapse-item title="HPV 9疫苗需要接种多少剂?" name="5">
                        <div class="desc">9-14岁只需接种两剂，在第一剂后6至12个月内需注射第二剂。15岁或以上人士须接种三剂，在完成第一剂后，两个月后注射第二剂，再隔六个月注射第三剂。</div>
                    </el-collapse-item>
                    <el-collapse-item title=" HPV 疫苗有沒有副作用 ? " name="6">
                        <div class="desc">一般而言，HPV疫苗是安全的。常见的副作用与其他疫苗相似，包括注射部位出现红肿和疼痛、发烧、头痛和作呕。如对 HPV疫苗的任何成分曾经产生过敏反应，建议有关人士不应接种此疫苗。如有疑问，请向你的家庭医生查询意见。</div>
                    </el-collapse-item>
                    <el-collapse-item title="接种 HPV 疫苗后，我仍需要接受子宫颈癌筛查吗 ?" name="7">
                        <div class="desc">必定需要。接种HPV 疫苗后，妇女仍需要进行子宫颈癌筛查，因为HPV疫苗不能清除已经带有的 HPV 感染，亦不能预防HPV 疫苗没有包含的其他HPV 类型病毒。</div>
                    </el-collapse-item>
                    <el-collapse-item title="谁不适宜接种HPV疫苗 ?" name="8">
                        <div class="desc">8岁或以下<br>
                        发烧<br>
                        怀孕或喂哺母乳期间<br>
                        对疫苗中任何成份有过敏反应<br>
                        免疫系统问题或正服用药物而影响免疫系统<br></div>
                    </el-collapse-item>
                    <el-collapse-item title="我如何获取收据？" name="9">
                        <div class="desc">客户现场支付费用收据可当场获得。客户如需获取医生评估费用及疫苗服务费用之收据，需于接受疫苗服务当日向宝康医疗中心的医务工作人员主动提出，相关收据将以邮寄的方式提供给客户。这可能会导致额外的邮寄费用。<br>
                        本资料已由宝康医疗的医生审阅，作参考用途。</div>
                    </el-collapse-item>
                </el-collapse>
                <p>付款常见问题</p>
                  <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="请问HKD300是全部费用吗？我可以退款吗？" name="11">
                        <div class="desc"> HKD300费用仅包注射前医生评估费，本费用不接受退款。</div>
                    </el-collapse-item>
                    <el-collapse-item title="请问总费用是多少？" name="12">
                        <div class="desc">在一般情况下，客户首先在APP中支付HKD300 医生评估费作预付金，该预付金不退不换。在经过医生诊断后如可以接种疫苗，接种者需再支付HKD6,700疫苗费余额。总费用为HKD7,000。<br>
                        注意: 顾客的某些行为可能导致额外收费，顾客有一次免费修改预约时间的权利，但如超过一次，诊所对每次改期行为会收取额外HKD50。例如客户两次改期后，成功接种疫苗，则所需支付的总费用为HKD7,050。其中在APP中支付订金仍为HKD 300, 在诊所需支付的金额则为HKD6,750。</div>
                    </el-collapse-item>
                    <el-collapse-item title="请问在诊所我需要出示什么资料？" name="13">
                        <div class="desc">1) 出示香港身份证、通行证或护照<br>
                        2) 出示一点通中的预约信息页 (此处提供示意图如下，图片仅供示例)</div>
                    </el-collapse-item>
                    <el-collapse-item title="请问在诊所时我可以怎样付款？" name="14">
                        <div class="desc"> 剩余金额可以信用卡（Visa / MasterCard / Union Pay）或现金在诊所现场支付。</div>
                    </el-collapse-item>
                    <el-collapse-item title="请问疫苗服务必须本人使用吗？" name="15">
                        <div class="desc"> H是的。疫苗服务仅供在本APP内预约的客户本人使用，当客户到达诊所登记时需提供与预约银行账户信息对应的身份信息证明 (香港身份证/通行证/护照)，以供核对。</div>
                    </el-collapse-item>
                    <el-collapse-item title="请问我如何咨询？" name="16">
                        <div class="desc">                        有关网上预约服务及支付预付款 HKD300 服务流程的问题，您可咨询招商永隆银行客户服务热线，（852）2309 5555/（86）4008 822388。<br>
                        本行不会提供任何与客户医疗方面的咨询及服务，更不会提供医疗建议。有关任何疫苗接种、预约及后续医疗服务方面的问题，请联络宝康医疗中心。<br>
                        宝康医疗中心<br>
                        中环诊所 电话: (852) 2523 1808<br>
                        观塘诊所 电话: (852) 2523 9383<br></div>
                    </el-collapse-item>
                </el-collapse>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="home_footer">
        <p>本产品由广州优盟电子商务有限公司合作运营</p>
        <p>客服热线：4009-916-803</p>
        <p>服务时间：9:00-18:00（周一至周日）</p>
        <p><a href="__PUBLIC__/static/special/yyzz/index.html">营业资质</a> &nbsp;| &nbsp;<a href="https://m2.cmbwinglungbank.com:8443/WebStaticResouces/MobileStatic/tnc/LFS/vaccine-sc.html">条款及细则</a>&nbsp;| &nbsp;<a href="https://m2.cmbwinglungbank.com:8443/WebStaticResouces/MobileStatic/tnc/LFS/vaccine-disclaimer-sc.html">免责声明</a></p>
    </div>
    <div class="footer_button">
      <button  :disabled="dis"  @click="goToBuy(shopThings.vaccine_id)">支付</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
        return {
            activeNames: '',
            // dis:Boolean
        }
    },
  computed:{
      dis () {
        if(this.shopThings.stocks != 0){
          return false
        }else{
          return true
        }
      }
    },
  props: {
    shopThings: Object
  },
  methods:{
    handleChange (val) {
      console.log(val)
    },
    goToBuy(id){
      // console.log(this.shopThings)
      if(this.shopThings.flag){
      // this.$http.get('api/booking_items/'+id).then(res =>{
      //   console.log(res)
      // })
      this.$router.push('/future/' + id)
      }else{
        this.$alert('您今天已下单三次，不能再进行次交易，请明天再试。如有疑问请致电(852)2309 5555/(86)4008 822388', {
            confirmButtonText: '确定',
          })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home_main {
  background-color: #fff;
  padding-bottom: 1.12rem;
  .home_main_banner {
    width: 100%;
    height: 2.5rem;
    background: #d5e3fc;
  }
  .home_main_pricethings {
    padding: 0.4rem 0.3rem;
    border-bottom: 1px solid #e4e4e4;
    .counts_share {
      display: flex;
      justify-content: space-between;

      & > img {
        width: 0.32rem;
        height: 0.32rem;
      }
      .counts {
        display: flex;
        & > p {
          font-size: 0.32rem;
          font-weight: bold;
        }
        & > span {
          font-size: 0.28rem;
          color: #767676;
          margin-left: 0.24rem;
          font-weight: normal;
          line-height: 0.42rem;
        }
      }
    }
    .counts_price {
      padding: 0.32rem 0;
      & > span {
        color: #0f71f1;
        margin-right: 0.08rem;
        font-weight: bold;
      }
      .pr_name {
        font-size: 0.32rem;
      }
      .pr_pr {
        font-size: 0.48rem;
      }
      & > img {
        width: 1.28rem;
      }
    }
    .counts_detail{
        &>p{
            color: #767676;
            font-size: .28rem;
        }
        .counts_detail_one{
                margin: .24rem 0;
        }
    }
  }
  .home_detail{
      padding: .4rem .3rem .32rem .3rem;
    /deep/.el-tabs {
            border: none;
            box-shadow: none;
      /deep/.el-tabs__header {
          border: none;
        /deep/.el-tabs__nav {
          width: 100%;
          border-bottom: 0.02rem solid #e0e0e0;
          box-sizing: border-box;
          background-color: #fff;
          
          /deep/.el-tabs__item {
            width: 33%;
            height: 0.64rem;
            line-height: 0.64rem;
            border: 0.01rem solid #565656;
            border-right: none;
            transform: translateX(1px) !important;
            font-size: 0.26rem;
            color: #565656;
            text-align: center;
            margin-top: 0;
          }
        /deep/.el-tabs__item:last-child{
            width: 34%;
        }
          /deep/.el-tabs__item:last-child {
            border-right: 0.02rem solid #565656;
            border-bottom-right-radius: .08rem;
            border-top-right-radius: .08rem;
          }
          /deep/.el-tabs__item:first-child{
            border-bottom-left-radius: .08rem;
            border-top-left-radius: .08rem;
          }
          /deep/.is-active {
            background-color: #565656;
            color: white;
          }
        }
      }
      /deep/.el-tabs__content {
        padding: 0;
        /deep/.order_detail {
          padding-top: .4rem;
          font-size: 0.26rem;
          color: #555;
          &>ul{
              padding: 0 0 0 20px;
              &>li{
                list-style: outside;color:#565656;font-size:.32rem;line-height:.48rem;margin-bottom:.32rem
              }
          }
          .order_content{
              padding: 0 .3rem;
              &>p{
                font-size: .32rem;
                height: .32rem;
                font-weight: bold;
                padding: .4rem 0;
              }
            &>ul{
              padding: 0 0 0 20px;
              &>li{
                list-style: outside;color:#565656;font-size:.32rem;line-height:.48rem;margin-bottom:.32rem
              }
          }
              .order_content_detail{
                    color: #565656;
                    font-size: .32rem;
                    line-height: .48rem;
                    margin-bottom: .32rem;
              }
          }
        }
        /deep/.order_future{
            &>p{
                    height: .32rem;
                    font-weight: bold;
                    padding: .4rem 0;
                    font-size: .32rem;
            }
            .order_things{
                    margin-bottom: .4rem;
                    .bt-tip-time{
                            color: #565656;
                            font-size: .32rem;
                            line-height: .48rem;
                            margin-bottom: .06rem;
                    }
                    .bt-tip-time2{
                                font-size: .28rem;
                                line-height: .4rem;
                                padding: .4rem 0;
                                color: #767676;
                                margin: 0;
                    }
            }
        }
         /deep/.order_problems{
           &>p{
                    height: .32rem;
                    font-weight: bold;
                    padding: .4rem 0;
                    font-size: .32rem;
           }
             /deep/.desc{
                margin: .1rem 0 0;
                font-size: .28rem;
                line-height: .4rem;
                color: #565656;
             }
             /deep/.el-collapse{
               border-top: none;
             }
         }
      }

    }
  }
  .home_footer{
    padding: .6rem 0;
    background-color: #f4f4f4;
    &>p{
          text-align: center;
          color: #767676;
          font-size: .24rem;
          margin-bottom: .24rem;
          &>a{
                color: #0f71f1;
                text-decoration: none;
          }
    }
  }
  .footer_button{
    position: fixed;
    z-index: 98;
    bottom: 0;
    padding: .16rem 4%;
    width: 100%;
    height: 1.12rem;
    border-top: .02rem solid #e0e0e0;
    background: rgba(255, 255, 255, 1);
    &>button{
      display: block;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to right, #54b8f4 , #5c78eb);
      outline: none;
      border-radius: 4px;
      color: #fff;
    }
        &>button:disabled{
          opacity: .3;
        }
  }

}
</style>