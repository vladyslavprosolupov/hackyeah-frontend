<template>
  <div class="threejs">
    <div id="container" style="height: 100%"/>
  </div>
</template>

<script>
import * as Three from 'three'
/* eslint-disable */

const OrbitControls = require('three-orbit-controls')(Three)

export default {
  props: {
    response: {
      type: [Array, Object],
      required: true
    }
  },
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
    drawLine (vert, color) {


      var material = new Three.LineBasicMaterial({
        color: color,
        linewidth: 4
      });

      const geometry = new Three.Geometry();
      geometry.vertices.push(
        new Three.Vector3(...vert.from),
        new Three.Vector3(...vert.to),
      );

      const line = new Three.Line(geometry, material);
      line.rotation.x = Math.PI / 2


      this.scene.add(line);
    },
    init () {
      let container = document.getElementById('container')

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new Three.Scene()

      const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length
      const X = average(this.response.nodes.map(node => node.x))
      const Y = average(this.response.nodes.map(node => node.y))
      const Z = average(this.response.nodes.map(node => node.z))

      const max = 188

      const nodesMap = {}
      this.response.nodes.forEach(node => {
        nodesMap[node['name']] = [((node.x - X) / max), ((node.y - Y) / max), ((node.z - Z) / max)]
      })

      const vertices = this.response.connections.map((connection) => ({
        ...connection,
        from: nodesMap[connection.from],
        to: nodesMap[connection.to]
      }))


      vertices.forEach((vert) => {
        this.drawLine(vert, 0xffffff)
      })

      const angles = this.response.angle.map(angle => nodesMap[angle])
      console.log(angles, 'angles')
      const combinations = [[0, 1], [1, 2], [2, 0]]
      combinations.forEach(combination => {
        this.drawLine({
          from: angles[combination[0]],
          to: angles[combination[1]]
        }, 0xD2603E)
      })

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
