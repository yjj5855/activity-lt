<template>
  <div>
    <x-img class="ximg-demo" src="/b1-1.jpg"/>
    <x-img class="ximg-demo" src="/b1-2.jpg" :offset="-100"/>
    <x-img class="ximg-demo" src="/b1-3.jpg" :offset="-100"/>
    <x-img class="ximg-demo" src="/b1-4.jpg" :offset="-100"/>
    <x-img class="ximg-demo" src="/b1-5.jpg" :offset="-100"/>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: 'vux demo'
    }
  },
  data () {
    return {
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