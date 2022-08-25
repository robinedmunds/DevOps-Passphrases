import { css } from "@emotion/react"
import Phrase from "./phrase"

const generatePhrases = (phrases) => (
  phrases.map(phrase => <Phrase key={phrase} phrase={phrase} />)
)

const Phrases = ({ phrases }) => {
  return (
    <div
      css={css(`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `)}>

      {generatePhrases(phrases)}

    </div>
  )
}

export default Phrases
