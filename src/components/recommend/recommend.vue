<template>
  <div>
    <div class="list-wrap">
      <p class="recommend-title">推荐歌单</p>
        <ul class="list">
          <li :class="{ pd_r_2 : (index==0||index==1||index==3||index==4)}" v-for="(item,index) in songList">
            <span class="list-num">{{formart_listenNum(item.accessnum,'.',2) }}</span>
            <img :src="item.picUrl" alt="">
            <p class="list-desc">{{item.songListDesc}}</p>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
  const  API_PROXY  = 'https://bird.ioliu.cn/v1/?url=';
  export default {
    data (){
      return{
        songList:''
      }
    },
    methods:{
      formart_listenNum:function(str,add,index){
        //str原有字符串
        //add 新增的字符
        //index 新增字符的位置
        let new_str = '';
        var tmp ='';
        for (var i = 0;i<str.length;i++){
          tmp = str.substring(i,3);
          new_str+=tmp+add;
        }
        return str+'万'
      }
    },
    filters:{},
    mounted:function(){
      // this.$nextTick(()=>{
      //   this.toJson();
      // });
      this.axios({
        method:'post',
        url:API_PROXY+'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
        data:{
          g_tk: '5381',
          uin: '0',
          format: 'json',
          inCharset: 'utf-8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'h5',
          needNewCode: 1
        }
      }).then(res=>{
        // console.log(res.data.data.songList);
        this.songList = res.data.data.songList;
      });


      // this.$jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',{
      //   g_tk: '5381',
      //   uin: '0',
      //   format: 'json',
      //   inCharset: 'utf-8',
      //   outCharset: 'utf-8',
      //   notice: 0,
      //   platform: 'h5',
      //   needNewCode: 1
      // }).then(json=>{
      //   //返回数据
      //   console.log(json)
      // }).catch(err=>{
      //   console.log(err)
      // })

    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @cl-primary:#d43c33;
  .pd_r_2{padding-right: 2px;}
  .recommend-title{
    position: relative;
    padding-left: 10px;
    margin: 0 0 14px 0;
    font-size: 18px;
    font-weight: 400;
    &::before{
      position: absolute;
      left: 0;
      content: '';
      height: 100%;
      width: 2px;
      background-color: @cl-primary;
    }
  }
  .list-wrap{
    .list{font-size: 0;}
    li{
      position: relative;
      display: inline-block;
      width: 33.333%;
      padding-bottom: 14px;
      font-size: 16px;
      box-sizing: border-box;
      vertical-align: top;
      .list-num{
        position: absolute;
        top: 5px;
        right: 5px;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
      }
      .list-desc{
        width: 100%;
        padding: 5px 0 0 6px;
        color: #000;
        font-size: 13px;
        box-sizing: border-box;
        line-height: 1.2;
      }
      img{
        display: block;
        max-width: 100%;
        height: 136px;
      }
    }
  }
</style>
