import React, { Component } from "react";
import { ImagesList } from "../../components/images";
import "./index.css";

export default class FavoritesPage extends Component {
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

  render() {
    const { data } = this.state;
    return (
      <div className="favorites-page">
        <div className="favorites-page-data">
          <ImagesList dataSource={data} />
        </div>
      </div>
    );
  }
}
