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

    <div style="position: relative;">
      <x-img class="ximg-demo" :src="`static/home/home-1.jpg`"/>
      <swiper :aspect-ratio="919/645" v-model="bannerIndex" style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerList" :key="index" style="text-align: center;">
          <img :src="item" style="width: 100%;">
          <div style="position: absolute;left: 0;right: 0;bottom: 6%;text-align: center;">
            <img src="static/home/btn-liaojie.png" style="width: 40%;">
          </div>
        </swiper-item>
      </swiper>
    </div>
    <x-img class="ximg-demo" :src="`static/home/home-2.jpg`" :offset="-100"/>
    <x-img class="ximg-demo" :src="`static/home/home-3.jpg`" :offset="-100"/>
    <x-img class="ximg-demo" :src="`static/home/home-4.jpg`" :offset="-100"/>
    <x-img class="ximg-demo" :src="`static/home/home-5.jpg`" :offset="-100"/>
    <x-img class="ximg-demo" :src="`static/home/home-6.jpg`" :offset="-100"/>
    <x-img class="ximg-demo" :src="`static/home/home-7.jpg`" :offset="-100"/>
    <x-img class="ximg-demo" :src="`static/home/home-8.jpg`" :offset="-100"/>
  </div>
</template>


<script>
  import {TransferDom, XImg, XHeader, Swiper, SwiperItem, Popup, Flexbox, FlexboxItem} from 'vux'
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
          'static/home/banner-3.png'
        ],
        bannerIndex: 0
      }
    },
    methods: {
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
