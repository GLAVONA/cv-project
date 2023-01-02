import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <form className="educationContainer">
          <label htmlFor="institution">Institution: </label>
          <input
            name="institution"
            placeholder="e.g. Harvard University"
            value = {this.props.institution}
            onChange = {this.props.change}
            onClick={e=>e.target.select()}
          />
          <label htmlFor="major">Major: </label>
          <input
            name="major"
            placeholder="e.g. Computer Science"
            value={this.props.major}
            onChange = {this.props.change}
            onClick={e=>e.target.select()}
          />
          <label htmlFor="years">Years: </label>
          <input
            name="years"
            placeholder="eg. 2012-2016"
            value={this.props.years}
            onChange = {this.props.change}
            onClick={e=>e.target.select()}
          />
        </form>
    );
  }
}

export default Education;
