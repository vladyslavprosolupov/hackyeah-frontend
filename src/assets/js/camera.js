navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia

export class Camera {
  constructor () {
    this.shouldStop = false
  }


  //

  stop () {
    this.shouldStop = true
  }

  getPreview (deviceId, video, onPreview, error) {
    const constraints = {
      video: { deviceId: { exact: deviceId } }
    }

    // get permissions
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        video.srcObject = stream

        // get camera frames
        var requestAnimationFrame_ = () => {
          // this has the lowest priority (other computing tasks will be finished first)
          window.requestAnimationFrame(() => {
            // Firefox v~30.0 gets confused with the video readyState firing an
            // erroneous HAVE_ENOUGH_DATA just before HAVE_CURRENT_DATA state,
            // hence keep trying to read it until resolved.
            if (video.readyState === video.HAVE_ENOUGH_DATA) {
              try {
                const videoWidth = video.videoWidth
                const videoHeight = video.videoHeight

                if (videoWidth > 0) {
                  onPreview(videoWidth, videoHeight)
                }
              } catch (err) {
                throw new Error(err)
              }
            }
            if (!this.shouldStop) {
              requestAnimationFrame_()
            }
          })
        }

        requestAnimationFrame_()
      })
      .catch(error)
  }


  //

  getCamera () {
    return new Promise((resolve, reject) => {
      if (this.hasGetUserMedia()) {
        // get device (it will ask for permissions)
        this.getVideoDevicesList()
          .then(resolve)
          .catch(reject)
      } else {
        reject(new Error('No GetUserMedia'))
      }
    })
  }


  //

  getVideoDevicesList () {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          console.log('DEVIXES = ', devices)
          /*
          // find back camera
          // this is only on Android (on iOS label is empty)
          for(var i=0; i<devices.length; i++) {
            if (devices[i].label.includes('back')) {
              return resolve(devices[i].deviceId)
            }
          } */

          let device

          if (this.isiOS()) {
            // first device is OK on iOS (just my thinking...)
            device = devices.find(device => device.kind === 'videoinput')
          } else {
            // On Android is oposite...
            device = devices.reverse().find(device => device.kind === 'videoinput')
          }

          if (device) {
            resolve(device.deviceId)
          } else {
            reject(new Error('No video device'))
          }
        })
    })

    /*
    return new Promise((resolve, reject) => {
      // ask for UserMedia
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(() => {
          return navigator.mediaDevices.enumerateDevices()
        })
        .then(devices => {
          console.log('DEVIXES2 = ', devices)

          // find back camera
          for(var i=0; i<devices.length; i++) {
            if (devices[i].label.includes('back')) {
              return resolve(devices[i].deviceId)
            }
          }

          // first device is OK (just my thinking...)
          const device = devices.find(device => device.kind === 'videoinput')

          if (device) {
            resolve(device.deviceId)
          } else {
            reject('No video device')
          }
        })
        .catch(reject)
    }) */
  }

  hasGetUserMedia () {
    // double false -> cast to Bool (ROTFL)
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
  }

  isiOS () {
    return !!navigator.platform.match(/iPhone|iPod|iPad/)
  }

  //
}
