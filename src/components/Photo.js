import React from "react";

class Photo extends React.Component {
  constructor() {
    super();
    this.state = {
      photoURL:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: "300px",
    };
  }
  render() {
    return (
      <div className="photo">
        <img
          src={this.state.photoURL}
          alt="Your Photo"
          style={{ width: this.state.width,
          height: "100%" }}
        />
      </div>
    );
  }
}

export default Photo;
