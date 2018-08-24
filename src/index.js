import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import rootReducer from './reducers';
//import reduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

//const store = createStore(rootReducer)
//const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

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