<template>
  <component :is="type" class="button">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>
