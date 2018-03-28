<template>
  <div>
    <initial @addListenToChild="conveyVal"  v-if="searchInit"></initial>
    <search-finnal v-if="searchEnd"></search-finnal>
    <!--<search-finnal :songName="searchVal" v-if="searchEnd"></search-finnal>-->
  </div>
</template>
<script>
  import initial from './initial'
  import searchFinnal from './search_finnal'
  export default {
    data(){
      return{
        searchInit:true,
        // searchEnd:false,
        searchEnd:true,
        searchVal:''
      }
    },
    components:{
      initial,
      searchFinnal
    },
    methods:{
      conveyVal:function(val){
        // this.searchVal = val;
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
