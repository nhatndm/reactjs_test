import React, { Component, Fragment } from "react";
import "./index.css";

export default class Tabs extends Component {
  state = {
    activeTab: this.props.children.find(child => child.props.defaultTab).props
      .id
  };

  handleChangeTab = id => e => {
    e.preventDefault();
    this.setState({ activeTab: id });
  };

  render() {
    const {
      props: { children, showTitle, title },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {showTitle ? (
            <li className="tab-list-item tab-list-item-title">
              {title} <div></div>
            </li>
          ) : null}
          {children.map(child => {
            const { label, id } = child.props;
            return (
              <li
                key={id}
                className={`tab-list-item ${
                  id === activeTab ? "tab-list-active" : ""
                }`}
                onClick={this.handleChangeTab(id)}
              >
                {label}
              </li>
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map(child => {
            const { id, component } = child.props;

            if (id !== activeTab) return undefined;
            return <Fragment key={id}>{component}</Fragment>;
          })}
        </div>
      </div>
    );
  }
}
