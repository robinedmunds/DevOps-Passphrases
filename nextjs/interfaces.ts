interface PhraseObj {
  word_count: Number,
  separator: String,
  phrase: String,
  words: [
    {
      word: String,
      word_list_key: Number
    },
    {
      word: String,
      word_list_key: Number
    },
    {
      word: String,
      word_list_key: Number
    },
    {
      word: String,
      word_list_key: Number
    }
  ]
}

export type { PhraseObj }
