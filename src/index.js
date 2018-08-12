import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import Counter from './component/reduxDemo/CounterDemo'
import counter from './reducers/CounterReducer';

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>
  ,
  rootEl
)

render()
//store.subscribe(render)