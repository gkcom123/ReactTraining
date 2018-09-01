import React from 'react';
import {BrowserRouter as Router, Route, Link, WithRouter, Redirect} from "react-router-dom";
import { format } from 'path';

const AuthPage = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/public">Public View</Link>
                </li>
                <li>
                    <Link to="/protected">Protected View</Link>
                </li>
            </ul>
            <Route path="/public" component={PublicComponent} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/protected" component={ProtectedComponent} />
        </div>
    </Router>
);

const PublicComponent = () => (
    <div>
        <h3>Public page</h3>
    </div>
);
const ProtectedComponent = () => (
    <div>
        <h3>Protected page</h3>
    </div>
);
const fakeAuth = {
    isAutheticated: false,
    authenticate(cb) {
        this.isAutheticated = true;
        setTimeout(cb,100);//fake async
    },
    signout(cb){
        this.isAutheticated = false;
        setTimeout(cb,100);
    }
};

const PrivateRoute = ({component:Component, ...rest}) => {
    <Route {...rest} render={props=>fakeAuth.isAutheticated ? (<Component {...props} /> ) : 
    (<Redirect to={{pathname:"/login",state:{from:props.location}
    }}/>)}
};
class LoginPage extends React.Component {
    state ={
        redirectToReferer: false
    }
    login = () => {
        fakeAuth.authenticate(()=>{
            this.setState({redirectToReferer: true})
        });
    };
    render(){
        //Es6 
        const {from} = this.props.location.state || {from:{pathname:"/"}};
        const {redirectToReferer} = this.state;
        //Java script
        // if(this.props.location.state.form){
        //     form = this.props.location.state.form
        // }
        // else{
        //     form = {pathname:"/"};
        // }
        if(redirectToReferer) {
            return <Redirect to={from} />
        }
        return (
            <div>
                <p>Please login to view the page at {from.pathname}</p>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}