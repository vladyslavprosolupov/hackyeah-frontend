<template>
  <component :is="componentType" :data="response"/>
</template>

<script>
import Geometry from './Geometry'
import History from './History'
import Languages from './Languages'

export default {
  props: {
    type: {
      type: String,
      required: true,
      validate: propVal => ['geometry', 'history', 'languages'].includes(propVal)
    },
    response: {
      type: [Object, Array],
      required: true
    }
  },
  computed: {
    componentType () {
      const types = {
        'geometry': Geometry,
        'history': History,
        'languages': Languages
      }

      return types[this.type]
    }
  }
}
</script>
