const getters = {
  TaskQty: state => state.TaskQty.TaskQty,
  token: state => state.account.accessToken,
  permissions: state => state.account.permissions,
  addRouters: state => state.permissions.addRouters,
  username: state => state.account.username
}

export default getters
