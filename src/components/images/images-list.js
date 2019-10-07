import React, { Component } from "react";
import Image from "./image";
import "./index.css";

export default class ImagesList extends Component {
  handleImageClick = image => ({ action }) => {
    this.props.itemClick({
      action: action,
      image: image
    });
  };

  renderArray(dataSource) {
    let [parentComponent, chilComponent] = [[], []];
    let dataSourceLength = dataSource.length;
    for (let i = 0; i < dataSourceLength; i++) {
      if (i % 4 === 0) {
        chilComponent = [];
        chilComponent.push(
          <Image
            key={`child-${i}`}
            item={dataSource[i]}
            onClick={this.handleImageClick(dataSource[i])}
          />
        );
        parentComponent.push(
          <div key={`parent-${i}`} className="row images-list">
            {chilComponent}
          </div>
        );
      } else {
        chilComponent.push(
          <Image
            key={`child-${i}`}
            item={dataSource[i]}
            onClick={this.handleImageClick(dataSource[i])}
          />
        );
      }
    }

    return parentComponent;
  }

  render() {
    const { dataSource } = this.props;
    return this.renderArray(dataSource);
  }
}
