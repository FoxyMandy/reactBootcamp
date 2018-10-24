import React, { Component } from "react";
import UserCard from "../UserCard";
import image0 from "../../media/ginger.jpg";
import image1 from "../../media/grey.jpg";
import image2 from "../../media/white.jpg";

class UserList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <UserCard text="Online" title="Hirrem" img={image0} />
          <UserCard text="Online" title="Bentley" img={image1} />
          <UserCard text="Offline" title="Assasin" img={image2} />
        </div>
      </div>
    );
  }
}

export default UserList;
