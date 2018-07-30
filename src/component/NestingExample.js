import React,{Component} from 'react';
import NestingChildExample from './NestingChildEx';

class NestingExample extends Component{
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.propObj);
        return (
            <div>
                <h1>Nesting Example</h1>
                {this.props.propObj.name}{this.props.propObj.Age}
                <NestingChildExample childStatement={this.props.statement}/>
            </div>
        );
    }

}
export default NestingExample;