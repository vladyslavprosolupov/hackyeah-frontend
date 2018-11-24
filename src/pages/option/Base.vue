<template>
  <div class="option-page">
    <div class="background">
      <video/>
    </div>

    <div class="content">
      <div class="close" @click="goBack">
        <img src="/img/exit_red.png" alt="close" class="img">
      </div>

      <button-component class="content__button">
        <img :src="button.icon" alt="icon" class="content__button__img">
        {{ button.text }}
      </button-component>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/Button'

export default {
  components: {
    ButtonComponent
  },
  data () {
    return {
      button: {
        text: '',
        icon: ''
      }
    }
  },
  methods: {
    goBack () {
      this.$store.commit('setAnimationDir', 'slide-right')
      this.$router.push('/options')
    }
  }
}
</script>

<style lang="scss" scoped>
  .option-page {
    background: #fff;
    @include fill-space;
  }

  .background {
    position: fixed;
    height: 100%;
    width: 100vw;
    z-index: 2;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  .close {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .6);
    width: 28px;
    color: $red;
    position: absolute;
    top: 2%;
    left: 2%;
    padding: 14px;
    @include center-content;
  }

  .content {
    position: relative;
    z-index: 3;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    &__button {
      position: absolute;
      bottom: 10%;
      width: 80%;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      display: flex;
      @include center-content;
      justify-content: space-around;

      &__img {
        max-width: 34px;
      }
    }
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
