import React, { Component } from "react";
import "./App.css";
import SearchPage from "./pages/search";
import FavouritesPage from "./pages/favourites";
import { Route, Switch } from "react-router-dom";
import NavBar from "./pages/layout/navbar";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/favourite" component={FavouritesPage} />
        </Switch>
      </div>
    );
  }
}
