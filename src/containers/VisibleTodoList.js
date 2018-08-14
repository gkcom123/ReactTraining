import {connect} from 'react-redux'
import TodoList from '../component/TodoList'

const getVisibleTodos = (todos) => {
    return todos
}
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos)
})
export default connect (mapStateToProps)(TodoList)