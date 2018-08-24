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

export function fetchUserInPromise() {
  // this is a promise returned , axios get api returns a promise
  const request = axios.get('http://jsonplaceholder.typicode.com/users');
  //this will be called only when promise gets resolved
    return {
      type:'FETCH_PROFILES',
      payload: request
    }
    
   
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
/* for Action */
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.asyncReducer.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}
