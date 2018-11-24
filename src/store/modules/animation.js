const state = {
  animationDir: 'slide-left'
}

const mutations = {
  setAnimationDir (state, newDir) {
    state.animationDir = newDir
  }
}

export default { state, mutations }
