<template>
  <div class="start">
    <div class="logo">
      <img src="/img/logo.png" alt="logo" class="img">
    </div>
    <router-link to="/options">
      <button-component type="span">
        Start
      </button-component>
    </router-link>
  </div>
</template>

<script>
import ButtonComponent from '@/components/Button'

export default {
  components: {
    ButtonComponent
  }
}
</script>

<style lang="scss" scoped>
  .start {
    @include fill-space;
    left: 0;
    top: 0;
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
