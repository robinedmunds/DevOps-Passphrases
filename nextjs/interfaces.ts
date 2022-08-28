interface PhraseObj {
  word_count: number,
  separator: string,
  phrase: string,
  words: {
    word: string,
    word_list_key: number
  }[]
}

interface OptionsObj {
  phraseCount: number,
  wordCount: number,
  separator: string,
  wordlist: string
}

export type { PhraseObj, OptionsObj }
