<template>
  <div class="privileges_list">
      <ul>
          <li v-for="(item,index) in goodList" @click="Gorouter(item.ad_link)">
              <img width="100%" :src="item.ad_code" alt="">
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        goodList:Array
    },
    methods:{
        Gorouter(paths){
            if(paths.indexOf("#commodity") !== -1){
                const sId =paths.slice(paths.lastIndexOf('/')+1) 
                this.$router.push('/productdetail/'+sId)
            }
        }
    }
}
</script>

<style lang="less" scoped>
.privileges_list{
            background-color: #fff;
            padding-top: .2rem;
    ul{
        margin: 0 .3rem;

        li{
            border: 1px solid #e5e5e5;
            margin-bottom: .2rem;
        }
    }
}
</style>