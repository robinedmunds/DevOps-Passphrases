import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"

class ReduxFormExample extends Component {
  onSubmitHandler = formProps => {
    console.log(`reduxFormExample submit:  ${JSON.stringify(formProps)}`)
  }

  renderInput = ({ input, label, meta }) => <input {...input} type="text" />

  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="contact-form__error">{error}</div>
    }
    return null
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmitHandler)}>
          <Field
            name="reduxFormField"
            label="reduxFormField"
            placeholder="reduxFormField"
            component={this.renderInput}
          />
          <button>form submit</button>
        </form>
      </div>
    )
  }
}

const validate = formValues => {
  // error validation goes here
  const errors = {}
  return errors
}

export default connect(
  null, // map state to props
  {} // action
)(reduxForm({ form: "reduxFormExample", validate })(ReduxFormExample))
