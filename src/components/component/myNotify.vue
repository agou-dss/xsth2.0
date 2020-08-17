<template>
  <transition name="slide-fade">
    <div class="my-notify" v-if="notifyFlag">
      <div class="notify success" v-if="type=='success'">
        <div class="tip">
        <i class="el-icon-success"></i>
          <span>成功</span>
        </div>
        <div class="content"> {{content}}</div>
      </div>
      <div class="notify error" v-else-if="type=='error'">
        <div class="tip">
            <i class="el-icon-error"></i>
          <span>错误</span>
        </div>
        <div class="content">{{content}}</div>
      </div>
      <div class="notify warning" v-else-if="type=='warning'">
        <div class="tip">
          <span>警告</span>
        </div>
        <div class="content">{{content}}</div>
      </div>
    </div>
  </transition>
</template>
 
<style lang="less" scoped>
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(.2rem);
  opacity: 0;
}
.notify-wrap{
  background-color: rgb(104, 194, 58);
}
.my-notify{
  margin: .2rem;
  width: 5rem;
  z-index: 99999;

.notify{
  position: relative;
  right: .2rem;
  padding-left: .2rem;
  width: 6.4rem;
  height: 1.4rem;
  border-radius: .08rem;
  background-color:#fff;
  border-radius: .1rem;
  box-shadow: -.1rem .1rem .24rem 0 rgba(204, 204, 204, .8);
  animation: show cubic-bezier(.18,.89,.32,1.28) .4s;
    z-index: 99999;
  .tip{
  height: .6rem;
  margin-bottom: .1rem;
  line-height: .6rem;
  &>span{
  line-height: .6rem;
  font-size: .34rem;
  font-weight: 600;
  }
  /deep/.el-icon-success{
    font-size: .4rem;
    color: rgb(104, 194, 58)
}
 /deep/.el-icon-error{
    font-size: .4rem;
    color: #D81E06;
}

}

 .content{
  width: 6.4rem;
  height: .6rem;
  font-size: .3rem;
}
}
.success{
  border-left: .2rem solid rgb(104, 194, 58);
}
.error{
  border-left: .2rem solid #D81E06;
}
.warning{
  border-left: .2rem solid #F4EA2A;
}

@keyframes show{
  0%{
    right: -5.4rem;
  }
  100%{
    right: .2rem;
  }
  0%{
    right: -5.4rem;
  }
}


}
</style>