const users = (state = [] , action) =>{
    switch (action.type) {
        case 'FETCH_PROFILES':
            return action.payload.data || state
        default: 
            return state
    }
}
export default users