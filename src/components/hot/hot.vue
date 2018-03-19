<template>
  <div>
    <div class="hot-brand">
      <span class="icon-cloundMusic"></span>
      <p class="hot-data">更新日期：03月15日</p>
    </div>
    <ul class="hotList-wrap">
      <li v-for="(item,index) in hotList">
        <a href="#">
          <span :class="{topSong :(index < 3)}" class="song-num">{{index<9?'0'+(index+1):index+1}}</span>
          <span class="song-name">
            {{item.name}}<br>
            <em>{{item.artists[0].name}}-{{item.name}}</em>
          </span>
          <div class="song-play-wrap">
            <span class="song-play"></span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  const  API_PROXY  = 'https://bird.ioliu.cn/v1/?url=';
  export default {
    data(){
      return{
        hotList:'',
      }
    },
    mounted:function () {
      this.axios({
        method:'post',
        url:'/api/playlist/detail?id=19723756'
      }).then(res=>{
        this.hotList = res.data.result.tracks;
      });
    }
  }
</script>
<style lang="less" scoped>
  @cl-primary:#d43c33;
  .hot-brand{
    width: 100%;
    height: 161px;
    padding: 30px;
    box-sizing: border-box;
    background-image: url(https://s3.music.126.net/m/s/img/hot_music_bg_3x.jpg?2bfefd3ba37eaffbd66b7d108b9de26a);
    background-size: 100% 100%;
    color: #fff;
    .icon-cloundMusic{
      display: block;
      width: 142px;
      height: 67px;
      background-position: -24px -30px;
      background-image: url('https://s3.music.126.net/m/s/img/index_icon_3x.png?49a82fee3e0fc602e9c8b25df2bda159');
      background-size: 166px 97px;
    }
    .hot-data{
      padding-top: 10px;
    }
  }
  .hotList-wrap{
    a{
      position: relative;
      display: flex;
      align-items:center;
      padding: 8px 0;
      text-decoration: none;
      color: #303032;
      .song-num{
        flex: 1;
        text-align: center;
        font-weight: 500;
      }
      .topSong{
        color: @cl-primary;
      }
      .song-name{
        flex: 6;
        color: #303032;
        line-height: 1.2;
        font-weight: 500;
        em{
          font-size: 12px;
          color: #303032;
          font-weight: normal;
        }
      }
      .song-play-wrap{
        flex: 1;
      }
      .song-play{
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
  }
</style>
