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
                <div>
                    <label>
                        <Field name="Gender" component="input" type="radio" value="Male"/>
                        {' '} Male
                    </label> 
                    <label>
                        <Field name="Gender" component="input" type="radio" value="Female"/>
                        {' '} Female
                    </label> 
                    
                </div>
                <div>
                    <Field name="College" component="select">
                        <option></option>
                        <option value="col1">College1</option>
                        <option value="col2">College2</option>
                        <option value="col3">College3</option>
                    </Field>
                </div>
                <div>
                    <label>Employed</label>
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                </div>
                <button className="buttonStyle" type="submit" disabled={pristine} >Submit</button>
            </div>
        </form>
    )
}

export default reduxForm({form:'simpleForm',})(SimpleForm);