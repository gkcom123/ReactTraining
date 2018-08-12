import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
class Counter extends Component{
    constructor(props){
        super(props);
    }
    incrementIfOdd = () => {
        if(this.props.value % 2 !==0){
            this.props.onIncrement();
        }
    }
    incrementAsync = () => {
        setTimeout(this.props.onIncrement,1000);
    }
    render(){
        const {value,onIncrement,onDecrement} = this.props;
        //const value = this.props.value;
        //const {value} = this.props;
        return (
            <p>
                Clicked : {value} times
                <button onClick={onIncrement}> + </button>
                <button onClick={onDecrement}> - </button>
                {' '}
                <button onClick={this.incrementIfOdd}> Odd Increment </button>
                <button onClick={this.incrementAsync}> Increment async</button>
            </p>
        )
    }

}
// Counter.propTypes = {
//     value: PropTypes.number.isRequired,
//     onIncrement: PropTypes.func.isRequired,
//     onDecrement: PropTypes.func.isRequired
// }

const mapStateToProps = (state,ownProps) => ({
    value: state

})
const mapDispatchToProps = (dispatch,ownProps) => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }), 
    onDecrement: () => dispatch({ type: 'DECREMENT' }), 

})
export default connect(mapStateToProps,mapDispatchToProps)(Counter);