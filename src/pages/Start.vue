<template>
  <div class="start">
    <div class="logo">
      <img src="/img/logo.png" alt="logo" class="img">
    </div>
    <router-link to="/options" class="button">
      Start
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
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
