<template>
  <div>
    <img class="ximg-demo" src="static/b3/b3-1.jpg"/>
    <img class="ximg-demo" src="static/b3/b3-2.jpg" :offset="200"/>
    <img class="ximg-demo" src="static/b3/b3-3.jpg" :offset="200"/>

    <div style="position: relative;" >
      <img class="ximg-demo" src="static/b3/b3-4.jpg" :offset="200"/>
      <div style="position: absolute;left: 0;right: 0;text-align: center;bottom: 18%;">
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
        url: 'https://ego.tmall.hk/category-1239096640.htm?spm=a1z10.10044-b-s.w5001-15800929123.8.1e15154du716Y9&search=y&catName=%D3%A4%B6%F9%CF%B5%C1%D0&scene=taobao_shop#bd'
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
