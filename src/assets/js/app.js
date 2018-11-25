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
  const video = document.getElementById('video')

  const camera = new Camera()
  camera.getPreview(deviceId, video, (videoWidth, videoHeight) => {
    },
    error => { // error
      console.error('ERROR preview', error)
    })
}

function capturePhoto () {
  const video = document.getElementById('video')

  const canvas = document.createElement('canvas')
  const width = video.offsetWidth
  const height = video.offsetHeight

  canvas.width = width
  canvas.height = height
  canvas.getContext('2d').drawImage(video, 0, 0, width, height)
  return canvas.toDataURL('image/png')
}

export { getCameraDevice, capturePhoto }
