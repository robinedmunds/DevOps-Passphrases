import { useEffect, useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import axios from "axios"
import type { PhraseObj, OptionsObj } from "../interfaces"
import Hero from "../components/hero"
import Phrases from "../components/phrases"
import OptionsBar from "../components/options"
import Error from "../components/error"
import ApiUrl from "../components/apiurl"

const Home: NextPage = () => {
  const buildApiUrl = (options: OptionsObj) =>
    "//docker.local:4444/diceware/?format=json" +
    `&phrase_count=${options.phraseCount}` +
    `&word_count=${options.wordCount}` +
    `&separator=${options.separator}` +
    `&wordlist=${options.wordlist}`

  const [options, setOptions] = useState({
    phraseCount: 5,
    wordCount: 4,
    separator: encodeURIComponent(" "),
    wordlist: "eff_short_wordlist_1.txt"
  })
  const [apiURL, setApiUrl] = useState(buildApiUrl(options))
  const [isLoading, setIsLoading] = useState(true)
  const [apiError, setApiError] = useState(null)
  const [phrases, setPhrases] = useState([])
  const [wordlists, setWordlists] = useState([])

  const fetchPhrases = () => {
    setApiUrl(buildApiUrl(options))

    axios
      .get(apiURL)
      .then((res) => {
        setPhrases(res.data.phrases.phrases.map((o: PhraseObj) => o.phrase))
        setWordlists(res.data.wordlists_available)
      })
      .catch((err) => {
        setApiError(err)
      })
      .then(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchPhrases()
  }, [options, apiURL])

  const renderPhrases = () => {
    if (isLoading) return <p>Loading...</p>
    if (apiError) return <Error error={apiError.message} />
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
      <ApiUrl url={apiURL} />
    </>
  )
}

export default Home
