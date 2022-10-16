type ActionTypes = {
  SET_OPTIONS: string
  SET_LOADING: string
  API_FETCH: string
  API_ERROR: string
}

interface PhraseObj {
  word_count: number
  separator: string
  phrase: string
  words: {
    word: string
    word_list_key: number
  }[]
}

interface OptionsObj {
  phraseCount: number
  wordCount: number
  separator: string
  wordlist: string
}

interface ApiResponseObj {
  query: {
    phrase_count: string
    word_count: string
    separator: string
    wordlist: string
  }
  wordlists_available: string[]
  phrases: {
    word_count: number
    separator: string
    phrase_count: number
    phrases: PhraseObj
    wordlist: string
  }
}

export type { ActionTypes, PhraseObj, OptionsObj, ApiResponseObj }
