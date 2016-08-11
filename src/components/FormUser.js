import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

export const fields = ['username', 'email', 'password', 'password2']

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Username is required.'
  }
  if (!values.email) {
    errors.email = 'Email is required.'
  }
  if (!emailRegex.test(values.email)) {
    errors.email = 'Email is invalid.'
  }
  if (!values.password) {
    errors.password = 'Password is required.'
  }
  if (!values.password2 || values.password2 !== values.password) {
    errors.password2 = 'Passwords should match.'
  }
  return errors
}

class FormUser extends Component {
  render () {
    Object.keys(this.props.fields).forEach(f => {
      if (this.props.submiterrors[f]) {
        this.props.fields[f].error = this.props.submiterrors[f]
      }
    })
    const { fields: { username, email, password, password2 }, type, invalid, pristine, handleSubmit, submitting } = this.props
    const disabled = submitting || pristine || invalid
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
          <label className='label' htmlFor='email'>email</label>
          <div className='control has-icon' >
            <input id='email' className='input is-large' type='email' placeholder='email' {...email} />
            {email.touched && email.error && <div className='help is-danger'>{email.error}</div>}
            <i className='fa fa-envelope' aria-hidden='true'></i>
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
          <label htmlFor='password2' className='label'>password (again)</label>
          <div className='control'>
            <input id='password2' className='input is-large' type='password' placeholder='password' {...password2} />
            {password2.touched && password2.error && <div className='help is-danger'>{password2.error}</div>}
          </div>
        </div>

        <div className='control'>
          <button className={'button is-primary is-large' + (submitting ? ' is-loading' : '')} type='submit' disabled={disabled}>
            {type || 'save'}
          </button>
        </div>
      </form>
    )
  }
}

FormUser.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'login',
  fields,
  validate
})(FormUser)
