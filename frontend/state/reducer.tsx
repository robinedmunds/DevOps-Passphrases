import type { OptionsObj, PhraseObj } from "../interfaces"
import { getApiBaseUrl } from "../config"

const actionTypes = {
  SET_OPTIONS: "SET_OPTIONS",
  SET_LOADING: "SET_LOADING",
  API_FETCH: "API_FETCH",
  API_ERROR: "API_ERROR"
}

const buildApiUrl = (options: OptionsObj) =>
  `${getApiBaseUrl()}` +
  `?phrase_count=${options.phraseCount}` +
  `&word_count=${options.wordCount}` +
  `&separator=${options.separator}` +
  `&wordlist=${options.wordlist}`

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SET_OPTIONS:
      return {
        ...state,
        options: action.payload,
        apiURL: buildApiUrl(action.payload)
      }
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

export { actionTypes, buildApiUrl }
export default reducer
