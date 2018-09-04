import React from 'react';
import {Field,reduxForm} from 'redux-form';
const validate = values => {
    const errors={};
    if(!values.firstName){
        errors.firstName = 'First Name is Required';
    }
    else if(values.firstName.length >20){
        errors.firstName = "Should be less than 20 character";
    }
    if(!values.email){
        errors.email = 'Email is Required';
    }
    if(!values.age){
        errors.age = 'Age is Required';
    }
    else if(Number(values.age)>19){
        errors.age = 'Age should be less than 19 yrs';
    }
    return errors;
}
const renderField = ({input,label,type,meta:{touched,error}})=>(
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <span>{error}</span>))}
        </div>
    </div>
)
const SyncValidationForm = (props) => {
    const {handleSubmit,pristine, reset, submitting} = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field name="firstName" label="firstName" component={renderField} type="text" placeholder="First Name" autoComplete="off"/>
            <Field name="email" component={renderField} type="email" placeholder="Email" autoComplete="off"/>
            <Field name="age" component={renderField} type="number" label="Age" autoComplete="off"/>
            <button type="submit" disabled={submitting}>Submit</button>
        </form>
    ) 
}

export default reduxForm({form:'syncForm',validate,})(SyncValidationForm);