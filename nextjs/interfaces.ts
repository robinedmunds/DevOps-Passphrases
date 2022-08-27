interface PhraseObj {
  word_count: number,
  separator: string,
  phrase: string,
  words: {
    word: string,
    word_list_key: number
  }[]
}

export type { PhraseObj }
