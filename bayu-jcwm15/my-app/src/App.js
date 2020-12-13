import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigationbar from "./components/NavigationBar";
import Home from "./Pages/Home"
import Latihan1 from "./Pages/Latihan1";
import Petunjuk from "./Pages/Petunjuk"

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navigationbar></Navigationbar>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/latihan1" component={Latihan1}/>
          <Route path="/petunjuk" component={Petunjuk}/>
        </div>
      </div>
    );
  }
}

export default App;
