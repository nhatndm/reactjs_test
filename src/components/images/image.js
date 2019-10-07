import React, { Component } from "react";
import { ReactComponent as HeartSVG } from "../../assest/heart.svg";

export default class Image extends Component {
  state = {
    isFavourite: false,
    imageClass: "not-hover"
  };

  componentDidMount() {
    if (this.props.item.isFavourite) {
      this.setState({ isFavourite: true, imageClass: "liked" });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item.isFavourite) {
      this.setState({ isFavourite: true, imageClass: "liked" });
    }
  }

  onMouseEnter = e => {
    if (!this.state.isFavourite) {
      this.setState({ imageClass: "hover" });
    }
  };

  onMouseLeave = e => {
    if (!this.state.isFavourite) {
      this.setState({ imageClass: "not-hover" });
    }
  };

  onImageClick = e => {
    this.setState(prevState => {
      if (!prevState.isFavourite) {
        this.props.onClick({
          action: "add"
        });
      } else {
        this.props.onClick({
          action: "remove"
        });
      }

      return {
        isFavourite: !prevState.isFavourite,
        imageClass: !prevState.isFavourite ? "liked" : "hover"
      };
    });
  };

  render() {
    const {
      props: { item },
      state: { imageClass }
    } = this;
    return (
      <div
        className="col-12 col-sm-6 col-md-3 image-item"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onImageClick}
      >
        <img
          className="img-fluid"
          src={item.images.fixed_height_still.url}
          alt="item"
        />
        <HeartSVG className={imageClass} />
      </div>
    );
  }
}
