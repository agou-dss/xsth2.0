<template>
  <div class="new_things" v-if="newThingsList.poster_list">
      <div class="new_things_title">
          <img class="new_things_title_img" :src="newThingsList.module_setting.module_title_image_url" alt="">
      </div>
      <div class="new_things_img"  v-for="(item,index) in newThingsList.poster_list" :key="index">
          <img  width="100%" :src="item.poster_image_url" alt="">
      </div>
      <div class="new_things_threefocus">
              <ul class="new_things_threefocus_img">
                  <li v-for="(item,index) in threeFocus" :key="index">
                      <img :src="item.default_pic" alt="">
                  </li>
              </ul>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        newThingsList:Object,
        threeFocus:Array
    }
}
</script>

<style scoped lang="less">
.new_things{
    .new_things_title{
        .new_things_title_img{
        width: 100%;
        }
    }
    .new_things_threefocus{
        padding: .2rem .15rem .2rem .15rem;
        .new_things_threefocus_img{
            display: flex;
            li{
                flex: 1;
                img{
                    width: 100%;
                }
            }
        }
    }
}
</style>