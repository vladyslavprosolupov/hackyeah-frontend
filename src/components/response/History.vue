<template>
  <div class="history-response">
    <div
      class="photo"
      role="img"
      :alt="data.name || 'Bolesław Chrobry'"
      :style="{ backgroundImage: `url(${data.img_url || 'http://3.bp.blogspot.com/_6tGJrZ-y5aU/TUXZPfM642I/AAAAAAAABJ4/oHa1Bh-my24/s1600/Pc_Boleslaw_Chrobry.jpg'}` }"
    />
    <div class="name">
      {{ data.name || 'Bolesław Chrobry' }}
    </div>
    <div class="info" v-html="data.wikipedia_paragraph || `Przykładowe info`"/>
    <div class="youtube">
      <iframe
        width="340"
        height="340"
        :src="`https://www.youtube.com/embed/${data.youtube_video_id || '6JIdEk-Cw7o'}`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
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
  .history-response {
    @include center-content;
    flex-direction: column;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    margin-top: 100px;
  }

  .photo {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 3px solid #ccc;
    overflow: hidden;
    position: relative;
    background-position: center;
    background-size: cover;
    margin-bottom: 20px;
  }

  .name, .info {
    color: #fff;
    background-color: rgba(0, 0, 0, .4);
    border-radius: 5px;
    padding: 15px 20px;
    margin-bottom: 20px;
  }

  .name {
    font-weight: bold;
    font-size: 16px;
  }

  .info {
    font-size: 14px;
  }
</style>
