import React from 'react';
import {Field,reduxForm} from 'redux-form';
import "./SimpleForm.css";
import {SubmissionError} from 'redux-form';
const sleep = ms => new Promise(resolve=> setTimeout(resolve,ms));

function submit(values){
    return sleep(1000).then(() =>{
        if(['Ram','shyam'].includes(values.username)){
            throw new SubmissionError({username: 'This user is already taken',_error:'Login failed'});
        }
        else if(values.password !=='abcd'){
            throw new SubmissionError({password: 'Password is wrong',_error:'Login failed'});
        }
        else{
            window.alert('Logged-in Successfully')
        }
            
    })
}
const renderField = ({input,label,type,meta:{touched,error}})=>(
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <div className="errorText">{error}</div>))}
        </div>
    </div>
)
const SubmitValidation = (props) => {
    const {error,handleSubmit,pristine, reset, submitting} = props;
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Field autoComplete="off" name="username" label="firstName" component={renderField} type="text" 
            placeholder="username" autoComplete="off"/>
            <Field  autoComplete="off" name="password" component={renderField} type="password"
             placeholder="Password" autoComplete="off"/>
             {error && <strong> {error}</strong>}
            <button type="submit" disabled={submitting}>Submit</button>
        </form>
    ) 
}

export default reduxForm({form:'submitForm'})(SubmitValidation)