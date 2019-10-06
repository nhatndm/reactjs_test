import React, { Component } from "react";
import "./App.css";
import { Tabs, Tab } from "./components/tabs";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Tabs showTitle title="Gallereasy">
          <Tab
            id="homepage"
            label="Home Page"
            component={<div>Testing Home Page</div>}
          />
          <Tab
            id="footer"
            label="Footer Page"
            component={<div>Testing Footer Page</div>}
          />
        </Tabs>
      </div>
    );
  }
}
