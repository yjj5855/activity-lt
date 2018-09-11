<template>
  <div>
    <x-img class="ximg-demo" src="static/b2/b2-1.jpg"/>
    <x-img class="ximg-demo" src="static/b2/b2-2.jpg" :offset="-200"/>

    <div style="position: relative;" >
      <x-img class="ximg-demo" src="static/b2/b2-3.jpg" :offset="-200"/>
      <div style="position: absolute;left: 0;right: 0;text-align: center;bottom: 8%;">
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
        url: 'https://ego.tmall.hk/category-1242652197.htm?spm=a1z10.5-b-s.w5001-15800929123.7.6dd41cadCrbseq&search=y&catName=%B6%F9%CD%AF%CF%B5%C1%D0&scene=taobao_shop#bd'
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
