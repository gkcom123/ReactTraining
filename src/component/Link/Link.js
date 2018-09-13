import React,{Component} from 'react';
import style from './style';

const STATUS ={
    HOVERED: 'hovered',
    NORMAL:'normal',
}
 
export default class LinkDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            class: STATUS.NORMAL,
        }
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        
    }
    _onMouseEnter() {
        this.setState({class:STATUS.HOVERED});
    }
    _onMouseLeave() {
        this.setState({class:STATUS.NORMAL});
    }
    render() {
        const classValue = style[this.state.class];
        return (
            <a className={this.state.class} href={this.props.page || '#'}
            onMouseEnter={this._onMouseEnter}
            onMouseLeave={this._onMouseLeave}>{this.props.children}</a>
        );
    }

}