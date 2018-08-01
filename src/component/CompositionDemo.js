import React,{Component} from 'react';
import "./inheritanceStyle.css";

class Label extends Component {
    render() {
        return <span className={this.props.passedClassName + ' plain-label'}>{this.props.children}</span>
    }
}

class SucessLabel2 extends Component {
    render() {
        return <Label passedClassName='success-label'>{this.props.children}</Label>
    }
}
class ErrrorLabel2 extends Component {
    render() {
        return <Label passedClassName='error-label'>{this.props.children}</Label>
    }
}

export {SucessLabel2,ErrrorLabel2};