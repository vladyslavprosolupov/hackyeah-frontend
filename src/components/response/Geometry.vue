<template>
  <div class="geometry-response">
    <three-j-s/>
    <div class="comment">
      <span class="title">
        pitch, roll, yaw...
      </span>
    </div>
  </div>
</template>

<script>
import ThreeJS from '@/components/ThreeJS'

export default {
  components: {
    ThreeJS
  },
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
