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
    <div class="recommend-list">
      <p class="recommend-title">热门歌曲</p>
      <ul>
        <li v-for="(item,index) in recommendList">
          <a :src="item.mp3Url">
            <p class="song-name">{{item.name}}</p>
            <span class="song-artist">{{item.artists[0].name}}-{{item.name}}</span>
            <i class="song-brocasting"></i>
          </a>
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
        songList:'',
        nav_active:true,
        recommendList:''
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
      this.axios({
        method:'post',
        url:'/api/playlist/detail?id=19723756'
      }).then(res=>{
        this.recommendList = res.data.result.tracks;
        console.log(this.recommendList);
      });


      // this.$jsonp('/api',{
      //   callbackName: 'jsonCallback',
      //   g_tk: 5381,
      //   uin: 0,
      //   format: 'json',
      //   inCharset: 'utf-8',
      //   outCharset: 'utf-8',
      //   notice: 0,
      //   platform: 'h5',
      //   needNewCode: 1,
      //   new_format: 1,
      //   pic: 500,
      //   disstid: 2040362185,
      //   type: 1,
      //   json: 1,
      //   utf8: 1,
      //   onlysong: 0,
      //   picmid: 1,
      //   nosign: 1,
      //   song_begin: 0,
      //   song_num: 15
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
  //推荐歌曲
  .recommend-list{
    a{
      position: relative;
      display: block;
      padding: 6px 0 6px 14px;
      font-family: Helvetica, sans-serif;
    }
    .song-name{
      font-size: 17px;
      color: #333;
      line-height: 1.5;
      font-weight: 500;
    }
    .song-artist{
      font-size: 13px;
      color: #a5a5a5;
    }
    .song-brocasting{
      position: absolute;
      top: 50%;
      right: 20px;
      display: inline-block;
      width: 22px;
      height: 22px;
      margin-top: -11px;
      background-image: url('https://s3.music.126.net/m/s/img/index_icon_3x.png?49a82fee3e0fc602e9c8b25df2bda159');
      background-size: 166px 97px;
      background-position: -24px 0;
    }
  }
</style>
