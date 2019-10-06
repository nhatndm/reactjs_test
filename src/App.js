import React, { Component } from "react";
import "./App.css";
import { Tabs, Tab } from "./components/tabs";
import SearchPage from "./pages/search";
import FavoritesPage from "./pages/favorites";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Tabs showTitle title="Gallereasy">
          <Tab
            id="searchPage"
            label="Search"
            component={<SearchPage />}
            defaultTab
          />
          <Tab
            id="favouritePage"
            label="Favourites"
            component={<FavoritesPage />}
          />
        </Tabs>
      </div>
    );
  }
}
