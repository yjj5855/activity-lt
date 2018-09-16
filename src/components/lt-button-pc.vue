<template>
  <!--<img class="bubbly-button" :src="src" style="width: 40%;">-->
  <div class="bubbly-button pc">
    <slot></slot>
  </div>
</template>

<script>
  import $ from 'jquery'
  import TweenMax from 'gsap/TweenMax'
  import {Expo, Back} from 'gsap/EasePack'

  let duration = 0.3
  let delay = 0.08
  export default {
    name: 'lt-button',
    props: {
      src: {
        required: true
      }
    },
    data () {
      return {
      }
    },
    mounted () {
      $(this.$el).on('click', this.animateButton)
    },
    methods: {
      animateButtonStart () {

      },
      animateButton () {
        let self = this
        TweenMax.to(this.$el, 0.05, {scaleX: 0.9, scaleY: 0.9, ease: Expo.linear})
        TweenMax.to(this.$el, duration, {scaleY: 1.6, ease: Expo.easeOut})
        TweenMax.to(this.$el, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay})
        TweenMax.to(this.$el, duration * 1.25, {
          scaleX: 1,
          scaleY: 1,
          ease: Back.easeOut,
          easeParams: [6],
          delay: delay * 3,
          onComplete: function () {
            self.$emit('click')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
