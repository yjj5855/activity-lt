<template>
  <div>
    <x-img class="ximg-demo" :src="`static/b1-1.jpg`"/>
    <x-img class="ximg-demo" :src="`static/b1-2.jpg`" :offset="-100"/>
    <x-img class="ximg-demo" :src="`static/b1-3.jpg`" :offset="-100"/>
    <x-img class="ximg-demo" :src="`static/b1-4.jpg`" :offset="-100"/>

    <div style="position: relative;" >
      <x-img class="ximg-demo" :src="`static/b1-5.jpg`" :offset="-100"/>
      <div style="position: absolute;left: 0;right: 0;text-align: center;top: 57%;">
        <img src="static/btn-goumai.png" style="width: 45%;">
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
        publicPath: 'https://yjj5855.github.io/activity-lt/dist/',
        list: [
        ]
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
