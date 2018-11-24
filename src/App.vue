<template>
  <div id="app">
    <div id="mobile">
      <transition :name="transitionDir" mode="out-in">
        <router-view class="main-view"/>
      </transition>
    </div>
    <div id="desktop">
      <p>Please open this page on the mobile device</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    transitionDir () {
      return this.$store.state.animation.animationDir
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/sass/index";

  #app {
    font-family: $main-font;
    height: 100%;
    width: 100%;
  }

  #mobile {
    height: 100%;
    width: 100vw;
  }

  #desktop {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: rgba(0, 0, 0, .8);
    text-align: center;
    color: #fff;
    @include center-content;
    display: none;
  }

  @include media-up(md) {
    #mobile {
      display: none;
    }
    #desktop {
      display: flex;
    }
  }


  .main-view {
    height: 100%;
    width: 100vw;
    position: relative;
    overflow: hidden;
  }
</style>
