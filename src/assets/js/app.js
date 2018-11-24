import { Camera } from './camera.js'
/* eslint-disable */

function getCameraDevice () {
  // get device
  return new Promise((resolve, reject) => {
    new Camera().getCamera()
      .then((deviceId) => {
        console.log('START!', deviceId)
        start(deviceId)
        resolve()
      })
      .catch((err) => {
        console.log('CAMERA ERROR = ', err)
        reject(err)
      })
  })
}

//

function start (deviceId) {
  const cameraCanvas = document.getElementById('video-canvas')
  const video = document.getElementById('video')
  const cameraContext = cameraCanvas.getContext('2d')


  const camera = new Camera()
  camera.getPreview(deviceId, video, (videoWidth, videoHeight) => {
  },
  error => { // error
    console.error('ERROR preview', error)
  })
}

export { getCameraDevice }
