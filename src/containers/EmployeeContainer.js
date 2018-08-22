import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import {toggleTodo} from '../actions'

class EmployeeContainer extends Component {
    componentDidMount() {
        this.props.fetchUsers();
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
        return(
        <div>
          <h4>Employee Dir: Redux Thunk</h4>
          <ul className="list-style">
            {this.props.value.user.map(this.renderUser)}
          </ul>
        </div>
        );
    }
}
const mapStateToProps = (state,ownProps) => ({
    value: state

})
export default connect(mapStateToProps,actions)(EmployeeContainer);