import { useEffect, useState, useLayoutEffect, useRef } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import axios from "axios"
import type { AxiosError } from "axios"
import type { PhraseObj, OptionsObj } from "../interfaces"
import Hero from "../components/hero"
import Phrases from "../components/phrases"
import OptionsBar from "../components/options"
import Error from "../components/error"
import ApiUrl from "../components/apiurl"
import { getApiBaseUrl } from "../config"

const Home: NextPage = () => {
  const buildApiUrl = (options: OptionsObj) =>
    `${getApiBaseUrl()}` +
    `?phrase_count=${options.phraseCount}` +
    `&word_count=${options.wordCount}` +
    `&separator=${options.separator}` +
    `&wordlist=${options.wordlist}`

  const [options, setOptions] = useState({
    phraseCount: 5,
    wordCount: 4,
    separator: encodeURIComponent(" "),
    wordlist: "eff_short_wordlist_1.txt"
  })
  const apiURL = useRef(buildApiUrl(options))
  const [isLoading, setIsLoading] = useState(true)
  const [apiError, setApiError] = useState(null)
  const [phrases, setPhrases] = useState([])
  const [wordlists, setWordlists] = useState([])

  const fetchPhrases = () => {
    apiURL.current = buildApiUrl(options)
    setIsLoading(true)

    axios
      .get(apiURL.current)
      .then((res) => {
        setPhrases(res.data.phrases.phrases.map((o: PhraseObj) => o.phrase))
        setWordlists(res.data.wordlists_available)
      })
      .catch((err: AxiosError) => {
        setApiError(err)
      })
      .then(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchPhrases()
  }, [
    options.phraseCount,
    options.separator,
    options.wordCount,
    options.wordlist
  ])

  const renderPhrases = () => {
    if (isLoading) return <p>Loading...</p>
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
        wordLists={wordlists}
        options={options}
        setOptions={setOptions}
        fetchPhrases={fetchPhrases}
      />
      {renderPhrases()}
      <ApiUrl url={apiURL.current} />
    </>
  )
}

export default Home
