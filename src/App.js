import './App.css';
import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./containers/Home";

class App extends Component {

  renderRouter(){
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }

  render() {
    return (
      <Home />
    );
  }
}

export default App;
