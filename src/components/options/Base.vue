<template>
  <div class="content">
    <div class="close" :class="{ 'close--no-bg': loading || response }" @click="goBack">
      <img
        v-if="loading || response"
        src="/img/exit_red.png"
        alt="close"
        class="img"
      >
      <img
        v-else
        src="/img/left-arrow.png"
        alt="back"
        class="img"
      >
    </div>

    <response
      v-if="response"
      :type="type"
      :response="response"
      class="response"
    />

    <div v-if="!response && !loading && type !== 'options'" class="line"/>

    <button-component
      class="content__button"
      :class="{ 'content__button--hidden': loading || response }"
      @click.native="load"
    >
      <img :src="button.icon" alt="icon" class="content__button__img">
      <span :style="buttonTextStyle">
        {{ button.text }}
      </span>
    </button-component>
  </div>
</template>

<script>
/* eslint-disable */
import ButtonComponent from '../Button'
import Response from '../response/Index'
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
import { capturePhoto } from '@/assets/js/app'

export default {
  components: {
    ButtonComponent,
    Response
  },
  data () {
    return {
      button: {
        text: '',
        icon: ''
      }
    }
  },
  computed: {
    ...mapState({
      type: state => state.option.type,
      loading: state => state.option.loading,
      response: state => state.option.response
    }),
    buttonTextStyle () {
      return this.type === 'history' ? 'position: relative; left: -34px;' : ''
    }
  },
  methods: {
    ...mapMutations(['setLoading', 'setResponse', 'setAnimationDir', 'setType']),
    goBack () {
      if (this.loading || this.response) {
        this.setLoading(false)
        this.setResponse(null)
      } else {
        this.setAnimationDir('slide-right')
        this.setType('options')
        this.$nextTick(() => {
          this.setAnimationDir('slide-left')
        })
      }
    },
    load () {
      this.setLoading(true)
      axios.post('/process-block', {
        image: capturePhoto()
      }).then(res => {
        console.log(res)
        this.setResponse(res)
        this.setLoading(false)
      }).catch(console.error)
    }
  }
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

    &__button {
      position: absolute;
      bottom: 10%;
      width: 80%;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      display: flex;
      @include center-content;
      justify-content: space-around;

      &--hidden {
        @include hide-visually;
      }

      &__img {
        max-width: 34px;
      }
    }
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
    transition: background-color .15s linear .35s;
    z-index: 2;

    &--no-bg {
      background-color: rgba(255, 255, 255, 0);
    }
  }

  .response {
    z-index: 1;
  }

  .line {
    position: fixed;
    z-index: 10000;
    width: 100%;
    border-top: 2px dashed $red;
    top: 400px;
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
