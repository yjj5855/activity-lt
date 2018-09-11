<template>
  <div>
    <x-img class="ximg-demo" src="static/b1/b1-1.jpg"/>
    <x-img class="ximg-demo" src="static/b1/b1-2.jpg" :offset="-200"/>

    <div style="position: relative;" >
      <x-img class="ximg-demo" src="static/b1/b1-3.jpg" :offset="-200"/>
      <div style="position: absolute;left: 0;right: 0;text-align: center;top: 61%;">
        <img src="static/btn-goumai.png" style="width: 45%;" @click="onBtnClick">
      </div>
    </div>
  </div>
</template>


<script>
  import {XImg} from 'vux'
  export default {
    components: {
      XImg
    },
    data () {
      return {
        url: 'https://detail.tmall.hk/hk/item.htm?spm=a1z10.10044-b-s.196.2.1e15154du716Y9&id=573893162110&scene=taobao_shop'
      }
    },
    methods: {
      onBtnClick () {
        window.location.href = this.url
      }
    }
  }
</script>

<style>
</style>
