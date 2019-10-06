import React, { Component } from "react";
import { ImagesList } from "../../components/images";
import "./index.css";

export default class SearchPage extends Component {
  state = {
    data: [
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif",
      "https://media0.giphy.com/media/33OrjzUFwkwEg/200_s.gif?cid=557dd9f7b2a2f1c2328a92b8cf4d975f41fcb72d0a5fbd0b&rid=200_s.gif"
    ],
    searchText: ""
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      console.log(this.state.searchText);
    }
  };

  handleChangeTextInput = event => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    const { data, searchText } = this.state;
    return (
      <div className="search-page">
        <input
          className="search-page-input"
          onKeyPress={this.handleKeyPress}
          value={searchText}
          onChange={this.handleChangeTextInput}
        />
        <div className="search-page-result">
          <ImagesList dataSource={data} />
        </div>
      </div>
    );
  }
}
