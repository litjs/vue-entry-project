export const state = {
  test: {
    a: {
      b: {h:'liujun'}
    },
    k:'dd'
  }
}

export const mutations = {
  testMutation (state, payload) {
    console.log(state)
    state.test = payload.top
  }
}

export const actions = {
  testAction ({commit}, top) {
    console.log('222')
    commit({type: 'testMutation', top: top})
  }
}

