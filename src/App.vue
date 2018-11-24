<template>
  <div id="app">
    <div id="mobile">
      <transition :name="transitionDir">
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
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
</style>
