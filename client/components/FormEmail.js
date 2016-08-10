import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

export const fields = [ 'email' ]

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!emailRegex.test(values.email)) {
    errors.email = 'Email is invalid.'
  }
  return errors
}

class FormEmail extends Component {
  render () {
    const { fields: { email }, handleSubmit, submitting } = this.props
    const disabled = submitting ||
      !email.touched ||
      email.error
    return (
      <form onSubmit={handleSubmit}>
        <div className='control'>
          <label className='label' htmlFor='email'>email</label>
          <div className='control' >
            <input id='email' className='input' type='text' placeholder='email' {...email} />
            {email.touched && email.error && <div className='help is-danger'>{email.error}</div>}
          </div>
        </div>
        <div className='control'>
          <button className={'button is-primary' + (submitting ? ' is-loading' : '')} type='submit' disabled={disabled}>
            send
          </button>
        </div>
      </form>
    )
  }
}

FormEmail.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'resend',
  fields,
  validate
})(FormEmail)
