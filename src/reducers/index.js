import {combineReducers} from 'redux'
import todos from './todos';
import visibilityFilter from './visibiltyFilter';
import user from './user';
import asyncReducer from './AsyncReducer';
import {reducer as reduxFormReducer} from 'redux-form';

export default combineReducers({
    todos, visibilityFilter, user,asyncReducer,form:reduxFormReducer
})