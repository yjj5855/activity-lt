<template>
  <div class="pc-home" style="max-width: 1200px;margin: 0 auto;">
    <div style="position: fixed;width: 100%;top: 0;left: 0;z-index: 2;">
      <img class="ximg-demo" :src="`static/pchome/topbar.png`"/>
      <div style="position: absolute; left: 15%;top: 0;width: 11%;height: 100%;" @click="drawerVisibility = !drawerVisibility"></div>

      <div id="drawer" v-if="drawerVisibility" style="background: #fff;position: absolute;z-index: 1;left: 15%;top: 100%;padding: 2% 1% 2% 2%;width: 17%;">
        <flexbox style="margin: 5px 0;" @click.native="onBannerClick(0)">
          <flexbox-item style="font-size: 16px;">新款小老虎</flexbox-item>
          <x-icon type="ios-arrow-right" size="20"></x-icon>
        </flexbox>
        <!--<br>-->
        <!--<flexbox style="margin: 5px 0;" @click.native="onBannerClick(1)">-->
          <!--<flexbox-item style="font-size: 28px;">BABY系列</flexbox-item>-->
          <!--<x-icon type="ios-arrow-right" size="40"></x-icon>-->
        <!--</flexbox>-->
        <!--<br>-->
        <!--<flexbox style="margin: 5px 0;" @click.native="onBannerClick(2)">-->
          <!--<flexbox-item style="font-size: 28px;">KIDS系列</flexbox-item>-->
          <!--<x-icon type="ios-arrow-right" size="40"></x-icon>-->
        <!--</flexbox>-->
      </div>
    </div>

    <!--banner-->
    <div style="position: relative;overflow: hidden;margin-top: 8%;" :style="bannerStyle">
      <x-img class="ximg-demo" :src="`static/pchome/home-1.jpg`" success-class="success-img"/>
      <swiper :duration="600" class="banner" :aspect-ratio="885/1921" v-model="bannerIndex" style="position: absolute;left: 0;top: 0;right: 0;z-index: 1;" :show-dots="false" auto>
        <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerList" :key="index" style="text-align: center;">
          <img :src="item" style="width: 100%;" @click="onBannerClick(index)"/>
        </swiper-item>
        <!--<img src="static/pchome/icon-l.png" style="width: 10%;position: absolute;left: 2%;top: 40%;" @click="bannerIndex > 0 ? bannerIndex&#45;&#45; : ''">-->
        <!--<img src="static/pchome/icon-r.png" style="width: 10%;position: absolute;right: 2%;top: 40%;" @click="bannerIndex < 3 ? bannerIndex++ : ''">-->
      </swiper>

      <!--<div style="position: absolute;left: 0;top: 10%;z-index: 0;">-->
        <!--<img class="lt-yueliang" src="static/pchome/home-1-yueliang.png" style="animation-delay: .5s;opacity: 0;"/>-->
      <!--</div>-->
      <!--<div style="position: absolute;left: 0;top: 16%;overflow-x: hidden;right: 0;z-index: 0;">-->
        <!--<img class="lt-che1" src="static/pchome/home-1-che.png" style="animation-delay: .5s;opacity: 0;"/>-->
      <!--</div>-->
      <!--<div style="position: absolute;left: 0;top: 73%;z-index: 0;">-->
        <!--<img class="lt-star2" src="static/pchome/home-1-star.png"/>-->
      <!--</div>-->
    </div>

    <!--倒计时-->
    <!--<div style="position: relative;" v-if="$route.query.showClock">-->
      <!--<img class="ximg-demo" :src="`static/pchome/home-2.jpg`"/>-->

      <!--<div style="position: absolute;left: 0;right: 0;top: -8%;">-->
        <!--<x-img src="static/pchome/daojishi.png" width="100%"/>-->
        <!--<clocker time="2018-10-01" style="position: absolute;display: block;top: 29%;left: 0;right: 0;font-size: 50px;">-->
          <!--<div style="position: relative;width: 100%;color: #fff;">-->
            <!--<span style="position: absolute;left: 8%;">%D</span>-->
            <!--<span style="position: absolute;left: 40%;">%H</span>-->
            <!--<span style="position: absolute;left: 70%;">%M</span>-->
            <!--&nbsp;-->
          <!--</div>-->
        <!--</clocker>-->
      <!--</div>-->
      <!--<div style="position: absolute; left: 0;bottom: 17%;width: 100%;height: 42%;" @click="playVideo('zbyrsp.mp4')"></div>-->
    <!--</div>-->

    <div style="position: relative;" v-if="firstVisibility">
      <img class="ximg-demo" :src="`static/pchome/home-2.jpg`"/>
    </div>

    <!--4个商城-->
    <div style="position: relative;" v-if="firstVisibility">
      <img class="ximg-demo" :src="`static/pchome/home-3.jpg`"/>

      <!--<div style="position: absolute;left: 0;top: 10%;z-index: 0;">-->
        <!--<img class="lt-star2" src="static/pchome/home-3-star-1.png" style="animation-delay: .3s"/>-->
      <!--</div>-->
      <!--<div style="position: absolute;left: 0;top: 30%;z-index: 0;">-->
        <!--<img class="lt-star2" src="static/pchome/home-3-star-2.png" style="animation-delay: .6s"/>-->
      <!--</div>-->
      <!--<div style="position: absolute;left: 0;top: 57%;z-index: 0;">-->
        <!--<img class="lt-star2" src="static/pchome/home-3-star-3.png" style="animation-delay: .9s"/>-->
      <!--</div>-->

      <!--<div style="position: absolute; top: 47%;left: 13%;width: 17%;height: 12%;" @click="goUrl('http://dwz.cn/WX0zcKEY', true)"></div>-->
      <!--<div style="position: absolute; top: 47%;left: 32%;width: 17%;height: 12%;" @click="goUrl('http://dwz.cn/tD34kGqn')"></div>-->
      <!--<div style="position: absolute; top: 47%;left: 51%;width: 17%;height: 12%;" @click="goUrl('http://dwz.cn/DUPWzzWK')"></div>-->
      <!--<div style="position: absolute; top: 47%;left: 70%;width: 17%;height: 12%;" @click="goUrl('http://dwz.cn/oikNHrLK')"></div>-->

      <!--3个视频-->
      <swiper auto :duration="600" :aspect-ratio="966/1921" v-model="videoIndex" style="position: absolute;left: 0;right: 0;bottom: 0;" :show-dots="false">
        <swiper-item v-for="(item, index) in videoList" :key="index" style="text-align: center;" @click.native="playVideo(videos[index])">
          <img :src="item" style="width: 90%;"/>
          <div style="position: absolute;left: 0;right: 0;bottom: 34%;text-align: center;">
            <img src="static/pchome/bofang.png" style="width: 90%;" />
          </div>
        </swiper-item>
      </swiper>
      <!--<img src="static/pchome/icon-l.png" style="width: 6%;position: absolute;left: 2%;bottom: 12%;" @click="videoIndex > 0 ? videoIndex&#45;&#45; : ''">-->
      <!--<img src="static/pchome/icon-r.png" style="width: 6%;position: absolute;right: 2%;bottom: 12%;" @click="videoIndex < 2 ? videoIndex++ : ''">-->

    </div>

    <!--花絮视频-->
    <div style="position: relative;" v-if="firstVisibility">
      <img class="ximg-demo" :src="`static/pchome/home-4.jpg`"/>
      <div style="position: absolute;left: 0;top: 46%;">
        <img class="lt-jiantou1" src="static/pchome/home-4-jiantou.png" style="overflow-x: hidden;"/>
      </div>
      <!--<div style="position: absolute; left: 0;bottom: 20%;width: 100%;height: 31%;" @click="playVideo('hxsp.mp4')"></div>-->

      <div ref="home-4-1" style="position: absolute;left: -400px;bottom: 0;padding-bottom:5%;overflow: hidden;width: 400px;">
        <img src="static/pchome/home-4-jiantou-2.png"/>
        <br>
        <lt-button id="home-4-goumai" src="static/pchome/btn-shangdian.png"  @click="goUrl('http://dwz.cn/WX0zcKEY')" style="margin-left: 4%;">
          前往旗舰店购买
        </lt-button>
      </div>
    </div>

    <!--宝宝banner-->
    <div style="position: relative;" v-if="firstVisibility">
      <img class="ximg-demo" :src="`static/pchome/home-5.jpg`"/>
      <!--<x-img src="static/pchome/btn-tiwen.png" style="width: 24%;position:absolute;top: 33%;right: 15%;"/>-->
      <swiper auto :duration="600" :aspect-ratio="1275/750" v-model="baobaoIndex" style="position: absolute;left: 30%;top: 26%;right: 30%;" :show-dots="false">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in baobaoList" :key="index" style="text-align: center;">
          <img :src="item" style="width: 100%;"/>
        </swiper-item>
      </swiper>
      <img src="static/pchome/icon-l.png" style="width: 3%;position: absolute;left: 25%;top: 59%;z-index: 1" @click="baobaoIndex > 0 ? baobaoIndex-- : ''">
      <img src="static/pchome/icon-r.png" style="width: 3%;position: absolute;right: 25%;top: 59%;z-index: 1" @click="baobaoIndex < 4 ? baobaoIndex++ : ''">
    </div>

    <div style="position: relative;" v-if="firstVisibility">
      <img v-if="firstVisibility" class="ximg-demo" :src="`static/pchome/home-6.jpg`"/>

      <flexbox :gutter="75" style="position: absolute;left: 5%;;bottom: 10%;;width: 90%;height: 60%;" justify="center" align="center">
        <flexbox-item>
          <img class="lt-timeline" :src="home6List[0].src" style="width: 100%;margin-top: 18%;" />
        </flexbox-item>
        <flexbox-item>
          <img class="lt-timeline" :src="home6List[1].src" style="width: 100%;margin-top: 10%;" />
        </flexbox-item>
        <flexbox-item>
          <img class="lt-timeline" :src="home6List[2].src" style="width: 100%;margin-top: -67%;" />
        </flexbox-item>
        <flexbox-item>
          <img class="lt-timeline" :src="home6List[3].src" style="width: 100%;margin-top: -123%;" />
        </flexbox-item>
        <flexbox-item>
          <img class="lt-timeline" :src="home6List[4].src" style="width: 100%;margin-top: -73%;" />
        </flexbox-item>
      </flexbox>
    </div>

    <!--大转盘-->
    <!--<div style="position: relative;" v-if="firstVisibility">-->
      <!--<x-img class="ximg-demo" :src="`static/pchome/home-7.jpg`"/>-->
      <!--<div style="position: absolute;top: 2%;left: 0;right: 0;text-align: center;overflow: hidden;">-->
        <!--<x-img src="static/pchome/dazhuanpan-bg.png" style="width: 100%;"/>-->
      <!--</div>-->


      <!--<div style="position: absolute;top: 30%;left: 0;right: 0;text-align: center;overflow: hidden;">-->
        <!--<x-img class="dazhuanpan-yuan" src="static/pchome/dazhuanpan-yuan.png" style="width: 65%;"/>-->
      <!--</div>-->

      <!--<div style="position: absolute;top: 34%;left: 0;right: 0;text-align: center;overflow: hidden;">-->
        <!--<x-img class="dazhuanpan" src="static/pchome/dazhuanpan.png" style="width: 52%;"/>-->

        <!--<div style="position: absolute;width: 100%;bottom: 40%;">-->
          <!--<flexbox style="justify-content: center;">-->
            <!--<x-img class="dazhuanpan-go" src="static/pchome/dazhuanpan-go.png" style="width: 10%;"/>-->
          <!--</flexbox>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div style="position: absolute;left: 0;right: 0;bottom: 6%;text-align: center;">-->
        <!--<x-img class="btn-img" src="static/pchome/btn-fanhui.png" style="width: 47%;" @click.native="scrollTop()"/>-->
      <!--</div>-->
    <!--</div>-->

    <!--公众号 微博-->
    <div style="position: relative;margin-top: -1px;" v-if="firstVisibility">
      <img class="ximg-demo" :src="`static/pchome/home-7.jpg`"/>

      <div style="position: absolute;bottom: 18%;left: 6%;width: 10%;height: 29%;" @click="onWeixinClick"></div>
      <div style="position: absolute;bottom: 18%;left: 16%;width: 10%;height: 29%;" @click="onWeiboClick"></div>
    </div>

    <!--视频-->
    <div v-transfer-dom>
      <x-dialog v-model="showVideoBox" class="dialog-demo videoPc" id="video">
        <div style="text-align: right;" @click.stop="closeVideo">
          <x-icon type="ios-close-outline" size="50" style="fill:#fff;"></x-icon>
        </div>
        <video controls="controls" :src="videoSrc" x-webkit-airplay="true" webkit-playsinline="true" preload="auto" ontimeupdate="videoUpdate(this)" id="video-1">
          <source :src="videoSrc" type="video/mp4"/>
        </video>
      </x-dialog>
    </div>

    <!--一元购-->
    <!--<div style="position: fixed;left: 0;top: 10%;" v-if="firstVisibility" >-->
      <!--<img src="static/pchome/yiyuan.png" class="yiyuan" style="width: 250px;" @click="goYiyuan" :data-clipboard-text="yiyuanUrl"/>-->
    <!--</div>-->

    <!--banner-popup-->
    <popup ref="bannerPopup" v-model="bannerPopupStatus" height="100%" @on-show="onBannerShow" @on-hide="onBannerHide" style="top: 0;bottom:0;overflow-y: scroll;">
      <component :is="banner"></component>
      <x-icon type="ios-close-empty" size="60" style="position: fixed;right: 5%;top: 5%;background: #fff;border-radius: 10px;" @click.native="bannerPopupStatus=false"></x-icon>
    </popup>

    <div v-transfer-dom>
      <x-dialog v-model="showQrCode" hide-on-blur>
        <img src="static/pchome/wxqrcode.jpg" style="width: 300px;"/>
      </x-dialog>
    </div>


    <!--<img class="lt-star" src="static/pchome/wujiaoxing.png" width="8%" style="position: absolute; top: 233px;left: 17px;"/>-->
  </div>
</template>


<script>
  import $ from 'jquery'
  import {TransferDom, XImg, XHeader, Swiper, SwiperItem, Popup, Flexbox, FlexboxItem, Clocker, XDialog} from 'vux'
  // import TweenMax from 'gsap/TweenMax'
  // import {Expo} from 'gsap/EasePack'

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
      'lt-button': require('../components/lt-button').default,
      banner1: require('./banner1-pc').default,
      banner2: require('./banner2').default,
      banner3: require('./banner3').default,
      XImg,
      XHeader,
      Swiper,
      SwiperItem,
      Popup,
      Flexbox,
      FlexboxItem,
      Clocker,
      XDialog
    },
    data () {
      return {
        firstVisibility: false,

        drawerVisibility: false,
        bannerList: [
          'static/pchome/banner-1.png'
          // 'static/pchome/banner-2.png'
          // 'static/pchome/banner-3.png',
          // 'static/pchome/banner-4.png'
        ],
        bannerIndex: 0,

        videoList: [
          'static/pchome/video-kunao.png'
          // 'static/pchome/video-xizao.png',
          // 'static/pchome/video-kunao.png'
        ],
        videos: [
          'video-kunao.mp4',
          'video-xizao.mp4',
          'video-zhuomicang.mp4'
        ],
        videoIndex: 0,

        baobaoList: [
          'static/pchome/baobao-1.png',
          'static/pchome/baobao-2.png',
          'static/pchome/baobao-3.png',
          'static/pchome/baobao-4.png'
          // 'static/pchome/baobao-5.png'
        ],
        baobaoIndex: 0,

        showVideoBox: false,
        videoSrc: '',

        bannerStyle: {
          height: 'auto'
        },

        bannerPopupStatus: false,
        banner: '',

        yiyuanUrl: 'https://h5.m.taobao.com/awp/core/detail.htm?id=576977040134',

        scrollTopPx: 0,

        showQrCode: false,

        home6List: [
          {src: 'static/pchome/home-6-img-1.png'},
          {src: 'static/pchome/home-6-img-2.png'},
          {src: 'static/pchome/home-6-img-3.png'},
          {src: 'static/pchome/home-6-img-4.png'},
          {src: 'static/pchome/home-6-img-5.png'}
        ]
      }
    },
    mounted () {
      if (new Date('2018-10-08').getTime() - new Date().getTime() > 0) {
        // this.bannerStyle.height = '146vw'
      }
      this.firstVisibility = true

      // $(window).on('scroll', (e) => {
      //   if (scrollTop > 3500 && scrollTop < 4000) {
      //     TweenMax.to(this.$refs['home-4-1'], 0.5, {
      //       x: '400px',
      //       ease: Back.easeInOut
      //     })
      //   }
      //   if (scrollTop < 3500 && scrollTop > 3000) {
      //     TweenMax.to(this.$refs['home-4-1'], 0.5, {
      //       x: '0',
      //       ease: Back.easeOut
      //     })
      //   }
      // })
    },
    methods: {
      onBannerClick (index) {
        this.scrollTopPx = $(window).scrollTop()
        $('#app').css({
          height: '1px',
          'overflow-y': 'hidden'
        })
        if (index === 3) {

        } else if (index === 0) {
          // this.$router.replace({name: 'banner1'})
          this.banner = 'banner1'
          this.$nextTick(() => {
            this.bannerPopupStatus = true
          })
        } else if (index === 1) {
          this.banner = 'banner3'
          this.$nextTick(() => {
            this.bannerPopupStatus = true
          })
        } else if (index === 2) {
          this.banner = 'banner2'
          this.$nextTick(() => {
            this.bannerPopupStatus = true
          })
        }
      },
      playVideo (mp4) {
        this.videoSrc = `static/pchome/${mp4}`
        this.showVideoBox = true
        setTimeout(() => {
          $('#video-1')[0].currentTime = 0.5
          if (isAndroid === 1) {
            $('#video-1')[0].play()
          } else {
            setTimeout(() => {
              $('#video-1')[0].play()
            }, 500)
          }
        }, 300)
      },
      closeVideo () {
        $('#video-1')[0].pause()
        this.showVideoBox = false
      },
      scrollTop () {
        $(window).scrollTop(0)
      },
      goYiyuan () {
        if (window.is_wx()) {
          let a = new window.ClipboardJS('.yiyuan')
          console.log(a)
          this.$vux.toast.text(`<span style="font-size: 30px;">链接已复制，请在其他浏览器中打开</span>`)
        } else {
          window.location.href = this.yiyuanUrl
        }
      },
      goUrl (url, isTaobaoLink = false) {
        window.location.href = url
      },
      onBannerShow () {
        this.$nextTick(() => {
          this.$refs.bannerPopup.$el.scrollTop = 0
        })
      },
      onBannerHide () {
        $('#app').css({
          height: 'auto',
          'overflow-y': 'auto'
        })
        $(window).scrollTop(this.scrollTopPx)
      },
      onWeixinClick () {
        this.showQrCode = true
      },
      onWeiboClick () {
        window.location.href = 'https://weibo.com/6087233450/profile?rightmod=1&wvr=6&mod=personinfo'
      }
    }
  }

  window.videoUpdate = function (event) {
    let miao = 100
    if (event.src.includes('zbyrsp')) {
      miao = 22
    } else if (event.src.includes('hxsp')) {
      miao = 36
    } else if (event.src.includes('video-kunao')) {
      miao = 49
    } else if (event.src.includes('video-xizao')) {
      miao = 37
    } else if (event.src.includes('video-zhuomicang')) {
      miao = 21
    }
    if (event.currentTime >= miao) {
      this.showVideoBox = false
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
