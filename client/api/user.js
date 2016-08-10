import store from '../store'
import { AWSCognito, CognitoUser, CognitoUserPool, CognitoUserAttribute, AuthenticationDetails } from './aws'
import { error, success } from './notification'

// TODO:
// need to rework methods from these examples:
// http://docs.aws.amazon.com/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html

/* global prompt */

export let cognitoUser = null

AWSCognito.config.region = process.env.AWS_REGION

const userPool = new CognitoUserPool({
  UserPoolId: process.env.AWS_IDENTITYPOOL,
  ClientId: process.env.AWS_CLIENTAPP
})

// register a new user
export function register (userData) {
  const attributeList = []
  const {username, password, ...user} = userData
  for (let field in user) {
    attributeList.push(new CognitoUserAttribute({ Name: field, Value: user[field] }))
  }
  return new Promise((resolve, reject) => {
    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) return reject(err)
      cognitoUser = result.user
      store.dispatch({type: 'user/user', user: cognitoUser})
      resolve(result.user)
    })
  })
}

export function logout () {
  cognitoUser.signOut()
  store.dispatch({type: 'user/user', user: cognitoUser})
}

export function login (Username, Password) {
  cognitoUser = new CognitoUser({ Username, Password })
  cognitoUser.authenticateUser(AuthenticationDetails({ Username, Password }), {
    onSuccess: function (result) {
      store.dispatch({type: 'user/user', user: cognitoUser})
      success('Authentication successful!')
    },
    onFailure: function (err) {
      error(err)
    },
    mfaRequired: function (codeDeliveryDetails) {
      cognitoUser.sendMFACode(prompt('Please input verification code:'), this)
    }
  })
}

export function resend () {
  return new Promise((resolve, reject) => {
    cognitoUser.resendConfirmationCode((err, code) => {
      if (err) return reject(err)
      resolve(code)
    })
  })
}

export function reducer (state = {user: false}, action) {
  let newState
  switch (action.type) {
    // trigger when user is changed
    case 'user/user':
      newState = Object.assign({}, state)
      newState.user = action.user
      return newState
    default:
      return state
  }
}
