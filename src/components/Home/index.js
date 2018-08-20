import React, { Component } from "react";
import Header from "../Header";
import Posts from "../Posts";
import UserList from "../UserList";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row mt-7 mx-auto">
          <div className="col-8">
            <Posts />
          </div>
          <div className="col-4 mt-7">
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
