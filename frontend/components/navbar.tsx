import NextLink from "next/link"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NextLink href={"/"}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              Passphrase generator
            </Typography>
          </NextLink>
          <NextLink href={"/about"}>
            <Button color="inherit">About</Button>
          </NextLink>
          <Button
            color="inherit"
            href="https://github.com/robinedmunds/DevOps-Passphrases"
            target="_blank"
          >
            GitHub
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
