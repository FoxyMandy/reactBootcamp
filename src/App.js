import React, { Component } from "react";
import logo from "./media/tesla-cat.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row w-50 mt-5 mx-auto">
          <div className="col-12">
            <div className="card">
              <img className="card-img-top" src={logo} />
              <div className="card-body">
                <h2 className="card-title">What is that?</h2>
                <span classname="card-text">REACT</span>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="card">
              <img className="card-img-top" src={logo} />
              <div className="card-body">
                <h2 className="card-title">Who is there?</h2>
                <span classname="card-text">APP</span>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="card">
              <img className="card-img-top" src={logo} />
              <div className="card-body">
                <h2 className="card-title">Where are you?</h2>
                <span classname="card-text">ACCENTURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
