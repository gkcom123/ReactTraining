import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  rootEl
)

render()
//store.subscribe(render)