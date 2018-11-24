<template>
  <div class="history-response">
    <div class="photo">
      <img :src="data.img_url || 'http://3.bp.blogspot.com/_6tGJrZ-y5aU/TUXZPfM642I/AAAAAAAABJ4/oHa1Bh-my24/s1600/Pc_Boleslaw_Chrobry.jpg'" :alt="data.name || 'Bolesław Chrobry'">
    </div>
    <div class="name">
      {{ data.name || 'Bolesław Chrobry' }}
    </div>
    <div class="info">
      {{ data.wikipedia_paragraph || 'Przykładowe info' }}
    </div>
    <div class="youtube">

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

</style>
