import React, { Component } from "react";

export default class Image extends Component {
  render() {
    const {
      props: { imgSrc }
    } = this;
    return (
      <div className="col-12 col-sm-6 col-md-3 image-item">
        <img className="img-fluid" src={imgSrc} alt="item" />
      </div>
    );
  }
}
