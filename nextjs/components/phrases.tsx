import { css } from "@emotion/react"
import Phrase from "./phrase"

const generatePhrases = (phrases: string[]) => (
  phrases.map(phrase => <Phrase key={phrase} phrase={phrase} />)
)

const Phrases = (props: { phrases: string[] }) => {
  return (
    <div
      css={css(`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `)}>

      {generatePhrases(props.phrases)}

    </div>
  )
}

export default Phrases
