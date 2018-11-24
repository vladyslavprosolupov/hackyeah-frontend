<script>
import Base from './Base'

export default {
  extends: Base,
  data () {
    return {
      button: {
        text: 'translate object',
        icon: '/img/options/languages_white.png'
      },
      loading: false,
      error: false,
      response: null,
      type: 'languages'
    }
  }
}
</script>
