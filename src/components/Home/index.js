import React, { Component } from "react";
import Header from "../Header";
import Posts from "../Posts";
import UserList from "../UserList";
import "./index.css";
import PostModal from "../PostModal";
import LightBox from "../LightBox";

class Home extends Component {
  state = {
    isModalOpen: false
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleClickOutside = event => {
    if (event.target.id === "lightbox") {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="container">
        <Header handlOpenModal={this.handleOpenModal} />
        <div className="row mt-5 mx-auto">
          <div className="col-8">
            <Posts />
          </div>
          <div className="col-4">
            <UserList />
          </div>
        </div>
        {isModalOpen ? (
          <LightBox handleClickOutside={this.handleClickOutside}>
            <PostModal handleCloseModal={this.handleCloseModal} />
          </LightBox>
        ) : null}
      </div>
    );
  }
}

export default Home;
