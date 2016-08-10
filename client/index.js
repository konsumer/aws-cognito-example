import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import App from './pages/App'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'

import store from './store'

// this keeps HMR happy (instead of using JSX)
const routes = {
  path: '/',
  component: App,
  indexRoute: Home.route,
  childRoutes: [
    Register,
    Login,
    PageNotFound
  ].map(r => r.route)
}

const Routing = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
)

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<Routing />, document.getElementById('root'))
