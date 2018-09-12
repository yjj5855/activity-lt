<template>
  <div>
    <img class="ximg-demo" src="static/b2/b2-1.jpg"/>
    <img class="ximg-demo" src="static/b2/b2-2.jpg" :offset="200"/>

    <div style="position: relative;" >
      <img class="ximg-demo" src="static/b2/b2-3.jpg" :offset="200"/>
      <div style="position: absolute;left: 0;right: 0;text-align: center;bottom: 8%;">
        <img src="static/btn-goumai.png" class="img-btn btn-img" style="width: 45%;" @click="onBtnClick" :data-clipboard-text="url">
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
        url: 'https://ego.tmall.hk/category-1242652197.htm?spm=a1z10.5-b-s.w5001-15800929123.7.6dd41cadCrbseq&search=y&catName=%B6%F9%CD%AF%CF%B5%C1%D0&scene=taobao_shop#bd'
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
