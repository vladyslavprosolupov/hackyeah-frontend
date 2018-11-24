<template>
  <div class="geometry-response">
    <div class="threejs"/>
    <div class="comment">
      <span class="title">
        pitch, roll, yaw...
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .geometry-response {
    height: 100%;
    width: 100%;
  }

  .comment {
    position: absolute;
    bottom: 10%;
    width: 100%;
    text-align: center;
  }

  .title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 22px;
    color: $red;
  }
</style>
