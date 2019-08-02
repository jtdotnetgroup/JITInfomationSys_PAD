const getters = {
  TaskQty: state => state.TaskQty.TaskQty,
  token: state => {
    let token = state.account.accessToken
    if (!token) {
      token = sessionStorage.getItem('token')
    }
    return token
  },
  permissions: state => state.account.permissions,
  addRouters: state => state.permissions.addRouters,
  username: state => state.account.username
}

export default getters
