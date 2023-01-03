import React from "react";

function Education (props) {
    return (
        <form className="educationContainer">
          <label htmlFor="institution">Institution: </label>
          <input
            name="institution"
            placeholder="e.g. Harvard University"
            value = {props.institution}
            onChange = {props.change}
            onClick={e=>e.target.select()}
          />
          <label htmlFor="major">Major: </label>
          <input
            name="major"
            placeholder="e.g. Computer Science"
            value={props.major}
            onChange = {props.change}
            onClick={e=>e.target.select()}
          />
          <label htmlFor="years">Years: </label>
          <input
            name="years"
            placeholder="eg. 2012-2016"
            value={props.years}
            onChange = {props.change}
            onClick={e=>e.target.select()}
          />
        </form>
    );
  }

export default Education;
