<template>
  <div class="start">
    <div class="logo">
      <img src="/img/logo.png" alt="logo" class="img">
    </div>
    <button class="button">
      Start
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .start {
    background: #000;
  }

  .logo {
    position: absolute;
    top: 50%;
    width: 80%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .button {
    position: absolute;
    bottom: 10%;
    width: 80%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
</style>
