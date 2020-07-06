<template>
   <div>
      <head-list></head-list>
      <future-main></future-main>
   </div>
</template>

<script>
import futureMain from '../components/Future/futuremain'
export default {
    components: {
        'future-main':futureMain
    },
    created () {
        this.$http.get('/api/vaccine/10571').then(res => {
            this.shopThings = res.data
        })
    }
}
</script>

<style>

</style>