<template>
  <div>
    <x-img class="ximg-demo" src="static/b3/b3-1.jpg"/>
    <x-img class="ximg-demo" src="static/b3/b3-2.jpg" :offset="-200"/>
    <x-img class="ximg-demo" src="static/b3/b3-3.jpg" :offset="-200"/>

    <div style="position: relative;" >
      <x-img class="ximg-demo" src="static/b3/b3-4.jpg" :offset="-200"/>
      <div style="position: absolute;left: 0;right: 0;text-align: center;bottom: 18%;">
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
        url: 'https://ego.tmall.hk/category-1239096640.htm?spm=a1z10.10044-b-s.w5001-15800929123.8.1e15154du716Y9&search=y&catName=%D3%A4%B6%F9%CF%B5%C1%D0&scene=taobao_shop#bd'
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
