import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

export const fields = [ 'username', 'password' ]

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Username is required.'
  }
  if (!values.password) {
    errors.password = 'Password is required.'
  }
  return errors
}

class FormLogin extends Component {
  render () {
    const { fields: { username, password }, handleSubmit, submitting } = this.props
    const disabled = submitting ||
      !username.value ||
      !password.value
    return (
      <form onSubmit={handleSubmit}>
        <div className='control'>
          <label className='label' htmlFor='username'>username</label>
          <div className='control' >
            <input id='username' className='input is-large' type='text' placeholder='username' {...username} />
            {username.touched && username.error && <div className='help is-danger'>{username.error}</div>}
          </div>
        </div>
        <div className='control'>
          <label htmlFor='password' className='label'>password</label>
          <div className='control'>
            <input id='password' className='input is-large' type='password' placeholder='password' {...password} />
            {password.touched && password.error && <div className='help is-danger'>{password.error}</div>}
          </div>
        </div>
        <div className='control'>
          <button className={'button is-primary is-large' + (submitting ? ' is-loading' : '')} type='submit' disabled={disabled}>
            login
          </button>
        </div>
      </form>
    )
  }
}

FormLogin.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'login',
  fields,
  validate
})(FormLogin)
