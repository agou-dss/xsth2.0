<template>
  <div id="app">
    <transition :name="SkipSwitchName">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
import bus from './components/bus';
export default {
  data() {
    return{
      SkipSwitchName: ""
    }
  },
  watch: {
    $route(to, from) {
        this.SkipSwitchName = "Skleft";
    }
  },
};
</script>
<style lang="less">
#app {
  overflow-x: hidden; 
  font-size: 0;
  .Skleft-enter-active,
  .Sklef-leave-active {
    transition: all 600ms;
  }
  .Skleft-enter {
      opacity: 0;
  }
  .Skleft-leave-to {
      opacity: 1;
  }
}

</style>