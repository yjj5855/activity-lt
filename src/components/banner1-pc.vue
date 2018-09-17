<template>
  <div>
    <img class="ximg-demo" src="static/b1-pc/b1-1.jpg"/>
    <img class="ximg-demo" src="static/b1-pc/b1-2.jpg"/>
    <img class="ximg-demo" src="static/b1-pc/b1-3.jpg"/>
    <img class="ximg-demo" src="static/b1-pc/b1-4.jpg"/>

    <div style="position: relative;" >
      <img class="ximg-demo" src="static/b1-pc/b1-5.jpg"/>
      <div style="position: absolute;left: 0;right: 0;text-align: center;top: 61%;">
        <img src="static/btn-goumai-pc.png" class="img-btn btn-img" style="width: 100%;" @click="onBtnClick" :data-clipboard-text="url">
      </div>
    </div>

  </div>
</template>


<script>
  import $ from 'jquery'
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
    mounted () {
      setTimeout(() => {
        $('.btn-img').on('touchstart', function () {
          $(this).css({transform: 'scale(0.9)'})
        })
        $('.btn-img').on('touchend', function () {
          $(this).css({transform: 'scale(1)'})
        })
      }, 300)
    },
    methods: {
      onBtnClick () {
        window.open(this.url)
      }
    }
  }
</script>

<style>
</style>
