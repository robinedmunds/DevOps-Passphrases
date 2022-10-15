const types = {
  SET_OPTIONS: "SET_OPTIONS"
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case types.SET_OPTIONS:
      return { ...state, options: action.payload }
    default:
      return state
  }
}

export default reducer
