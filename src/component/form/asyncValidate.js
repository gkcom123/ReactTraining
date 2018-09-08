import axios from 'axios';
const sleep = ms => new Promise(resolve=> setTimeout(resolve,ms));


const asyncValidate = (values,dispatch) => {
   //dispatch(type:'USER_SERVICE',values);
    // return sleep(1000).then(() =>{
    //     if(['Ram','shyam'].includes(values.username)){
    //         throw {username: 'This user is already taken'};
    //     }
    // })

    // return axios.get(`http://localhost:5000/api/checkUser/${values.username}`).then((response)=>{
    //     if(response.data.status === 'success'){
    //         throw {username: 'This user is already taken'}; 
    //     }
    // })
    
    return fetch(`http://localhost:5000/api/checkUser/${values.username}`)
            .then(res => res.json())
            .then(
                (result) =>{
                    if(result.status === 'success'){
                        throw {username: 'This user is already taken'}; 
                     }
                },
                (error) => {
                    throw {username: 'This user is already taken'};
                    console.log('Error is',error);
                }
            )
}

export default asyncValidate;