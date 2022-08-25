import { Box } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const Phrase = ({ phrase }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "2.0rem 0 2.0rem",
        backgroundColor: "#eee",
        // columnGap: "4.0rem"
      }}
    >
      <Box
        sx={{
          padding: "0 2.2rem"
        }}
      >
        21 chars
      </Box>
      <Box
        sx={{
          fontSize: "2.0rem",
          padding: "1.6rem 0"
        }}
      >
        { phrase }
      </Box>
      <Box
        sx={{
          padding: "0 2.2rem"
        }}
      >
        <ContentCopyIcon />
      </Box>
    </Box>
  )
}

export default Phrase
