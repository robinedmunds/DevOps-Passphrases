import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Hero = () => {
  return (
    <Box
      sx={{
        m: "6.0rem"
      }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{ backgroundColor: "lightgreen" }}
      >
        Generate strong, memorable and easy-to-type passphrases.
      </Typography>
    </Box>
  )
}

export default Hero
