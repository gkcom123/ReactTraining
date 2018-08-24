import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import {toggleTodo} from '../actions'

class EmployeeContainer extends Component {
    componentDidMount() {
        // this method will be used if u r using redux-promise
        this.props.fetchUserInPromise();
    }
    renderUser({id,name,email,company}) {
        return (
            <li className="list-group-item">
                <span>{email} {id} {company.name}=====></span>
                {name}
            </li>
        );
    }
    render() {
        console.log('render', this.props.value);
        if(this.props.value.user.length==0){
            return (
                <div>Loading......</div>
            )
        }
        return(
        <div>
          <h4>Employee Dir: Redux Promise</h4>
          <ul className="list-style">
            {this.props.value.user.data.map(this.renderUser)}
          </ul>
        </div>
        );
    }
}
const mapStateToProps = (state,ownProps) => ({
    value: state

})
export default connect(mapStateToProps,actions)(EmployeeContainer);