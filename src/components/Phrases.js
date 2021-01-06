import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "4rem",
  },
  block: {
    display: "flex",
    justifyContent: "space-between",
    background: "#f3f4f6",
    padding: "2rem",
    margin: "1.6rem",
    borderRadius: "15px",
    fontSize: "1.4rem",
  },
  chars: {
    color: "#032f57",
  },
  phrase: {
    color: "#5a612f",
    fontSize: "1.8rem",
  },
})

const Phrases = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Box className={classes.block}>
        <Box className={classes.chars}>21 chars</Box>
        <Box className={classes.phrase}>visa musky dean both</Box>
        <Box>copy</Box>
      </Box>
      <Box className={classes.block}>
        <Box className={classes.chars}>21 chars</Box>
        <Box className={classes.phrase}>visa musky dean both</Box>
        <Box>copy</Box>
      </Box>
      <Box className={classes.block}>
        <Box className={classes.chars}>21 chars</Box>
        <Box className={classes.phrase}>visa musky dean both</Box>
        <Box>copy</Box>
      </Box>
    </Container>
  )
}

export default Phrases
