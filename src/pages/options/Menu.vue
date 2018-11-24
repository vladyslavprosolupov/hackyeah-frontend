<template>
  <div class="content">
    <h1 class="title">
      Scan and see more
    </h1>

    <div class="options">
      <div class="option" @click="setType('geometry')">
        <div class="icon">
          <img src="/img/options/geometry_red_shadow.png" alt="geometry" class="img img--1">
        </div>
        <div class="info">
          <div class="main">
            Geometry figure to 3D model
          </div>
          <div class="description">
            #math
          </div>
        </div>
      </div>
      <div class="option" @click="setType('history')">
        <div class="icon">
          <img src="/img/options/history_red_shadow.png" alt="history" class="img img--2">
        </div>
        <div class="info">
          <div class="main">
            Historic person's face to Facts
          </div>
          <div class="description">
            #history
          </div>
        </div>
      </div>
      <div class="option" @click="setType('languages')">
        <div class="icon">
          <img src="/img/options/languages_red_shadow.png" alt="languages" class="img img--3">
        </div>
        <div class="info">
          <div class="main">
            Object into translations
          </div>
          <div class="description">
            #languages
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: mapMutations(['setType'])
}
</script>

<style lang="scss" scoped>
  .content {
    position: absolute;
    z-index: 3;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    overflow-y: auto;
  }

  .title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 22px;
    margin: 15% 0 0 10%;
    color: $red;
    z-index: 3;
  }

  .options {
    position: relative;
    top: 30%;
    transform: translate3d(0, -50%, 0);
  }

  .option {
    display: flex;
    padding: 20px 0 20px 5%;
    text-decoration: none;
  }

  .icon {
    width: 65px;
    @include center-content;

    .img {
      &--1 {
        animation: jumping 5s linear 1s infinite;
      }

      &--2 {
        animation: dragging 5s linear 2s infinite
      }

      &--3 {
        animation: scaling 5s linear 3s infinite
      }
    }
  }

  .info {
    color: #fff;
    width: 100%;
    margin-left: 30px;
    padding: 15px;
    border-radius: 5px;
    background: rgba(0, 0, 0, .4);

    .main {
      font-size: 18px;
      font-weight: 500;
    }

    .description {
      margin-top: 13px;
      font-size: 15px;
    }
  }


  @keyframes jumping {
    0% {
      transform: translate3d(0, 0, 0);
    }
    5% {
      transform: translate3d(0, -10px, 0);
    }
    10% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes dragging {
    0% {
      transform: translate3d(0, 0, 0) rotate(0);
    }
    2% {
      transform: translate3d(0, -5px, 0) rotate(20deg);
    }
    4% {
      transform: translate3d(0, -5px, 0) rotate(0);
    }
    6% {
      transform: translate3d(0, -5px, 0) rotate(-20deg);
    }
    8% {
      transform: translate3d(0, 0, 0) rotate(0);
    }
  }

  @keyframes scaling {
    0% {
      transform: scale(1);
    }
    5% {
      transform: scale(1.15);
    }
    10% {
      transform: scale(1);
    }
  }
</style>
