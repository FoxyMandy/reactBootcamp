import React, { Component } from "react";
import UserCard from "../UserCard";
import image from "../UserCard";

class UserList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <UserCard text="Black" title="JD" img={image} />
          <UserCard text="Gray" title="Bentley" img={image} />
          <UserCard text="White" title="Assasin" img={image} />
        </div>
      </div>
    );
  }
}

export default UserList;
