import React, { Component } from "react";
import { ImagesList } from "../../components/images";
import { connect } from "react-redux";
import { fetchImages, loadMoreImages } from "../../redux/image/action";
import "./index.css";
import Button from "../../components/button";

class SearchPage extends Component {
  state = {
    searchText: "",
    currentPage: 0
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      const { fetchImages } = this.props;
      const { searchText } = this.state;
      fetchImages(searchText);
    }
  };

  handleChangeTextInput = event => {
    this.setState({ searchText: event.target.value });
  };

  handleLoadMore = () => {
    const { loadMoreImages, images } = this.props;
    const { searchText } = this.state;
    this.setState(preState => {
      let page = preState.currentPage + 1;
      loadMoreImages(images, searchText, page);
      return { currentPage: page };
    });
  };

  render() {
    const { searchText } = this.state;
    const { images, loading_status } = this.props;
    return (
      <div className="search-page">
        <input
          className="search-page-input"
          onKeyPress={this.handleKeyPress}
          value={searchText}
          onChange={this.handleChangeTextInput}
        />
        <div className="search-page-result">
          <ImagesList dataSource={images} />
        </div>
        {images.length > 0 ? (
          <Button
            onClick={this.handleLoadMore}
            title="Load More"
            loadingState={loading_status}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.image.images,
    loading_status: state.system.loading_status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: searchText => dispatch(fetchImages(searchText)),
    loadMoreImages: (oldState, searchText, page) =>
      dispatch(loadMoreImages(oldState, searchText, page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
