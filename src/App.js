import React, { Component } from "react";

import Dashboard from "./components/dashboard";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Dashboard />
      </div>
    );
  }
}

export default App;
