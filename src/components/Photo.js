import React from "react";

function Photo (prop){

    return (
      <div className="photo">
        <img
          src={prop.src}
          alt="Your Photo"
          style={{ width: "auto",
          height: "200px" }}
          onMouseOver={prop.mouseover}
        />
      </div>
    );
  }


export default Photo;
