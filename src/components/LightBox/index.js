import React, { Component } from "react";

class LightBox extends Component {
  render() {
    return (
      <div
        id="lightbox"
        onClick={this.props.handleClickOutside}
        className="modal show"
      >
        {this.props.children}
      </div>
    );
  }
}

export default LightBox;
