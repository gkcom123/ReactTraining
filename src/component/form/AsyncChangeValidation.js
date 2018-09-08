import React from 'react';
import {Field,reduxForm} from 'redux-form';
import validate from './validate';
import asyncValidate from './asyncValidate';


const renderField = ({input,label,type,meta:{touched,error}})=>(
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <div className="errorText">{error}</div>))}
        </div>
    </div>
)
const AsyncChangeValidationForm = (props) => {
    const {handleSubmit,pristine, reset, submitting} = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field autoComplete="off" name="username" label="firstName" component={renderField} type="text" 
            placeholder="First Name" autoComplete="off"/>
            <Field  autoComplete="off" name="password" component={renderField} type="password"
             placeholder="Password" autoComplete="off"/>
            <button type="submit" disabled={submitting}>Submit</button>
        </form>
    ) 
}

export default reduxForm({form:'asyncChangeValidate',
validate,
asyncValidate,
asyncChangeFields:['username']})(AsyncChangeValidationForm)