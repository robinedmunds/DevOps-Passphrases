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

      <p
        css={css(`
          font-size: 2rem;
          color: red;
        `)}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam repellendus quidem nihil labore incidunt obcaecati aperiam delectus illum molestiae tempora. Minima nisi numquam maiores incidunt esse quidem optio dolores debitis.
      </p>
    </div>
  )
}

export default Phrases
