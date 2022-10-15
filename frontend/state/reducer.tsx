import type { PhraseObj } from "../interfaces"

const actionTypes = {
  SET_OPTIONS: "SET_OPTIONS",
  SET_API_URL: "SET_API_URL",
  SET_LOADING: "SET_LOADING",
  API_FETCH: "API_FETCH",
  API_ERROR: "API_ERROR"
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SET_OPTIONS:
      return { ...state, options: action.payload }
    case actionTypes.SET_API_URL:
      return { ...state, apiURL: action.payload }
    case actionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case actionTypes.API_FETCH:
      return {
        ...state,
        apiError: null,
        wordlists: action.payload.wordlists_available,
        phrases: action.payload.phrases.phrases.map((o: PhraseObj) => o.phrase)
      }
    case actionTypes.API_ERROR:
      return { ...state, apiError: action.payload }
    default:
      return state
  }
}

export { actionTypes }
export default reducer
