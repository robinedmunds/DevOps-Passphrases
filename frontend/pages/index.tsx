import { useEffect, useState, useRef, useReducer } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import axios from "axios"
import type { PhraseObj, OptionsObj } from "../interfaces"
import Hero from "../components/hero"
import Phrases from "../components/phrases"
import OptionsBar from "../components/options"
import Error from "../components/error"
import ApiUrl from "../components/apiurl"
import { getApiBaseUrl } from "../config"
import reducer from "../hooks/usePhrases"

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
  // const [options, setOptions] = useState({
  //   phraseCount: 5,
  //   wordCount: 4,
  //   separator: encodeURIComponent(" "),
  //   wordlist: "eff_short_wordlist_1.txt"
  // })
  // const apiURL = useRef(buildApiUrl(options))
  // const [isLoading, setIsLoading] = useState(true)
  // const [apiError, setApiError] = useState(null)
  // const [phrases, setPhrases] = useState([])
  // const [wordlists, setWordlists] = useState([])

  // const fetchPhrases = () => {
  //   setApiError(null)
  //   setIsLoading(true)
  //   apiURL.current = buildApiUrl(options)

  //   axios
  //     .get(apiURL.current)
  //     .then((res) => {
  //       setPhrases(res.data.phrases.phrases.map((o: PhraseObj) => o.phrase))
  //       setWordlists(res.data.wordlists_available)
  //     })
  //     .catch((err) => {
  //       setApiError(err)
  //     })
  //     .then(() => {
  //       setIsLoading(false)
  //     })
  // }

  useEffect(() => {
    console.log("-------- useEffect runs")
  }, [
    state.options.phraseCount,
    state.options.separator,
    state.options.wordCount,
    state.options.wordlist
  ])

  const renderPhrases = () => {
    const tempPhrases = () => {
      const phrases = []
      for (let i = 0; i < options.phraseCount; i++) {
        phrases.push("loading")
      }
      return phrases
    }

    if (isLoading) return <Phrases phrases={tempPhrases()} />
    if (apiError) return <Error error={apiError["message"]} />
    return <Phrases phrases={phrases} />
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
        wordLists={["eff_short_wordlist_1.txt"]}
        options={state.options}
        fetch={fetch}
        // setOptions={setOptions}
        // fetchPhrases={fetchPhrases}
      />
      {/* {renderPhrases()} */}
      {/* <ApiUrl url={apiURL.current} /> */}
    </>
  )
}

export default Home
