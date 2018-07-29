import React,{Component} from 'react';
import PropTypes from 'prop-types';

class HelloSatefull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subTitle:'Mr'
        }
    }
    sayHi(event) {
        alert(`Hi ${this.state.subTitle}`);
    }
    render() {
        return (
            <div> 
                <button onClick={this.sayHi.bind(this)}> Hello {this.props.name}</button>
            </div>
            );
    }

}
HelloSatefull.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
HelloSatefull.defaultProps = {
	name:'Satish Training'
}
export default HelloSatefull;