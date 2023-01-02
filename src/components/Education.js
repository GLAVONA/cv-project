import React from "react";

export let currentIndex = 0;

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      education: {
        institution: "",
        years: "",
        major: "",
      },
    };
    this.updateInfo = this.updateInfo.bind(this);
    this.makeEditable = this.makeEditable.bind(this);
  }


  makeEditable(e) {
    e.target.select();
    currentIndex = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement)-1;
  }


  updateInfo(e) {
    this.setState({
      education: {
        ...this.state.education,
        [e.target.name]: e.target.value,
      },
    });
  }

  render() {
    return (
        <form className="educationContainer" onSubmit={this.onSubmitForm}>
          <label htmlFor="institution">Institution: </label>
          <input
            name="institution"
            onClick={this.makeEditable}
            onChange={this.updateInfo}
            placeholder="e.g. Harvard University"
          />
          <label htmlFor="major">Major: </label>
          <input
            name="major"
            onClick={this.makeEditable}
            onChange={this.updateInfo}
            placeholder="e.g. Computer Science"
          />
          <label htmlFor="years">Years: </label>
          <input
            name="years"
            onClick={this.makeEditable}
            onChange={this.updateInfo}
            placeholder="eg. 2012-2016"
          />
        </form>
    );
  }
}

export default Education;
