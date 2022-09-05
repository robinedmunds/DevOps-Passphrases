import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Button from "@mui/material/Button"
import LoopIcon from "@mui/icons-material/Loop"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import type { OptionsObj } from "../interfaces"
import theme from "./theme"

const OptionsBar = (props: {
  wordLists: string[]
  options: OptionsObj
  setOptions: ({ ...OptionsObj }) => void
}) => {
  const SEPARATORS: {
    label: string
    value: string
  }[] = [
    { label: "Space", value: encodeURIComponent(" ") },
    { label: "Full stop", value: encodeURIComponent(".") },
    { label: "Comma", value: encodeURIComponent(",") },
    { label: "Hyphen", value: encodeURIComponent("-") },
    { label: "Underscore", value: encodeURIComponent("_") },
    { label: "Semi colon", value: encodeURIComponent(";") },
    { label: "Hash", value: encodeURIComponent("#") }
  ]

  const NUMBERS: { label: string; value: number }[] = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten"
  ].map((i, idx) => ({ label: i, value: idx + 1 }))

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.name === "select-word-count")
      props.setOptions({ ...props.options, wordCount: event.target.value })
    if (event.target.name === "select-phrase-count")
      props.setOptions({ ...props.options, phraseCount: event.target.value })
    if (event.target.name === "select-wordlist")
      props.setOptions({ ...props.options, wordlist: event.target.value })
    if (event.target.name === "select-separator")
      props.setOptions({ ...props.options, separator: event.target.value })
  }

  const renderNumberMenuItems = (sliceStart: number, sliceEnd: number) =>
    NUMBERS.slice(sliceStart, sliceEnd).map((i) => (
      <MenuItem key={i.value} value={i.value}>
        {i.label}
      </MenuItem>
    ))

  return (
    <Container>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: theme.palette.custom.cardDark,
          p: "2.0rem",
          my: "6.0rem",
          borderRadius: "10px"
        }}
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: "3.0rem", lg: "6.0rem" }}
      >
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="select-wordlist-label">Word list</InputLabel>
          <Select
            id="select-wordlist"
            name="select-wordlist"
            labelId="select-wordlist-label"
            label="Word list"
            value={`${props.options.wordlist}`}
            onChange={handleChange}
          >
            {props.wordLists.map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="select-word-count-label">Word count</InputLabel>
          <Select
            id="select-word-count"
            name="select-word-count"
            labelId="select-word-count-label"
            label="Word count"
            value={`${props.options.wordCount}`}
            onChange={(event: SelectChangeEvent) => {
              handleChange(event)
            }}
          >
            {renderNumberMenuItems(1, 8)}
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="select-separator-label">Separator</InputLabel>
          <Select
            id="select-separator"
            name="select-separator"
            labelId="select-separator-label"
            label="Separator"
            value={props.options.separator}
            onChange={handleChange}
          >
            {SEPARATORS.map((i) => (
              <MenuItem key={i.label} value={i.value}>
                {i.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="select-phrase-count-label">Phrase count</InputLabel>
          <Select
            id="select-phrase-count"
            name="select-phrase-count"
            labelId="select-phrase-count-label"
            label="Phrase count"
            value={`${props.options.phraseCount}`}
            onChange={handleChange}
          >
            {renderNumberMenuItems(0, 10)}
          </Select>
        </FormControl>
        <Button
          onClick={() => {
            props.fetchPhrases()
          }}
          variant="contained"
        >
          <LoopIcon />
        </Button>
      </Stack>
    </Container>
  )
}

export default OptionsBar
