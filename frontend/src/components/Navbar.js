import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "#1b4163",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Typography variant="h6" className={classes.title}>
          Passphrase Generator
        </Typography>
        <Button href="/" color="inherit">
          Link
        </Button>
        <Button href="/" color="inherit">
          Link
        </Button>
        <Button href="/" color="inherit">
          Link
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
