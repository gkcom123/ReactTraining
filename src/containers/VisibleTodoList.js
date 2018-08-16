import {connect} from 'react-redux'
import TodoList from '../component/TodoList'
import {toggleTodo} from '../actions'
import {VisibilityFilter} from '../actions'

const getVisibleTodos = (todos) => {
    // switch(filter) {
    //     case VisibilityFilter.SHOW_ALL:
    //         return todos;
    // }
    return todos
}
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos)
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