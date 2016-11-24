import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import allReducer from './reducers'

import App from './components/App'
const logger = createLogger()

const store = createStore(
  allReducer,
  applyMiddleware(thunk, logger, promise)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
