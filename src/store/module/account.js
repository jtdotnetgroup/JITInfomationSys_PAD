import { login, GetUserInfo } from '@/api/account'

const account = {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem('token'), // 从localStoreage中读取
    username: localStorage.getItem('username'), // 从localStoreage中读取
    empname: '',
    permissions: ''
  },
  mutations: {
    UPDATE_ACCESSTOKEN (state, payload) {
      state.accessToken = payload
      localStorage.setItem('token', payload)// 写入localStoreage中，解决刷新后由于token丢失重回到登录页面的问题
    },
    UPDATE_USERNAME (state, payload) {
      state.username = payload
      localStorage.setItem('username', payload)
    },
    UPDATE_EMPNAME (state, payload) {
      state.empname = payload
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    }
  },
  actions: {
    async Login ({ commit }, payload) {
      await login(payload.username, payload.password)
        .then(res => {
          var data = res.data
          if (!data.error) {
            localStorage.setItem('token', data.result.accessToken)
            localStorage.setItem('username', data.result.userName)
            // winForm.User = data.result.userName
            commit('UPDATE_ACCESSTOKEN', data.result.accessToken)
            commit('UPDATE_USERNAME', payload.username)
          }
          let result = Promise.resolve(res)
          return result
        })
        .catch(err => {
          return Promise.reject(err)
        })
    },
    Logout ({ commit }) {
      commit('UPDATE_ACCESSTOKEN', '')
      commit('UPDATE_USERNAME', '')
      commit('SET_PERMISSIONS', {})
      localStorage.removeItem('token')
      localStorage.removeItem('username')
    },

    async GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        GetUserInfo().then(response => {
          const result = response.data.result
          if (result.auth.grantedPermissions) {
            commit('SET_PERMISSIONS', result.auth.grantedPermissions)
          } else {
            return reject(new Error('grantedPermissions must array'))
          }
          return resolve(result)
        }).catch(error => {
          return reject(error)
        })
      })
    }
  }
}

export default account
