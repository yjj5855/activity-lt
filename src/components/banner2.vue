<template>
  <div>
    <x-img class="ximg-demo" src="static/b2/b2-1.jpg"/>
    <x-img class="ximg-demo" src="static/b2/b2-2.jpg" :offset="-200"/>

    <div style="position: relative;" >
      <x-img class="ximg-demo" src="static/b2/b2-3.jpg" :offset="-200"/>
      <div style="position: absolute;left: 0;right: 0;text-align: center;bottom: 8%;">
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
      }
    },
    methods: {
    }
  }
</script>

<style>
</style>
