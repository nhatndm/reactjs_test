import React, { Component } from "react";
import { ImagesList } from "../../components/images";
import { connect } from "react-redux";
import "./index.css";
import { removeFromFavourite } from "../../redux/image/action";

class FavouritesPage extends Component {
  handleItemClick = ({ image, action }) => {
    if (action === "remove") {
      this.props.removeFromFavourite(this.props.images, image);
    }
  };

  render() {
    const { favouriteImages } = this.props;
    return (
      <div className="favourites-page">
        <div className="favourites-page-data">
          <ImagesList
            dataSource={favouriteImages}
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
    favouriteImages: state.image.images.filter(v => v.isFavourite)
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
)(FavouritesPage);
