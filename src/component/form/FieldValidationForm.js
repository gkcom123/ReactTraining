import React from 'react';
import {Field,reduxForm} from 'redux-form';
import "./SimpleForm.css";

const required = value => value ? undefined : 'This field is required.';
//
// const required = function(value) {
//     if(value){
//         return undefined
//     }
//     else{
//         return 'This field is required';
//     }
// }

const maxLength = max => value => value && value.length >max ? `Must be ${max} character or less` : undefined;
const maxLength10 = maxLength(10);
const number = value => value && isNaN(Number(value)) ? 'Should be number only': undefined;
const renderField = ({input,label,type,meta:{touched,error}})=>(
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <div className="errorText">{error}</div>))}
        </div>
    </div>
)
const FieldValidationForm = (props) => {
    const {handleSubmit,pristine, reset, submitting} = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field autoComplete="off" name="firstName" label="firstName" component={renderField} type="text" 
            placeholder="First Name" autoComplete="off" validate={[required,maxLength10]}/>
            <Field  autoComplete="off" name="email" component={renderField} type="email"
             placeholder="Email" autoComplete="off" validate={[required]}/>
            <Field name="age" component={renderField} type="number" label="Age" autoComplete="off"
            validate={[required,number]}/>
            <button type="submit" disabled={submitting}>Submit</button>
        </form>
    ) 
}

export default reduxForm({form:'fieldForm'})(FieldValidationForm)