import {combineReducers} from 'redux'
import todos from './todos';
import visibilityFilter from './visibiltyFilter';
import user from './user';
export default combineReducers({
    todos, visibilityFilter, user
})