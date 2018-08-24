import {combineReducers} from 'redux'
import todos from './todos';
import visibilityFilter from './visibiltyFilter';
import user from './user';
import asyncReducer from './AsyncReducer';

export default combineReducers({
    todos, visibilityFilter, user,asyncReducer
})