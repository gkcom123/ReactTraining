import React,{Component} from 'react';
import "./inheritanceStyle.css";

class Label extends Component {
    constructor(props) {
        super(props);
        this.className = 'plain-label';
    }
    render() {
        console.log(this.className, '--->',this.props.children);
        return <span className={this.className}>{this.props.children}</span>
    }
}

class SucessLabel extends Label {
    constructor(props) {
        super(props);
        this.className = this.className + ' success-label';
    }
}
class ErrrorLabel extends Label {
    constructor(props) {
        super(props);
        this.className = this.className + ' error-label';
    }
}

export {SucessLabel,ErrrorLabel};