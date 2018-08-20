import React, { Component } from "react";
import image from "../../media/tesla-cat.jpg";

class PostCard extends Component {
  render() {
    return (
      <div className="col-12 mt-5">
        <div className="card">
          <img className="card-img-top" src={this.props.img} />
          <div className="card-body">
            <h1 className="card-title">{this.props.title}</h1>
            <span className="card-text">{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
