import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const BasicRouteEx = () => (
    <Router>
        <div>
            <ul>
            <li>
                    <Link to="/">HomeLink</Link>
                </li>
                <li>
                    <Link to="/about">AboutLink</Link>
                </li>
                <li>
                    <Link to="/contact">ContactLink</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about/:id" component={AboutDup} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
            </Switch>
            
            {/* <Route path="/contact/:id" component={Contact} /> */}
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home Page</h2>
    </div>
);
const Contact = () => (
    <div>
        <h2>Contact Page</h2>
        <p>jdshfjkhsdfjkdfhjkdshjkdhfjkhdsfkjhdfkjhdfkjhdfskjfsdkjhfksd
            jsdfjhksdkfkjhdfsjkhfds
            dksfjhjskdfhkjfs
        </p>
    </div>
);
const About = () => (
    <div>
        <h2>About Page</h2>
    </div>
);
const AboutDup = () => (
    <div>
        <h2>About Page Dup</h2>
    </div>
);

const NoMatch = () => (
    <div>
        <h2>404 server Error . Please try later</h2>
    </div>
);
export default BasicRouteEx;