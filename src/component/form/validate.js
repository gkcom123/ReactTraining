const validate = values => {
    const errors={};
    if(!values.username){
        errors.username = 'User Name is Required';
    }
    
    if(!values.password){
        errors.password = 'Password is Required';
    }
    console.log('validation call',errors);
    return errors;
}
export default validate;