import axios from 'axios'
import qs from 'qs'

// set default ajax options
axios.defaults.baseURL = process.env.API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.defaults.paramsSerializer = function (params) {
  return qs.stringify(params, { indices: false })
}

axios.interceptors.request.use(config => {
  // add slash before question mark
  config.url = config.url.replace(/[^/]\?/, x => x[0] + '/' + x[1])

  // add slash at the end
  if (!/\?/.test(config.url) && !/\/$/.test(config.url)) {
    config.url += '/'
  }

  return config
}, error => {
  return Promise.reject(error)
})
