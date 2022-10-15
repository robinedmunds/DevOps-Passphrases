import type { PhraseObj } from "../interfaces"

const types = {
  SET_OPTIONS: "SET_OPTIONS",
  API_FETCH: "API_FETCH",
  API_ERROR: "API_ERROR",
  SET_API_URL: "SET_API_URL",
  SET_LOADING: "SET_LOADING"
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case types.SET_OPTIONS:
      return { ...state, options: action.payload }
    case types.SET_API_URL:
      return { ...state, apiURL: action.payload }
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case types.API_FETCH:
      return {
        ...state,
        apiError: null,
        wordlists: action.payload.wordlists_available,
        phrases: action.payload.phrases.phrases.map((o: PhraseObj) => o.phrase)
      }
    case types.API_ERROR:
      return { ...state, apiError: action.payload }
    default:
      return state
  }
}

export default reducer
