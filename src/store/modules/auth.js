export const getterTypes = {
  //   getCurrentUser: "[auth] getCurrentUser",
}

export const mutationTypes = {
  //   setCurrentUserPending: "[auth] setCurrentUserPending",
  //   setCurrentUserSuccess: "[auth] setCurrentUserSuccess",
  //   setCurrentUserFailure: "[auth] setCurrentUserFailure",
}

export const actionTypes = {
  //   fetchCurrentUser: "[auth] fetchCurrentUser",
}

const state = () => ({
  //   currentUser: {},
  //   isLoading: false,
  //   errors: null,
})

const getters = {
  //   [getterTypes.getCurrentUser]: (state) => {
  //     return state.currentUser
  //   },
}

const mutations = {
  //   [mutationTypes.setCurrentUserPending](state) {
  //     state.isLoading = true
  //     state.currentUser = null
  //     state.errors = null
  //   },
  //
  //   [mutationTypes.setCurrentUserSuccess](state, payload) {
  //     state.currentUser = payload
  //     state.isLoading = false
  //   },
  //
  //   [mutationTypes.setCurrentUserFailure](state, payload) {
  //     state.errors = payload
  //     state.isLoading = false
  //   },
}

const actions = {
  //   async [actionTypes.fetchCurrentUser]({ commit }, payload) {
  //     commit(mutationTypes.setCurrentUserPending)
  //
  //     try {
  //       const res = await auth.getUser(payload)
  //       const data = res.data
  //
  //       commit(mutationTypes.setCurrentUserSuccess, data)
  //       return data
  //     } catch (err) {
  //       commit(mutationTypes.setCurrentUserFailure, err)
  //       throw err
  //     }
  //   },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
