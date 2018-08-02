import React,{Component} from 'react';

export default class Notification extends Component {
    constructor(props){
        super(props);
        this.state= {
            justClicked:null,
        }
        this._onClick = this._onClick.bind(this);
    }
    _onClick(e) {
        //console.log('on CLick',e.target.dataset.letter);
        this.setState({
            justClicked: e.target.dataset.letter
        })
        const obj = {status:'Submitted'};
        this.props.onClose(obj);
    }
    shouldComponentUpdate(){
        console.log(this.state.justClicked);
        // if(this.state.justClicked==='Clicked'){
        //     return false;
        // }
        return false;
    }
    render(){
        console.log('in render method',this.state.justClicked );
        return (
        <div>
            Just Clicked : {this.state.justClicked}
            <button key={'abd'} data-letter={'Clicked'} onClick={(e)=>{this._onClick(e);}}>Submit</button>
        </div>
        )
    }
}
