import store from '../store'
import { error, success } from './notification'

const {
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails
} = AWS.CognitoIdentityServiceProvider


// TODO:
// need to rework methods from these examples:
// http://goo.gl/Y8XatZ

/* global prompt */

export let cognitoUser = null

AWS.config.region = process.env.AWS_REGION

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
  cognitoUser = null
  store.dispatch({type: 'user/user', user: cognitoUser})
}

// authenticate user, and also ask for MFA or verification code, if needed
export function login (Username, Password) {
  return new Promise((resolve, reject) => {
    var userData = {
        Username : 'username',
        Pool : userPool
    };
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
    cognitoUser.authenticateUser({Username, Password}, {
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            resolve(result);

            // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            //     IdentityPoolId : '...' // your identity pool id here
            //     Logins : {
            //         // Change the key below according to the specific region your user pool is in.
            //         'cognito-idp.us-east-1.amazonaws.com/us-east-1_TcoKGbf7n' : result.getIdToken().getJwtToken()
            //     }
            // });
        },
        onFailure: reject
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
