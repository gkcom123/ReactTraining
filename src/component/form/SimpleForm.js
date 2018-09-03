import React from 'react';
import {Field,reduxForm} from 'redux-form';
import "./SimpleForm.css";


const SimpleForm = props => {
    const {handleSubmit,pristine, reset, submitting} = props;
    // var handleSubmit = props.handleSubmit;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <div>
                    <Field name="firstName" component="input" type="text" placeholder="First Name" autoComplete="off"/>
                </div>
                <button className="buttonStyle" type="submit" disabled={pristine} >Submit</button>
            </div>
        </form>
    )
}

export default reduxForm({form:'simpleForm',})(SimpleForm);