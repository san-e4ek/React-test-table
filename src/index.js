import React from 'react'
import {render} from 'react-dom'
import App from './App'
import './index.scss'
import {Provider} from 'react-redux'
import configurationStore from './redux'

const store = configurationStore;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)