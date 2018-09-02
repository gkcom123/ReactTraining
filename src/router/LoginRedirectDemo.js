import React from 'react';
import {BrowserRouter as Router, Route, Link, withRouter, Redirect} from "react-router-dom";

const AuthPage = () => (
    <Router>
        <div>
            <AuthButton />
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
            <PrivateRoute path="/protected" component={ProtectedComponent} id="iuiuix"  />
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
const AuthButton = withRouter(
    ({history}) => 
    fakeAuth.isAutheticated ? (
    <p>
        Welcome!{" "}
        <button onClick={()=>{
            fakeAuth.signout(()=>history.push("/public", {param:"sdhj"}));
        }} >
        SignOut
        </button>
    </p>) : (
        <p>You are not logged in. </p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => { 
    return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )};

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
                <input />

                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default AuthPage;