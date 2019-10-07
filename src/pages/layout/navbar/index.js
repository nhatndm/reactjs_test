import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./index.css";

class NavHeader extends Component {
  render() {
    const { favouriteImages } = this.props;
    return (
      <div className="navbar-header">
        <NavLink exact to="/" className="navbar-item navbar-item-title">
          Gallereasy
          <div></div>
        </NavLink>
        <NavLink
          activeClassName="navbar-item-active"
          exact
          to="/"
          className="navbar-item"
        >
          Search
        </NavLink>
        <NavLink
          activeClassName="navbar-item-active"
          exact
          to="/favourite"
          className="navbar-item"
        >
          Favourite ({favouriteImages.length})
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favouriteImages: state.image.images.filter(v => v.isFavourite)
  };
};

export default connect(
  mapStateToProps,
  null
)(NavHeader);
