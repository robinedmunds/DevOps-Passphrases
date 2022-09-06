import { forwardRef } from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const snackbar = (props: {
  message: string
  isOpen: boolean
  setIsOpen: any
}) => {
  return (
    <Snackbar
      open={props.isOpen}
      autoHideDuration={3000}
      onClose={() => {
        props.setIsOpen(false)
      }}
    >
      <Alert
        onClose={() => {
          props.setIsOpen(false)
        }}
        severity="info"
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default snackbar
