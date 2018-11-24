<script>
import Base from './Base'

export default {
  extends: Base,
  data () {
    return {
      button: {
        text: 'Scan geometry figure',
        icon: '/img/options/geometry_white.png'
      },
      loading: false,
      error: false,
      response: null,
      type: 'geometry'
    }
  }
}
</script>
