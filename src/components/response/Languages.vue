<template>
  <div class="languages-response">
    <div class="words">
      <div v-for="(word, i) in data.words || test.words" :key="i" class="word">
        <div
          v-for="(translation, j) in word"
          :key="translation"
          class="translation"
          :class="{ 'translation--white' : j === 0 }"
        >
          {{ translation }}
        </div>
      </div>
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
  },
  data () {
    return {
      test: {
        words: [
          ['Chryzantema', 'bottle', 'бутылка'],
          ['woda', 'watter', 'вода']
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .words {
    position: absolute;
    bottom: 10%;
    width: 100%;
    display: flex;
  }

  .word {
    margin: 0 5px;
    width: 100%;
  }

  .translation {
    text-align: center;
    padding: 20px 25px;
    margin: 10px 0;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: $red;
    background-color: rgba(0, 0, 0, .6);
    border-radius: 5px;

    &--white {
      color: #fff;
    }
  }
</style>
