const sleep = ms => new Promise(resolve=> setTimeout(resolve,ms));
const asyncValidate = (values,dispatch) => {
   // dispatch(type:'USER_SERVICE',values);
    return sleep(1000).then(() =>{
        if(['Ram','shyam'].includes(values.username)){
            throw {username: 'This user is already taken'};
        }
    })
}

export default asyncValidate;