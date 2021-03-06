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
import BasicRouteEx from './router/BasicRoute';
import ParamExamples from './router/RouteParameters';
import AuthPage from './router/LoginRedirectDemo';
import AmbigousMatch from './router/AmbigousRoute';
import SimpleForm from './component/form/SimpleForm';
import { FetchDemo } from './component/serviceCall/FetchDemo';
import {Values} from "redux-form-website-template";
import SyncValidationForm from './component/form/SyncValidationForm';
import FieldValidationForm from './component/form/FieldValidationForm';
import AsyncValidationForm from './component/form/AsyncValidationForm';
import SubmitValidation from './component/form/SubmitValidation';
import AsyncChangeValidation from './component/form/AsyncChangeValidation';
import Label from './component/Label';
import LinkDemo from './component/Link/Link';
import MochaDemo from './component/MochaTest/MochaDemo';
class App extends Component {
  constructor(props){
    super(props);
    //this.onNotificationClose = this.onNotificationClose.bind(this);
  }
  // onNotificationClose(obj) {
  //   console.log(obj);
  //   if(obj.status==='Submitted'){
  //     alert(' Form has been submitted');
  //   }
  //   else{
  //     alert(' Form has been failed');
  //   }
  //   //alert('i m in parent');
  // }
  submitCall() {
    console.log('Submit form',Values);

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
        {/* <EmployeeContainer/> */}
        
        {/* <AsyncCall /> */}
        
        {/* <BasicRouteEx />
        <ParamExamples /> */}
        {/* <AuthPage/> */}
        {/* <AmbigousMatch /> */}
        {/* <SimpleForm onSubmit={this.submitCall} /> */}
        {/* <SyncValidationForm onSubmit={this.submitCall} /> */}
        {/* <FieldValidationForm onSubmit={this.submitCall}/> */}
        {/* <AsyncValidationForm onSubmit={this.submitCall} /> */}
        {/* <SubmitValidation /> */}
        {/* <AsyncChangeValidation onSubmit={this.submitCall} />

        <Values form="fieldForm" /> */}

        {/* <Label htmlFor='test' textLabel='This is a Label'></Label> */}
        {/* <LinkDemo page="https://www.google.com/">Google nEw</LinkDemo> */}
        <MochaDemo heading="Mocha test Demo" paragraph="This is a sample paragraph"/>
      </div>
    );
  }
}

export default App;
