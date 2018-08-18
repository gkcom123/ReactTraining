import {combineReducers} from 'redux'
import todos from './todos';
import visibilityFilter from './visibiltyFilter';

export default combineReducers({
    todos, visibilityFilter
})