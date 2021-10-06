// redux reducers go here

import { DUMMY_ACTION } from "../actions/types"

const initialState = { dummyState: "initial state" }

const dummyReducer = (state, action) => {
  switch (action.type) {
    case DUMMY_ACTION:
      return { ...state, dummyState: "reduced!", ...action.payload }
    default:
      return initialState
  }
}

export default dummyReducer
