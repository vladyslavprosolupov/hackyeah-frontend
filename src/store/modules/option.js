const state = {
  loading: false,
  response: null,
  type: 'options',
  error: null
}

const mutations = {
  setLoading (state, value) {
    state.loading = value
  },
  setResponse (state, value) {
    state.response = value
  },
  setType (state, value) {
    state.type = value
  },
  setError (state, value) {
    state.error = value
  }
}

export default { state, mutations }
