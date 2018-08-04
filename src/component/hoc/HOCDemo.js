import React,{Component, PureComponent} from 'react';
const withHighProfile = (WrappedComponent,data) => {
    class HOC extends Component {
        constructor(props){
            super(props);
        }
        render() {
            return (
                <WrappedComponent position = {data.age<30?'Employee':'Director'}
                {...this.props} />
            );
        }
    }
    return HOC;
};

export default withHighProfile;

//Pure component always does the shallow comparison
class PureComp extends PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>{this.props.value}</div>
        )
    }
    
}