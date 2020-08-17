<template>
  <div class="home_say">
    <svg
      t="1589253212640"
      class="home_say_icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6114"
      width="20"
      height="20"
    >
      <path
        d="M551.3 764.1c-5.5 0-11-1.3-16.1-4l-0.8-0.4-0.7-0.5-171.4-129.7c-3.4-1.6-7.1-2.5-10.8-2.5h-69.7c-30.3 0-55-24.7-55-55V452c0-30.3 24.7-55 55-55h69.7c3.7 0 7.4-0.8 10.8-2.5l172-130.3 0.8-0.4c10.9-5.7 23.8-5.2 34.3 1.2 10.5 6.4 16.8 17.6 16.8 29.9v434.2c0 12.3-6.3 23.5-16.8 29.9-5.6 3.4-11.9 5.1-18.1 5.1z m-1.8-30.3c1.9 0.8 3.5 0.1 4.4-0.4s2.4-1.8 2.4-4.3V294.9c0-2.5-1.5-3.7-2.4-4.3-0.8-0.5-2.4-1.2-4.4-0.4L377.6 420.4l-0.8 0.4c-7.8 4-16.5 6.2-25.3 6.2h-69.7c-13.8 0-25 11.2-25 25v120c0 13.8 11.2 25 25 25h69.7c8.8 0 17.5 2.1 25.3 6.2l0.8 0.4 0.7 0.5 171.2 129.7zM642.9 618.4c-5.7 0-11.2-3.3-13.7-8.9-3.4-7.6 0-16.4 7.6-19.8 30.6-13.7 50.5-44.1 50.5-77.7 0-34.3-20.4-65-52-78.3-7.6-3.2-11.2-12-8-19.7 3.2-7.6 12-11.2 19.7-8 42.7 18 70.3 59.6 70.3 106 0 45.4-26.8 86.6-68.2 105.1-2.1 0.9-4.1 1.3-6.2 1.3z"
        fill="#d81e06"
        p-id="6115"
      />
      <path
        d="M711.9 679.3c-4.2 0-8.5-1.8-11.4-5.3-5.4-6.3-4.6-15.8 1.7-21.1 41.4-35.2 65.1-86.6 65.1-140.9 0-54.2-23.6-105.4-64.8-140.7-6.3-5.4-7-14.9-1.7-21.1 5.4-6.3 14.9-7 21.1-1.7 47.9 40.9 75.3 100.5 75.3 163.5 0 63.1-27.6 122.8-75.7 163.7-2.7 2.4-6.2 3.6-9.6 3.6z"
        fill="#d81e06"
        p-id="6116"
      />
    </svg>
    <span class="home_say_things" v-html="sayList.notice">{{sayList.notice}}</span>
  </div>
</template>

<script>
export default {
  props: {
    sayList: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home_say {
  background-color: #fff;
  padding: 0 0.2rem;
  position: relative;
  height: 0.58rem;
  border-bottom: 0.02rem solid #e3e3e3;
  .home_say_icon {
    position: absolute;
    margin-top: 0.08rem;
    top: 0;
  }
  .home_say_things {
    padding-left: 0.4rem;
    font-size: 0.24rem;
    white-space: nowrap;
    overflow: hidden;
    color: #666;
    vertical-align: top;
    line-height: 0.58rem;
  }
}
</style>
