<template>
  <!--<img class="bubbly-button" :src="src" style="width: 40%;">-->
  <div class="bubbly-button">
    <slot></slot>
  </div>
</template>

<script>
  import $ from 'jquery'
  import TweenMax from 'gsap/TweenMax'
  import {Expo, Back} from 'gsap/EasePack'

  // let animateButtonStart = function (e) {
  //   e.target.classList.remove('animate-lt')
  //   e.target.classList.add('active-lt')
  // }
  //
  // let animateButton = function (e) {
  //   e.target.classList.remove('active-lt')
  //   // e.preventDefault
  //   // reset animation
  //   e.target.classList.add('animate-lt')
  //   setTimeout(function () {
  //     e.target.classList.remove('animate-lt')
  //   }, 700)
  // }
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
      $(this.$el).on('touchstart', this.animateButtonStart)
      $(this.$el).on('touchend', this.animateButton)
    },
    methods: {
      animateButtonStart () {
        TweenMax.to(this.$el, 0.05, {scaleX: 0.9, scaleY: 0.9, ease: Expo.linear})
      },
      animateButton () {
        TweenMax.to(this.$el, duration, {scaleY: 1.6, ease: Expo.easeOut})
        TweenMax.to(this.$el, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay})
        TweenMax.to(this.$el, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3})
      }
    }
  }
</script>

<style scoped>

</style>
