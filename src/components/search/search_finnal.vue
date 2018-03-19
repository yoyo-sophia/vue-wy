<template>
  <div>
    搜索结果{{songName}}
  </div>
</template>

<script>
  const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
  export default {
    props:{
      songName:String
    },
    data() {
      return {
        // search_songName:songName,
        search_end_list:'',
        searchVal:''
      }
    },
    created:function(){
      console.log(this.songName)
      if(this.songName){
        let key_val = this.songName;
        this.axios({
          method:'get',
          url:'/qq?format=json&w='+key_val,
          data:{
            g_tk: 5381,
            uin: 0,
            inCharset: 'utf-8',
            outCharset: 'utf-8',
            notice: 0,
            platform: 'h5',
            needNewCode: 1,
            zhidaqu: 1,
            catZhida: 1,
            t: 0,
            flag: 1,
            ie: 'utf-8',
            sem: 1,
            aggr: 0,
            perpage: 20,
            n: 20,
            p: 1,
            remoteplace: 'txt.mqq.all',
          }
        }).then(res=>{
          this.search_end_list = res.data.data.song.list;
          console.log(res);
        })
      }else {
        return
      }
    },
    methods: {
      search_val:function (val) {
        console.log(this.songName);
        if(this.songName){
          let key_val = this.songName;
          this.axios({
            method:'get',
            url:'/qq?format=json&w='+key_val,
            data:{
              g_tk: 5381,
              uin: 0,
              inCharset: 'utf-8',
              outCharset: 'utf-8',
              notice: 0,
              platform: 'h5',
              needNewCode: 1,
              zhidaqu: 1,
              catZhida: 1,
              t: 0,
              flag: 1,
              ie: 'utf-8',
              sem: 1,
              aggr: 0,
              perpage: 20,
              n: 20,
              p: 1,
              remoteplace: 'txt.mqq.all',
            }
          }).then(res=>{
            this.search_end_list = res.data.data.song.list;
            console.log(res);
          })
        }else {
          return
        }
      }
    },
    // mounted: function () {
    //   // this.$options.methods.search_val();
    //   console.log(this.songName);
    //   if(this.songName){
    //     let key_val = this.songName;
    //     this.axios({
    //       method:'get',
    //       url:'/qq?format=json&w='+key_val,
    //       data:{
    //         g_tk: 5381,
    //         uin: 0,
    //         inCharset: 'utf-8',
    //         outCharset: 'utf-8',
    //         notice: 0,
    //         platform: 'h5',
    //         needNewCode: 1,
    //         zhidaqu: 1,
    //         catZhida: 1,
    //         t: 0,
    //         flag: 1,
    //         ie: 'utf-8',
    //         sem: 1,
    //         aggr: 0,
    //         perpage: 20,
    //         n: 20,
    //         p: 1,
    //         remoteplace: 'txt.mqq.all',
    //       }
    //     }).then(res=>{
    //       this.search_end_list = res.data.data.song.list;
    //       console.log(res);
    //     })
    //   }else {
    //     return
    //   }
    //
    // }
  }
</script>

<style lang="less" scoped>

</style>
