import React,{Component} from 'react';
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