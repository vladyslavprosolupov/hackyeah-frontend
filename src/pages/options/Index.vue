<template>
  <div class="options-page">
    <div class="background">
      <div
        class="background--color"
        :class="{ 'background--color--loading': loading || (response && type !== 'languages') || type === 'options' }"
      >
        <div v-if="!response && type !== 'options'" class="loading-info">
          <span class="background--color__title">
            {{ loadingText }}
          </span>
          <preloader/>
        </div>
      </div>
      <video
        id="video"
        class="video"
        autoplay
        playsinline
      />
      <canvas id="video-canvas" hidden/>
    </div>
    <transition :name="animationDir">
      <component :is="currentView" :key="type"/>
    </transition>
  </div>
</template>

<script>
import { getCameraDevice } from '@/assets/js/app'
import { mapState } from 'vuex'
import Menu from './Menu'
import Geometry from '@/pages/options/Geometry'
import History from '@/pages/options/History'
import Languages from '@/pages/options/Languages'
import Preloader from '@/components/Preloader'

export default {
  components: {
    Preloader
  },
  computed: {
    ...mapState({
      animationDir: state => state.animation.animationDir,
      loading: state => state.option.loading,
      type: state => state.option.type,
      response: state => state.option.response,
      error: state => state.option.error
    }),
    loadingText () {
      return !this.error ? 'Making some magic...' : 'Our magic not enough here... Try again'
    },
    currentView () {
      const views = {
        'options': Menu,
        'geometry': Geometry,
        'history': History,
        'languages': Languages
      }

      return views[this.type]
    }
  },
  mounted () {
    getCameraDevice()
  }
}
</script>

<style lang="scss" scoped>
  .options-page {
    background: #fff;
    @include fill-space;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  .background {
    height: 100%;
    width: 100vw;
    z-index: 2;
    top: 0;
    left: 0;
    pointer-events: none;
    position: absolute;

    &--color {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, .6);
      transform: translate3d(0, 100%, 0);
      transition: transform .5s;
      z-index: 2;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      @include center-content;
      position: absolute;

      &__title {
        margin-bottom: 45px;
      }

      &--loading {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .loading-info {
    @include center-content;
    flex-direction: column;
  }

  .video {
    z-index: 1;
  }
</style>
