<template>
  <div>
    <img class="ximg-demo" src="static/b1/b1-1.jpg"/>
    <img class="ximg-demo" src="static/b1/b1-2.jpg" :offset="-200"/>

    <div style="position: relative;" >
      <img class="ximg-demo" src="static/b1/b1-3.jpg" :offset="-200"/>
      <div style="position: absolute;left: 0;right: 0;text-align: center;top: 61%;">
        <img src="static/btn-goumai.png" class="img-btn" style="width: 45%;" @click="onBtnClick" :data-clipboard-text="url">
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
    mounted () {
    },
    methods: {
      onBtnClick () {
        if (window.is_wx()) {
          let a = new window.ClipboardJS('.img-btn')
          console.log(a)
          this.$vux.toast.text(`<span style="font-size: 30px;">链接已复制，请在其他浏览器中打开</span>`)
        } else {
          window.location.href = this.url
        }
      }
    }
  }
</script>

<style>
</style>
