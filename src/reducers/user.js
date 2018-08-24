const users = (state = [] , action) =>{
    switch (action.type) {
        case 'FETCH_PROFILES':
            console.log(action);
            const apiResposne = {data: action.payload.data, apiStatus: action.payload.statusText};
            return apiResposne || state
        default: 
            return state
    }
}
export default users