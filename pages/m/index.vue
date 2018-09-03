<template>
  <div>
    <group title="vux demo">
      <cell title="cell" value="点我" is-link @click.native="alert"></cell>
    </group>
    <x-img class="ximg-demo" src="/Aurora-4k.jpg" :offset="-100"/>
    <x-img class="ximg-demo" src="/Aurora-1080.jpg" :offset="-100"/>
    <x-img class="ximg-demo" src="/btn-capture-icon.png" :offset="-100"/>
    <x-img class="ximg-demo" src="/Burner-4k.jpg" :offset="-100"/>
    <x-img class="ximg-demo" src="/Burner-1080.jpg" :offset="-100"/>
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
    alert() {
      this.$vux.alert.show('This is a Alert example.')
    }
  }
}
</script>

<style>
  .ximg-demo {
    width: 100%;
    height: auto;
  }
</style>