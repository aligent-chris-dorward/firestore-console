/**
 * Firestore Console
 *
 * @category    listingslab
 * @package     firestore-console
 * @repo        https://github.com/listingslab/firestore-console
 * @author      Chris Dorward <listingslab@gmail.com>
 * @license     OSL-3.0
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import { version } from '../package.json'
import { env } from './config'
import './styles/core.scss'

window.version = version;
window.env = env;

const initialState = window.___INITIAL_STATE__ || {
  firebase: { authError: null }
}
const store = createStore(initialState)
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./containers/App').default;
  const routes = require('./routes/index').default(store);
  ReactDOM.render(<App store={store} routes={routes} />, MOUNT_NODE);
}

if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = error => {
      const RedBox = require('redbox-react').default;
      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };
    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e);
        renderError(e)
      }
    };
    module.hot.accept(['./containers/App', './routes/index'], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render()
      })
    )
  }
}
if (!__TEST__) render();


// eslint-disable-line no-console
