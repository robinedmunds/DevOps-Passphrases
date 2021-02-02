import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
// styles
import { makeStyles } from "@material-ui/core/styles"
// drop down
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const Dropdowns = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      background: "#f3f4f6",
      // border: 0,
      borderRadius: 15,
      // height: 48,
      padding: "2rem",
      display: "flex",
      justifyContent: "space-between",
    },
    formBox: {
      borderRadius: 10,
      background: "white",
      padding: "1rem",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "10rem",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }))

  const classes = useStyles()
  const [age, setAge] = React.useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Box className={classes.formBox}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="id-words-count">
            No. of words
          </InputLabel>
          <Select
            labelId="did-words-count"
            id="id-words-count"
            value={age}
            onChange={handleChange}
            // displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={50}>Fifty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.formBox}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="id-separator">
            Separating character
          </InputLabel>
          <Select
            labelId="id-separator"
            id="id-separator"
            value={age}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={" "}>[space]</MenuItem>
            <MenuItem value={"-"}>-</MenuItem>
            <MenuItem value={"#"}>#</MenuItem>
            <MenuItem value={"_"}>_</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.formBox}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="id-wordlist">
            Word list
          </InputLabel>
          <Select
            labelId="id-wordlist"
            id="id-wordlist"
            value={age}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={"adfadsfadf"}>adfadsfadf</MenuItem>
            <MenuItem value={"afgadfgafgadgf"}>afgadfgafgadgf</MenuItem>
          </Select>
          {/* <FormHelperText>Label + placeholder</FormHelperText> */}
        </FormControl>
      </Box>
    </Container>
  )
}

export default Dropdowns
