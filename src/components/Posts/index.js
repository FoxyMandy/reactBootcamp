import React, { Component } from "react";
import PostCard from "../PostCard";
import image from "../../media/tesla-cat.jpg";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row w-300 mx-auto">
          <PostCard text="2554 likes" title="JD || 20 AUG" img={image} />
          <PostCard text="Text" title="Day 2" img={image} />
          <PostCard text="Text" title="Day 3" img={image} />
        </div>
      </div>
    );
  }
}

export default Home;
