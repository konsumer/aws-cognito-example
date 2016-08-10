import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

export const fields = ['password', 'password2']

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Password is required.'
  }
  if (!values.password2 || values.password2 !== values.password) {
    errors.password2 = 'Passwords should match.'
  }
  return errors
}

class FormPassword extends Component {
  render () {
    const { fields: { password, password2 }, invalid, pristine, handleSubmit, submitting } = this.props
    const disabled = submitting || pristine || invalid
    return (
      <form onSubmit={handleSubmit}>
        <div className='control'>
          <label htmlFor='password' className='label'>password</label>
          <div className='control'>
            <input id='password' className='input is-large' type='password' placeholder='password' {...password} />
            {password.touched && password.error && <div className='help is-danger'>{password.error}</div>}
          </div>
        </div>
        <div className='control'>
          <label htmlFor='password2' className='label'>password (again)</label>
          <div className='control'>
            <input id='password2' className='input is-large' type='password' placeholder='password' {...password2} />
            {password2.touched && password2.error && <div className='help is-danger'>{password2.error}</div>}
          </div>
        </div>
        <div className='control'>
          <button className={'button is-primary' + (submitting ? ' is-loading' : '')} type='submit' disabled={disabled}>
            update
          </button>
        </div>
      </form>
    )
  }
}

FormPassword.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'password',
  fields,
  validate
})(FormPassword)
