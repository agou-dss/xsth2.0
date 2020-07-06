<template>
  <div class="home">
    <head-list></head-list>
    <home-main :shopThings="shopThings"></home-main>
  </div>
</template>

<script>
// @ is an alias to /src

import homeMain from '../components/Home/homemain'
export default {
  data () {
    return {
      shopThings:{}
    }
  },
  components: {
    'home-main': homeMain
  },
  created () {
    this.$http.get('/api/vaccine/10571').then(res => {
      this.shopThings = res.data
    })
  }
};
</script>
