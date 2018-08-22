import axios from 'axios';
let nextTodoId = 0
// any service call should happen here

export function fetchUsers() {
    const request = axios.get('http://jsonplaceholder.typicode.com/users');

    return (dispatch) => {
        request.then((data) => {
            console.log(data);
            dispatch({type:'FETCH_PROFILES', payload:data})
        });
    };
}

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
//
// export const callGetAPI= () => {
//     return {
//         type:'FETCH_GET_REQUEST'
//     }
// }
export const toggleTodo = id =>{ 
    return {
    type: 'TOGGLE_TODO',
    id
}}

export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}