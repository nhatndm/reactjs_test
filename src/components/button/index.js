import React, { Component } from "react";
import Spinner from "../../assest/loading.gif";
import "./index.css";

export default class Button extends Component {
  static defaultProps = {
    title: "",
    className: "button-default",
    onClick: () => null,
    loadingStatus: false
  };

  render() {
    const { className, onClick, title, loadingStatus } = this.props;
    return (
      <div className={className ? className : "default"} onClick={onClick}>
        {loadingStatus ? (
          <img src={Spinner} alt="loadding spinner" width={40} height={40} />
        ) : null}
        {title}
      </div>
    );
  }
}
