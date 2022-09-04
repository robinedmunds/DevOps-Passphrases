import { useState } from "react"
import { Box } from "@mui/material"
import { CopyToClipboard } from "react-copy-to-clipboard"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import Snackbar from "./snackbar"

const Phrase = (props: { phrase: string }) => {
  const [copied, setIsCopied] = useState(false)

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "2.0rem 0 2.0rem",
          backgroundColor: "#eee",
          textAlign: "center",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#ddd"
          }
        }}>
        <Box
          sx={{
            padding: "0 2.2rem"
          }}>
          {props.phrase.length} chars
        </Box>
        <Box
          sx={{
            fontSize: "2.0rem",
            padding: "1.6rem 0"
          }}>
          {props.phrase}
        </Box>
        <Box
          sx={{
            padding: "0 2.2rem"
          }}>
          <CopyToClipboard
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "red"
              }
            }}
            text={props.phrase}
            onCopy={() => {
              setIsCopied(true)
            }}>
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

