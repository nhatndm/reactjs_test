import React, { Component } from "react";
import { ImagesList } from "../../components/images";
import { connect } from "react-redux";
import "./index.css";

class FavoritesPage extends Component {
  state = {};

  render() {
    const { favoriteImages } = this.props;

    return (
      <div className="favorites-page">
        <div className="favorites-page-data">
          <ImagesList dataSource={favoriteImages} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favoriteImages: state.image.images.filter(v => v.isFavourite)
  };
};

export default connect(
  mapStateToProps,
  null
)(FavoritesPage);
