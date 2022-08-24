import { Box } from '@mui/material'

const Phrases = ({ phrase }) => {
  return (
    <Box
      sx={{
        margin: "2rem",
        width: 640,
        height: 120,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >{phrase}</Box>
  )
}

export default Phrases
