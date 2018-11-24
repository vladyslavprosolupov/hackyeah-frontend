<template>
  <div id="app">
    <transition :name="transitionDir">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    transitionDir () {
      return 'slide-right'
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/sass/index";

  #app {
    font-family: $main-font;
  }
</style>
