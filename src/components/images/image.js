import React, { Component } from "react";
import { ReactComponent as HeartSVG } from "../../assest/heart.svg";

export default class Image extends Component {
  state = {
    isFavorite: false,
    imageClass: "not-hover"
  };

  onMouseEnter = e => {
    if (!this.state.isFavorite) {
      this.setState({ imageClass: "hover" });
    }
  };

  onMouseLeave = e => {
    if (!this.state.isFavorite) {
      this.setState({ imageClass: "not-hover" });
    }
  };

  onImageClick = e => {
    this.setState(prevState => {
      return {
        isFavorite: !prevState.isFavorite,
        imageClass: !prevState.isFavorite ? "liked" : "hover"
      };
    });
  };

  render() {
    const {
      props: { imgSrc },
      state: { imageClass }
    } = this;
    return (
      <div
        className="col-12 col-sm-6 col-md-3 image-item"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onImageClick}
      >
        <img className="img-fluid" src={imgSrc} alt="item" />
        <HeartSVG className={imageClass} />
      </div>
    );
  }
}
