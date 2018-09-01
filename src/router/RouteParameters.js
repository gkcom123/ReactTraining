import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const ParamExamples = () => (
    <Router>
        <div>
            <h2>User Accounts</h2>
            <ul>
            <li>
                    <Link to="/user1">User1</Link>
                </li>
                <li>
                    <Link to="/hjgsdhdgjhsdgjfhgds">User2</Link>
                </li>
                <li>
                    <Link to="/jdghsdfhjgdfsjhgfdj">User3</Link>
                </li>
                <li>
                    <Link to="/jdhsjsd-hjkfsh">User4</Link>
                </li>
            </ul>
            <Route path="/:name" component={UserComponent} />
        </div>
    </Router>
);
const UserComponent = ({match}) => { 
    console.log(match.params);
    return (
    <div>
        <h2>User Details</h2>
        <h3>ID: {match.params.name}</h3>
    </div>
)}
export default ParamExamples;