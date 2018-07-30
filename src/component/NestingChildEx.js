import React,{Component} from 'react';
class NestingChildExample extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h2> i am from Nesting Child {this.props.childStatement}</h2>
        )
    }
}
// HelloSatefull.propTypes = {
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
// }
// HelloSatefull.defaultProps = {
// 	name:'Satish Training'
// }

export default NestingChildExample