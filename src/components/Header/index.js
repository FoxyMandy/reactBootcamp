import React, { Component } from "react";
import "../../App.css";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="p-3 mb-2 bg-info text-white App-header">
            <div className="row">
              <h2 className="col-10">MEOWGRAM</h2>
              <div className="col-2">
                <button
                  onClick={this.props.handlOpenModal}
                  className="col-12 btn btn-dark"
                >
                  Meow IN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
