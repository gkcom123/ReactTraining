import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './component/HelloStateless';
import HelloSatefull from './component/HelloStatefull';
import StateClock from './component/StateExample';
import NestingExample from './component/NestingExample';
import ContextDemo from './component/ContextDemo';
import { SucessLabel, ErrrorLabel } from './component/inheritanceDemo';
import { SucessLabel2, ErrrorLabel2 } from './component/CompositionDemo';
import WrappedComponent from './component/hoc/BaseEmp';
import Notification from './FunctionCallDemo';
import PureComponentDemo from './component/pure-compoent/PureComponentDemo';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import TodoList from './component/TodoList';
import Footer from './component/Footer';
import EmployeeContainer from './containers/EmployeeContainer';
import AsyncCall from './containers/AsyncCall';
//import { FetchDemo } from './component/serviceCall/FetchDemo';


class App extends Component {
  constructor(props){
    super(props);
    this.onNotificationClose = this.onNotificationClose.bind(this);
  }
  onNotificationClose(obj) {
    console.log(obj);
    if(obj.status==='Submitted'){
      alert(' Form has been submitted');
    }
    else{
      alert(' Form has been failed');
    }
    //alert('i m in parent');
  }
  render() {
    const obj = {name:'Satish', 'Age': 25, active: true};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Welcome Satish
        </p>
        {/* <HelloWorld />
        <HelloSatefull title='Mr' name='Satish'/>
        <StateClock />
        <NestingExample statement='This is for child' propObj = {obj}/> */}
        {/**/}
        {/* <ContextDemo/> */}

        {/* <SucessLabel> This is success</SucessLabel>
        <ErrrorLabel>This is error</ErrrorLabel>
        <SucessLabel2> this is success Composition </SucessLabel2>
        <ErrrorLabel2> this is error Composition </ErrrorLabel2> */}

        {/* <WrappedComponent/>
        <Notification onClose= {this.onNotificationClose} /> */}
        {/* <PureComponentDemo/> */}
        {/* <FetchDemo/> */}
        {/* <AddTodo />
        <VisibleTodoList />
        <Footer/> */}
        <EmployeeContainer/>
        
        {/* <AsyncCall /> */}
        
      </div>
    );
  }
}

export default App;
