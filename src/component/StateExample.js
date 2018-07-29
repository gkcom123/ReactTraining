import React,{Component} from 'react';
 
class StateClock extends Component{
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {date: new Date()};
        
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.timerID = setInterval(() =>this.tick(),1000);
    }
    componentDidUpdate(prevProps, prevState,snapshot){
        //console.log('componentDidUpdate', prevState,snapshot);
        // if(time=='09'){
        //     //call the API
        // }
    }
    shouldComponentUpdate(prevProps, prevState) {
        console.log(this.state.date);
        //if()
        return false;
    }
    componentDidCatch(error,info) {
        console.log('componentDidCatch',error);
    }
    componentWillUnMount(){
        console.log('componentWillUnMount');
    }
    onClick = () =>{

    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        console.log('render');
        return (
            <div>
                <h2>Time is {this.state.date.toLocaleTimeString()}</h2>
                </div>
        );
    }

}
export default StateClock;