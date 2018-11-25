<template>
  <div class="threejs">
    <div id="container" style="height: 100%"/>
  </div>
</template>

<script>
import * as Three from 'three'

const OrbitControls = require('three-orbit-controls')(Three)

export default {
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  mounted () {
    this.init()
    this.animate()
  },
  methods: {
    init () {
      let container = document.getElementById('container')

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new Three.Scene()

      // let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      // let material = new Three.MeshNormalMaterial()
      const geom = new Three.Geometry()
      const v1 = new Three.Vector3(0, 0, 0)
      const v2 = new Three.Vector3(0, 0.2, 0)
      const v3 = new Three.Vector3(0, 0.2, 0.2)

      geom.vertices.push(v1)
      geom.vertices.push(v2)
      geom.vertices.push(v3)

      geom.faces.push(new Three.Face3(0, 1, 2))
      geom.computeFaceNormals()

      this.mesh = new Three.Mesh(geom, new Three.LineBasicMaterial({ color: 0x0000ff }))
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setClearColor(0x000000, 0)
      this.renderer.setSize(container.clientWidth, container.clientHeight)

      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      container.appendChild(this.renderer.domElement)
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style lang="scss" scoped>
  .threejs {
    height: 100%;
  }
</style>
