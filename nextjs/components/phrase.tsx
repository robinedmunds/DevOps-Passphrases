import { useState } from "react"
import { Box } from "@mui/material"
import { CopyToClipboard } from "react-copy-to-clipboard"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

const Phrase = (props: { phrase: String }) => {
  const [ copied, setIsCopied ] = useState(false)

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "2.0rem 0 2.0rem",
        backgroundColor: "#eee",
      }}
    >
      <Box
        sx={{
          padding: "0 2.2rem"
        }}
      >
        {props.phrase.length} chars
      </Box>
      <Box
        sx={{
          fontSize: "2.0rem",
          padding: "1.6rem 0"
        }}
      >
        { props.phrase }
      </Box>
      <Box
        sx={{
          padding: "0 2.2rem"
        }}
      >
        <CopyToClipboard text={props.phrase}
          onCopy={() => {
            setIsCopied(true)
            console.log("phrase copied")
          }}
          >
          <ContentCopyIcon />
        </CopyToClipboard>
      </Box>
    </Box>
  )
}

export default Phrase
