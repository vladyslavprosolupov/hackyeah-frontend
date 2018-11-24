<template>
  <div class="preloader">
    <div class="wave opacity">
      <div class="dots">
        <div class="dot"/>
        <div class="dot"/>
        <div class="dot"/>
        <div class="dot"/>
        <div class="dot"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .wave {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .wave .dots {
    width: 70px;
    height: 70px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .wave .dot {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 75%;
    left: 0;
    animation: wave 2s ease infinite;
  }

  .dot {
    width: 9px;
    height: 9px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
  }

  .wave .dot:nth-child(2) {
    position: absolute;
    left: 25%;
    animation: wave 2s .2s ease infinite;
  }
  .wave .dot:nth-child(3) {
    position: absolute;
    left: 50%;
    animation: wave 2s .4s ease infinite;
  }
  .wave .dot:nth-child(4) {
    position: absolute;
    left: 75%;
    animation: wave 2s .6s ease infinite;
  }
  .wave .dot:nth-child(5) {
    position: absolute;
    left: 100%;
    animation: wave 2s .8s ease infinite;
  }


  .wave.opacity .dot {
    position: absolute;
    top: 75%;
    left: 0;
    animation: wave 2s ease infinite, opacity 2s ease infinite;
  }
  .wave.opacity .dot:nth-child(2) {
    position: absolute;
    left: 25%;
    animation: wave 2s .2s ease infinite, opacity 2s .2s ease infinite;
  }
  .wave.opacity .dot:nth-child(3) {
    position: absolute;
    left: 50%;
    animation: wave 2s .4s ease infinite,
    opacity 2s .4s ease infinite;
  }
  .wave.opacity .dot:nth-child(4) {
    position: absolute;
    left: 75%;
    animation: wave 2s .6s ease infinite, opacity 2s .6s ease infinite;
  }
  .wave.opacity .dot:nth-child(5) {
    position: absolute;
    left: 100%;
    animation: wave 2s .8s ease infinite, opacity 2s .8s ease infinite;
  }

  @keyframes wave {
    0% {
      top: 75%;
    }
    50% {
      top: 25%;
    }
    100% {
      top: 75%;
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
