<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted (){
        
    }
  }
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
<style>
   
</style>
