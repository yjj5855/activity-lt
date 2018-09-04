<template>
  <div>
    <div style="position: relative;">
      <x-img class="ximg-demo" :src="`static/home/topbar.png`"/>
      <div style="position: absolute; left: 0;top: 0;width: 21%;height: 100%;" @click="drawerVisibility = true"></div>

      <div v-if="drawerVisibility" style="background: #fff;position: absolute;z-index: 1;top: 100%;padding: 20px 10px 20px 20px;width: 30%;">
        <flexbox style="margin: 5px 0;" @click.native="$router.push({name: 'banner1'})">
          <flexbox-item style="font-size: 14px;">新款小老虎</flexbox-item>
          <x-icon type="ios-arrow-right" size="20"></x-icon>
        </flexbox>
        <flexbox style="margin: 5px 0;" @click.native="$router.push({name: 'banner2'})">
          <flexbox-item style="font-size: 14px;">BABY系列</flexbox-item>
          <x-icon type="ios-arrow-right" size="20"></x-icon>
        </flexbox>
        <flexbox style="margin: 5px 0;" @click.native="$router.push({name: 'banner3'})">
          <flexbox-item style="font-size: 14px;">KIDS系列</flexbox-item>
          <x-icon type="ios-arrow-right" size="20"></x-icon>
        </flexbox>
      </div>
    </div>

    <!--banner-->
    <div style="position: relative;">
      <x-img class="ximg-demo" :src="`static/home/home-1.jpg`"/>
      <swiper :aspect-ratio="919/645" v-model="bannerIndex" style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;" :show-dots="false">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerList" :key="index" style="text-align: center;">
          <img :src="item" style="width: 100%;margin-top: -36%;">
          <div style="position: absolute;left: 0;right: 0;bottom: 6%;text-align: center;" v-if="index < 3">
            <img src="static/home/btn-liaojie.png" style="width: 40%;">
          </div>
          <div style="position: absolute;left: 0;right: 0;bottom: 11%;text-align: center;" v-else>
            <img src="static/home/btn-shipin.png" style="width: 57%;">
          </div>
        </swiper-item>
        <img src="static/home/icon-l.png" style="width: 10%;position: absolute;left: 2%;top: 40%;" @click="bannerIndex > 0 ? bannerIndex-- : ''">
        <img src="static/home/icon-r.png" style="width: 10%;position: absolute;right: 2%;top: 40%;" @click="bannerIndex < 3 ? bannerIndex++ : ''">
      </swiper>

      <!--倒计时-->
    </div>

    <!--直播预热视频-->
    <div style="position: relative;">
      <x-img class="ximg-demo" :src="`static/home/home-2.jpg`" :offset="-100"/>
      <div style="position: absolute; left: 0;top: 0;width: 100%;height: 28%;" @click="playVideo('zbyrsp.mp4')"></div>
    </div>

    <!--3个视频-->
    <div style="position: relative;">
      <x-img class="ximg-demo" :src="`static/home/home-3.jpg`" :offset="-100"/>
      <swiper :aspect-ratio="919/645" v-model="videoIndex" style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;">
        <swiper-item v-for="(item, index) in videoList" :key="index" style="text-align: center;">
          <img :src="item" style="width: 100%;">
        </swiper-item>
      </swiper>

      <div style="position: absolute; left: 0;bottom: 0;width: 100%;height: 24%;" @click="playVideo('hxsp.mp4')"></div>
    </div>


    <!--宝宝banner-->
    <div style="position: relative;">
      <x-img class="ximg-demo" :src="`static/home/home-4.jpg`" :offset="-100"/>

      <img src="static/home/btn-shangdian.png" style="width: 40%;position:absolute;top: 6%;left: 3%;">
      <img src="static/home/btn-tiwen.png" style="width: 24%;position:absolute;top: 33%;right: 15%;">
      <swiper :aspect-ratio="919/645" v-model="baobaoIndex" style="position: absolute;left: 0;top: 43%;right: 0;bottom: 0;" :show-dots="false">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in baobaoList" :key="index" style="text-align: center;">
          <img :src="item" style="width: 100%;">
        </swiper-item>
      </swiper>
      <img src="static/home/icon-l.png" style="width: 10%;position: absolute;left: 2%;top: 63%;" @click="baobaoIndex > 0 ? baobaoIndex-- : ''">
      <img src="static/home/icon-r.png" style="width: 10%;position: absolute;right: 2%;top: 63%;" @click="baobaoIndex < 4 ? baobaoIndex++ : ''">
    </div>
    <x-img class="ximg-demo" :src="`static/home/home-5.jpg`" :offset="-100"/>


    <div style="position: relative;">
      <x-img class="ximg-demo" :src="`static/home/home-6.jpg`" :offset="-100"/>
      <div style="position: absolute;left: 0;right: 0;bottom: 4%;text-align: center;">
        <img src="static/home/btn-fanhui.png" style="width: 47%;" @click="scrollTop()">
      </div>
    </div>



    <section id="video">
      <video :src="videoSrc" x-webkit-airplay="true" webkit-playsinline="true" preload="auto" ontimeupdate="videoUpdate(this)" id="video-1"></video>
    </section>
  </div>
</template>


<script>
  import $ from 'jquery'
  import {TransferDom, XImg, XHeader, Swiper, SwiperItem, Popup, Flexbox, FlexboxItem} from 'vux'

  let isAndroid = 0
  let browser = {
    versions: () => {
      let u = navigator.userAgent
      return {
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // android终端或uc浏览器
      }
    }
  }
  browser.versions()

  export default {
    directives: {
      TransferDom
    },
    components: {
      XImg, XHeader, Swiper, SwiperItem, Popup, Flexbox, FlexboxItem
    },
    data () {
      return {
        publicPath: 'https://yjj5855.github.io/activity-lt/dist/',
        list: [
        ],

        drawerVisibility: false,
        bannerList: [
          'static/home/banner-1.png',
          'static/home/banner-2.png',
          'static/home/banner-3.png',
          'static/home/banner-4.png'
        ],
        bannerIndex: 0,

        videoList: [

        ],
        videoIndex: 0,

        baobaoList: [
          'static/home/baobao-1.png',
          'static/home/baobao-2.png',
          'static/home/baobao-3.png',
          'static/home/baobao-4.png',
          'static/home/baobao-5.png'
        ],
        baobaoIndex: 0,

        videoSrc: ''
      }
    },
    mounted () {
      if (browser.versions.android) {
        isAndroid = 1
        $('#video-1').attr({'controls': 'controls'})
      } else {
        $('body').addClass('animate')
      }
    },
    methods: {
      playVideo (mp4) {
        this.videoSrc = `static/home/${mp4}`
        this.$nextTick(() => {
          $('#video-1')[0].currentTime = 0.5
          $('#video').addClass('show')
          if (isAndroid === 1) {
            $('#video-1')[0].play()
          } else {
            setTimeout(() => {
              $('#video-1')[0].play()
            }, 500)
          }
        })
      },
      scrollTop () {
        $(window).scrollTop(0)
      }
    }
  }

  window.videoUpdate = function (event) {
    console.log(event.src)
    let miao = 100
    if (event.src.includes('zbyrsp')) {
      miao = 22
    } else if (event.src.includes('hxsp')) {
      miao = 36
    }
    if (event.currentTime >= miao) {
      $('#video').removeClass('show')
    }
  }
</script>

<style>
  .ximg-demo {
    width: 100%;
    height: auto;
    display: block;
  }
</style>
