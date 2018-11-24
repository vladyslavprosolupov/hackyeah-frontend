<script>
import Base from './Base'

export default {
  extends: Base,
  data () {
    return {
      button: {
        text: 'scan face',
        icon: '/img/options/history_white.png'
      },
      loading: false,
      error: false,
      response: null,
      type: 'history'
    }
  }
}
</script>
