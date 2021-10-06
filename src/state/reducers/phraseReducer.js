import { GET_DICEWARE_JSON } from "../actions/types"

const initialState = { phraseState: { empty: "object" } }

const phraseReducer = (state, action) => {
  switch (action.type) {
    case GET_DICEWARE_JSON:
      return { ...state, phraseState: action.payload }
    default:
      return initialState
  }
}

export default phraseReducer
