<template>
  <div>
    <div style="position: fixed;width: 100%;top: 0;left: 0;z-index: 2;">
      <x-img class="ximg-demo" :src="`static/home/topbar.png`"/>
      <div style="position: absolute; left: 0;top: 0;width: 21%;height: 100%;" @click="drawerVisibility = !drawerVisibility"></div>

      <div id="drawer" v-if="drawerVisibility" style="background: #fff;position: absolute;z-index: 1;top: 100%;padding: 40px 20px 40px 40px;width: 30%;">
        <flexbox style="margin: 5px 0;" @click.native="onBannerClick(0)">
          <flexbox-item style="font-size: 28px;">新款小老虎</flexbox-item>
          <x-icon type="ios-arrow-right" size="40"></x-icon>
        </flexbox>
        <br>
        <flexbox style="margin: 5px 0;" @click.native="onBannerClick(1)">
          <flexbox-item style="font-size: 28px;">BABY系列</flexbox-item>
          <x-icon type="ios-arrow-right" size="40"></x-icon>
        </flexbox>
        <br>
        <flexbox style="margin: 5px 0;" @click.native="onBannerClick(2)">
          <flexbox-item style="font-size: 28px;">KIDS系列</flexbox-item>
          <x-icon type="ios-arrow-right" size="40"></x-icon>
        </flexbox>
      </div>
    </div>

    <!--banner-->
    <div style="position: relative;overflow: hidden;margin-top: 16%;" :style="bannerStyle">
      <x-img class="ximg-demo" :src="`static/home/home-1.jpg`" success-class="success-img"/>
      <swiper v-if="firstVisibility" class="banner" :aspect-ratio="919/645" v-model="bannerIndex" style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;" :show-dots="false" auto>
        <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerList" :key="index" style="text-align: center;">
          <img :src="item" style="width: 100%;margin-top: -36%;" @click="onBannerClick(index)"/>
          <div style="position: absolute;left: 0;right: 0;bottom: 6%;text-align: center;" v-if="index < 3">
            <img class="btn-img" src="static/home/btn-liaojie.png" style="width: 40%;" @click="onBannerClick(index)">
          </div>
          <div style="position: absolute;left: 0;right: 0;bottom: 11%;text-align: center;" v-else>
            <img class="btn-img" src="static/home/btn-shipin.png" style="width: 57%;" @click="onBannerClick(index)">
          </div>
        </swiper-item>
        <img src="static/home/icon-l.png" style="width: 10%;position: absolute;left: 2%;top: 40%;" @click="bannerIndex > 0 ? bannerIndex-- : ''">
        <img src="static/home/icon-r.png" style="width: 10%;position: absolute;right: 2%;top: 40%;" @click="bannerIndex < 3 ? bannerIndex++ : ''">
      </swiper>
    </div>

    <!--倒计时-->
    <div style="position: relative;" v-if="$route.query.showClock">
      <x-img class="ximg-demo" :src="`static/home/home-2.jpg`"/>

      <div style="position: absolute;left: 0;right: 0;top: -8%;">
        <x-img src="static/home/daojishi.png" width="100%"/>
        <clocker time="2018-10-01" style="position: absolute;display: block;top: 29%;left: 0;right: 0;font-size: 50px;">
          <div style="position: relative;width: 100%;color: #fff;">
            <span style="position: absolute;left: 8%;">%D</span>
            <span style="position: absolute;left: 40%;">%H</span>
            <span style="position: absolute;left: 70%;">%M</span>
            &nbsp;
          </div>
        </clocker>
      </div>
      <div style="position: absolute; left: 0;bottom: 17%;width: 100%;height: 42%;" @click="playVideo('zbyrsp.mp4')"></div>

    </div>

    <!--4个商城-->
    <div style="position: relative;" v-if="firstVisibility">
      <x-img class="ximg-demo" :src="`static/home/home-3.jpg`" :offset="-400"/>
      <div style="position: absolute; top: 44%;left: 13%;width: 17%;height: 12%;"></div>
      <div style="position: absolute; top: 44%;left: 32%;width: 17%;height: 12%;"></div>
      <div style="position: absolute; top: 44%;left: 51%;width: 17%;height: 12%;"></div>
      <div style="position: absolute; top: 44%;left: 70%;width: 17%;height: 12%;"></div>

      <!--3个视频-->
      <swiper auto :aspect-ratio="1/1" v-model="videoIndex" style="position: absolute;left: 0;right: 0;bottom: 0;" :show-dots="false">
        <swiper-item v-for="(item, index) in videoList" :key="index" style="text-align: center;" @click.native="playVideo(videos[index])">
          <img :src="item" style="width: 100%;"/>
          <div style="position: absolute;left: 0;right: 0;bottom: 26%;text-align: center;">
            <img src="static/home/bofang.png" style="width: 100%;" />
          </div>
        </swiper-item>
      </swiper>
      <img src="static/home/icon-l.png" style="width: 6%;position: absolute;left: 2%;bottom: 12%;" @click="videoIndex > 0 ? videoIndex-- : ''">
      <img src="static/home/icon-r.png" style="width: 6%;position: absolute;right: 2%;bottom: 12%;" @click="videoIndex < 2 ? videoIndex++ : ''">

    </div>

    <!--花絮视频-->
    <div style="position: relative;" v-if="firstVisibility">
      <x-img class="ximg-demo" :src="`static/home/home-4.jpg`" :offset="-400"/>
      <div style="position: absolute; left: 0;bottom: 20%;width: 100%;height: 31%;" @click="playVideo('hxsp.mp4')"></div>
      <x-img class="btn-img" src="static/home/btn-shangdian.png" style="width: 40%;position:absolute;bottom: 4%;left: 3%;"/>
    </div>

    <!--宝宝banner-->
    <div style="position: relative;" v-if="firstVisibility">
      <x-img class="ximg-demo" :src="`static/home/home-5.jpg`" :offset="-400"/>

      <!--<x-img src="static/home/btn-tiwen.png" style="width: 24%;position:absolute;top: 33%;right: 15%;"/>-->
      <swiper auto :aspect-ratio="1275/750" v-model="baobaoIndex" style="position: absolute;left: 0;top: 1%;right: 0;" :show-dots="false">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in baobaoList" :key="index" style="text-align: center;">
          <img :src="item" style="width: 100%;"/>
        </swiper-item>
      </swiper>
      <img src="static/home/icon-l.png" style="width: 10%;position: absolute;left: 2%;top: 45%;" @click="baobaoIndex > 0 ? baobaoIndex-- : ''">
      <img src="static/home/icon-r.png" style="width: 10%;position: absolute;right: 2%;top: 45%;" @click="baobaoIndex < 4 ? baobaoIndex++ : ''">
    </div>

    <x-img v-if="firstVisibility" class="ximg-demo" :src="`static/home/home-6.jpg`" :offset="-400"/>

    <!--大转盘-->
    <div style="position: relative;" v-if="firstVisibility">
      <x-img class="ximg-demo" :src="`static/home/home-7.jpg`" :offset="-400"/>
      <div style="position: absolute;top: 2%;left: 0;right: 0;text-align: center;overflow: hidden;">
        <x-img src="static/home/dazhuanpan-bg.png" style="width: 90%;"/>
      </div>
      <div style="position: absolute;top: 27%;left: 0;right: 0;text-align: center;overflow: hidden;">
        <x-img class="dazhuanpan" src="static/home/dazhuanpan-yuan.png" style="width: 60%;"/>
      </div>

      <div style="position: absolute;top: 30%;left: 0;right: 0;text-align: center;overflow: hidden;">
        <x-img class="dazhuanpan-yuan" src="static/home/dazhuanpan.png" style="width: 50%;"/>

        <div style="position: absolute;width: 100%;bottom: 40%;">
          <flexbox style="justify-content: center;">
            <x-img class="dazhuanpan-go" src="static/home/dazhuanpan-go.png" style="width: 10%;"/>
          </flexbox>
        </div>
      </div>

      <div style="position: absolute;left: 0;right: 0;bottom: 6%;text-align: center;">
        <x-img class="btn-img" src="static/home/btn-fanhui.png" style="width: 47%;" @click.native="scrollTop()"/>
      </div>
    </div>

    <!--公众号 微博-->
    <div style="position: relative;background: #fff;padding-top: 10%;" v-if="firstVisibility">
      <x-img class="ximg-demo" :src="`static/home/home-10.png`" :offset="-400"/>

      <div style="position: absolute;bottom: 23%;left: 10%;width: 17%;height: 30%;" @click="onWeixinClick"></div>
      <div style="position: absolute;bottom: 23%;left: 32%;width: 17%;height: 30%;" @click="onWeiboClick"></div>
    </div>

    <!--视频-->
    <div v-transfer-dom>
      <x-dialog v-model="showVideoBox" class="dialog-demo video" id="video">
        <div style="text-align: right;" @click.stop="showVideoBox=false">
          <x-icon type="ios-close-outline" size="50" style="fill:#fff;"></x-icon>
        </div>
        <video controls="controls" :src="videoSrc" x-webkit-airplay="true" webkit-playsinline="true" preload="auto" ontimeupdate="videoUpdate(this)" id="video-1">
          <source :src="videoSrc" type="video/mp4"/>
        </video>
      </x-dialog>
    </div>

    <!--一元购-->
    <div style="position: fixed;left: 0;top: 10%;" v-if="firstVisibility" >
      <img src="static/home/yiyuan.png" class="yiyuan" style="width: 250px;" @click="goYiyuan" :data-clipboard-text="yiyuanUrl"/>
    </div>

    <div v-transfer-dom>
      <popup v-model="bannerPopupStatus" height="100%" @on-show="onBannerShow" @on-hide="onBannerHide">
        <component :is="banner"></component>
        <x-icon type="ios-close-empty" size="60" style="position: fixed;right: 20px;top: 20px;background: #fff;border-radius: 10px;" @click.native="bannerPopupStatus=false"></x-icon>
      </popup>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showQrCode" hide-on-blur>
        <img src="static/home/wxqrcode.jpg"/>
      </x-dialog>
    </div>

  </div>
</template>


<script>
  import $ from 'jquery'
  import {TransferDom, XImg, XHeader, Swiper, SwiperItem, Popup, Flexbox, FlexboxItem, Clocker, XDialog} from 'vux'

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
      banner1: require('./banner1').default,
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
          'static/home/banner-1.png',
          'static/home/banner-2.png',
          'static/home/banner-3.png',
          'static/home/banner-4.png'
        ],
        bannerIndex: 0,

        videoList: [
          'static/home/video-zhuomicang.png',
          'static/home/video-xizao.png',
          'static/home/video-kunao.png'
        ],
        videos: [
          'video-kunao.mp4',
          'video-xizao.mp4',
          'video-zhuomicang.mp4'
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

        showVideoBox: false,
        videoSrc: '',

        bannerStyle: {
          height: 'auto'
        },

        bannerPopupStatus: false,
        banner: '',

        yiyuanUrl: 'https://h5.m.taobao.com/awp/core/detail.htm?id=576977040134',

        scrollTopPx: 0,

        showQrCode: false
      }
    },
    mounted () {
      if (new Date('2018-10-08').getTime() - new Date().getTime() > 0) {
        // this.bannerStyle.height = '146vw'
      }

      setTimeout(() => {
        this.firstVisibility = true

        setTimeout(() => {
          $('.btn-img').on('touchstart', function () {
            $(this).css({transform: 'scale(0.9)'})
          })
          $('.btn-img').on('touchend', function () {
            $(this).css({transform: 'scale(1)'})
          })

          let self = this
          $('body').on('click', function (event) {
            let touchDiv = event.target
            let darwer = document.getElementById('drawer')
            if (darwer) {
              if (darwer.contains(touchDiv)) {

              } else {
                self.drawerVisibility = false
              }
            }
          })
        }, 300)
      }, 300)
    },
    methods: {
      onBannerClick (index) {
        if (index === 3) {

        } else if (index === 0) {
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
        this.videoSrc = `static/home/${mp4}`
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
      onBannerShow () {
        $('body').css({
          'overflow-y': 'hidden',
          height: '100vh'
        })
        this.scrollTopPx = $(window).scrollTop()
      },
      onBannerHide () {
        $('body').css({
          'overflow-y': 'auto',
          height: 'auto'
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
