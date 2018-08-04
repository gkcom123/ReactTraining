import React,{Component, PureComponent} from 'react';

export default class PureComponentDemo extends Component {
    constructor(){
        super()
        this.state = {messages:[]};
        this._getLastMessage = this._getLastMessage.bind(this);
        this._onMessageChange = this._onMessageChange.bind(this);
    }
    _getLastMessage() {
        const lastmessage = this.state.messages[this.state.messages.length-1];
        return lastmessage === undefined ? "" : lastmessage;
    }
    _onMessageChange(event) {
        const messages = [...this.state.messages];
        messages.push(event.target.value);
        this.setState({messages});
    }

    render() {
        return (
            <div>
                <input type="text" value={this._getLastMessage()}
                onChange={this._onMessageChange}/>
                <MessageList messages={this.state.messages} />
                </div>
        )
    }
}
class MessageList extends Component {
    render() {
        return (
            <ul>
                {this.props.messages.map((m,i)=> <Message key={i} message={m} />)}
            </ul>
        )
    }
}

class Message extends Component {
    shouldComponentUpdate(nextProps){
        if(this.props.message===nextProps.message){
            return false;
        }
        return true;
    }
    render() {
        return (
            <li>
                {this.props.message}
            </li>
        )
    }
}
// class Message extends PureComponent {
    
//     render() {
//         return (
//             <li>
//                 {this.props.message}
//             </li>
//         )
//     }
// }