import { useEffect, useReducer } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import axios from "axios"
import type { OptionsObj } from "../interfaces"
import Hero from "../components/hero"
import Phrases from "../components/phrases"
import OptionsBar from "../components/options"
import Error from "../components/error"
import ApiUrl from "../components/apiurl"
import { getApiBaseUrl } from "../config"
import reducer from "../state/reducer"

const buildApiUrl = (options: OptionsObj) =>
  `${getApiBaseUrl()}` +
  `?phrase_count=${options.phraseCount}` +
  `&word_count=${options.wordCount}` +
  `&separator=${options.separator}` +
  `&wordlist=${options.wordlist}`

const defaultOptions = {
  phraseCount: 5,
  wordCount: 4,
  separator: encodeURIComponent(" "),
  wordlist: "eff_short_wordlist_1.txt"
}

const initialState = {
  options: defaultOptions,
  apiURL: buildApiUrl(defaultOptions),
  isLoading: true,
  apiError: null,
  phrases: [],
  wordlists: []
}

const Home: NextPage = () => {
  const [state, fetch] = useReducer(reducer, initialState)

  const fetchPhrases = () => {
    fetch({ type: "SET_API_URL", payload: buildApiUrl(state.options) })
    fetch({ type: "SET_LOADING", payload: true })
    axios
      .get(state.apiURL)
      .then((res) => {
        fetch({ type: "API_FETCH", payload: res.data })
      })
      .catch((err) => {
        fetch({ type: "API_ERROR", payload: err })
      })
      .then(() => {
        fetch({ type: "SET_LOADING", payload: false })
      })

    console.log(state)
  }

  useEffect(() => {
    fetchPhrases()
  }, [
    state.options.phraseCount,
    state.options.separator,
    state.options.wordCount,
    state.options.wordlist
  ])

  const renderPhrases = () => {
    const tempPhrases = () => {
      const phrases = []
      for (let i = 0; i < state.options.phraseCount; i++) {
        phrases.push("loading")
      }
      return phrases
    }

    if (state.isLoading) return <Phrases phrases={tempPhrases()} />
    if (state.apiError) return <Error error={state.apiError["message"]} />
    return <Phrases phrases={state.phrases} />
  }

  return (
    <>
      <Head>
        <title>Passphrase generator</title>
        <meta
          name="description"
          content="Generate strong, memorable and easy-to-type passphrases."
        />
      </Head>

      <Hero />
      <OptionsBar
        wordLists={state.wordlists || []}
        options={state.options}
        fetch={fetch}
        fetchPhrases={fetchPhrases}
      />
      {renderPhrases()}
      <ApiUrl url={state.apiURL} />
    </>
  )
}

export default Home
