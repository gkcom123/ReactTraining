import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const AmbigousMatch = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/about">About us (static)</Link>
                </li>
                <li>
                    <Link to="/company">Company (static) </Link>
                </li>
                <li>
                    <Link to="/ram">Ram dynamic </Link>
                </li>
                <li>
                    <Link to="/abc">Abc  dynamic </Link>
                </li>
            </ul>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/company" component={Company} />
                <Route path="/:user" component={User} />
            </Switch>
        </div>
    </Router>
);
const About = () => <h3>About page</h3>;
const Company = () => <h3>Company</h3>;
const User = ({match}) => (
    <div>
        <h2> user: {match.params.user}</h2>
    </div>

);

export default AmbigousMatch;