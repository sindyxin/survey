import React, { Component} from "react";
// using ES6 modules
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

//BrowserRouter thought as the brains of react-router is the thing that tell react-router how to behave is the thing that looks at the current URL and then change a set of components that are visible on the screen at any given time.

//router is react componet that is used to set uo arule between a certain route taht the user might visit inside an application and a set of components that will be actully visible on the screen
// using CommonJS modules
// var BrowserRouter = require('react-router-dom').BrowserRouter
// var Route = require('react-router-dom').Route

// const Header = ()=> <h2>Header</h2>
import Header from "./Header";
import Landing from "./Landing";

const Dashboard = ()=> <h2>Dashboard</h2>

const SurveyNew = ()=> <h1>SurveyNew</h1>


// const App = ()=>{
  class App extends Component {
    componentDidMount(){
      this.props.fetchUser();
    }
    render(){
      return (
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Landing}/>
              <Route exact path="/surveys" component={Dashboard}/>
              <Route path="/surveys/new" component={SurveyNew}/>
            </div>
          </BrowserRouter>
        </div>
      );
    }  
};

export default connect(null, actions) (App);