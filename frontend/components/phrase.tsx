import { useState } from "react"
import { Box } from "@mui/material"
import { CopyToClipboard } from "react-copy-to-clipboard"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import Snackbar from "./snackbar"
import theme from "./theme"

const Phrase = (props: { phrase: string }) => {
  const [copied, setIsCopied] = useState(false)

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "2.0rem 0",
          backgroundColor: theme.palette.custom.cardLight.main,
          textAlign: "center",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: theme.palette.custom.cardLight.dark
          }
        }}
      >
        <Box
          sx={{
            padding: "0 2.2rem",
            color: theme.palette.secondary.main
          }}
        >
          {props.phrase.length} chars
        </Box>
        <Box
          sx={{
            fontSize: "2.0rem",
            fontWeight: 500,
            color: theme.palette.primary.main,
            padding: "1.6rem 0"
          }}
        >
          {props.phrase}
        </Box>
        <Box
          sx={{
            padding: "0 2.2rem",
            color: theme.palette.secondary.main
          }}
        >
          <CopyToClipboard
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.secondary.light
              }
            }}
            text={props.phrase}
            onCopy={() => {
              setIsCopied(true)
            }}
          >
            <ContentCopyIcon />
          </CopyToClipboard>
        </Box>
      </Box>
      <Snackbar
        message="Copied to clipboard"
        isOpen={copied}
        setIsOpen={setIsCopied}
      />
    </>
  )
}

export default Phrase
