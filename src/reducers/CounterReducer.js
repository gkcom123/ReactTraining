export default (state=0, action) => {
    console.log('in reducer',state,action);
    switch(action.type) {
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state
    }
}