import {connect} from 'react-redux'
import TodoList from '../component/TodoList'
import {toggleTodo} from '../actions'
import {VisibilityFilter} from '../actions'

const getVisibleTodos = (todos,filter) => {
    switch(filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos;
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(t=>t.completed);
            //similar syntax in java script 
            //todos.filter(function(t){
            //     return t.completed;
            // })
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(t=>!t.completed);
        default:
            throw new Error('Invalid filter-' + filter);
    }
    return todos
}
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
})
//plain javascript
// function mapDispatchToProps(dispatch){
//     return function toggleTodo(id) {
//         return dispatch(toggleTodo(id))
//     }
// }
//ES6
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)