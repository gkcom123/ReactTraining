import React from 'react';
import withHighProfile from './HOCDemo';

const data = {age:28};
const DisplayEmployee = props => (
    <div>
        The poistion of employee is {props.position}.
        </div>
);
 const WrappedComponent = withHighProfile(DisplayEmployee,data);
 export default WrappedComponent;