import Container from "@mui/material/Container"
import Phrase from "./phrase"

const generatePhrases = (phrases: string[]) =>
  phrases.map((phrase) => <Phrase key={phrase} phrase={phrase} />)

const Phrases = (props: { phrases: string[] }) => {
  return <Container>{generatePhrases(props.phrases)}</Container>
}

export default Phrases
