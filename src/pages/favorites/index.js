import React, { Component } from "react";
import { ImagesList } from "../../components/images";
import { connect } from "react-redux";
import "./index.css";
import { removeFromFavourite } from "../../redux/image/action";

class FavoritesPage extends Component {
  handleItemClick = ({ image, action }) => {
    if (action === "remove") {
      this.props.removeFromFavourite(this.props.images, image);
    }
  };

  render() {
    const { favoriteImages } = this.props;
    return (
      <div className="favorites-page">
        <div className="favorites-page-data">
          <ImagesList
            dataSource={favoriteImages}
            itemClick={this.handleItemClick}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.image.images,
    favoriteImages: state.image.images.filter(v => v.isFavourite)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromFavourite: (oldState, image) =>
      dispatch(removeFromFavourite(oldState, image))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesPage);
