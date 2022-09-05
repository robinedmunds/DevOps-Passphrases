import Box from "@mui/material/Box"
import Link from "@mui/material/Link"

const ApiUrl = (props: { url: string }) => {
  return (
    <Box
      sx={{
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 0
        }
      }}
    >
      <h3>API URL</h3>
      <Link href={props.url} target="_blank">
        {props.url}
      </Link>
    </Box>
  )
}

export default ApiUrl
